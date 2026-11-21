// Security headers added to every page the server renders.
// Script and style sources are intentionally not restricted: the page relies on inline
// startup scripts and the hosting platform adds its own, so a strict script policy would
// need per-request nonces. These directives block plugins, base-tag hijacking, foreign form
// posts and clickjacking without risking a blank page.
const FRAME_ANCESTORS =
  "frame-ancestors 'self' https://lovable.dev https://*.lovable.dev https://*.lovable.app https://*.lovableproject.com";

export function securityHeaders(isProduction: boolean): Record<string, string> {
  const csp = ["object-src 'none'", "base-uri 'self'", "form-action 'self'"];
  // Only on the live site: the editor preview runs over plain http and inside the editor frame.
  if (isProduction) csp.push(FRAME_ANCESTORS, "upgrade-insecure-requests");
  return {
    "Content-Security-Policy": csp.join("; "),
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
    "Cross-Origin-Opener-Policy": "same-origin",
  };
}

export function withSecurityHeaders(response: Response, isProduction: boolean): Response {
  // 101 (upgrade) and opaque responses can't be rebuilt; pass them through untouched.
  if (response.status === 101 || response.type === "opaqueredirect") return response;
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(securityHeaders(isProduction))) {
    if (!headers.has(name)) headers.set(name, value);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
