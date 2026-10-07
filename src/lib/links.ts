// Spread onto an <a>: external http(s) links open in a new tab, the rest stay put.
export function linkProps(href: string) {
  return /^https?:\/\//.test(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}
