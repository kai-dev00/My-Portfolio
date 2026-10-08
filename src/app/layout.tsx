import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { KapeContent } from "@/components/kape/KapeContent";
import { KapeCursor } from "@/components/kape/KapeCursor";
import { KapeProvider } from "@/components/kape/KapeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyle Vincent Manuel · Software Engineer",
  description:
    "Portfolio of Kyle Vincent Manuel, a software engineer building mobile and web apps.",
  // Browser tab icon follows the browser's own theme (not the site toggle).
  // 256px copies of public/logo-dark.png and logo-light.png.
  icons: {
    icon: [
      { url: "/icon-dark.png", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon-light.png", type: "image/png", media: "(prefers-color-scheme: light)" },
    ],
    apple: "/icon-dark.png",
  },
};

// Runs before first paint: saved choice, else the OS preference, else dark.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the inline script below sets data-theme before hydration.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      {/* overflow-x-clip: the 1px page shake must never cause a horizontal scrollbar. */}
      <body className="flex min-h-full flex-col overflow-x-clip">
        <KapeProvider>
          {/* Outside KapeContent: that wrapper shakes, and position:fixed inside it would shake too. */}
          <KapeCursor />
          <Header />
          <KapeContent>
            {children}
            <Footer />
          </KapeContent>
        </KapeProvider>
      </body>
    </html>
  );
}
