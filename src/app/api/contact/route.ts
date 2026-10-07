import nodemailer from "nodemailer";

const LIMITS = { name: 100, email: 254, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort limiter: 5 messages per IP per 10 minutes. It lives in memory, so
// it resets on restart and isn't shared across serverless instances.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

// Strip characters that could break out of a header (subject, reply-to).
const oneLine = (s: string) => s.replace(/[\r\n<>"]+/g, " ").trim();

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (rateLimited(ip)) {
    return Response.json(
      { error: "Too many messages. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field, bots do.
  if (typeof body.website === "string" && body.website !== "") {
    return Response.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return Response.json(
      { error: "Please fill in your name, email and message." },
      { status: 400 },
    );
  }
  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    message.length > LIMITS.message
  ) {
    return Response.json(
      { error: "One of the fields is too long." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_TO || user;
  if (!user || !pass || !to) {
    console.error(
      "Contact form: GMAIL_USER and GMAIL_APP_PASSWORD must be set (see .env.example).",
    );
    return Response.json(
      { error: "Email isn't set up on the server yet." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    // App Passwords are shown with spaces ("abcd efgh ijkl mnop"); Gmail wants them without.
    auth: { user, pass: pass.replace(/\s+/g, "") },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio contact" <${user}>`,
      to,
      replyTo: `"${oneLine(name)}" <${email}>`,
      subject: `Portfolio message from ${oneLine(name)}`,
      text: `From: ${oneLine(name)} <${email}>\n\n${message}`,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form: sending failed", err);
    return Response.json(
      { error: "Couldn't send your message. Please try again later." },
      { status: 502 },
    );
  }
}
