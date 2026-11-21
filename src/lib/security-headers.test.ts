import { describe, expect, it } from "vitest";
import { securityHeaders, withSecurityHeaders } from "./security-headers";

describe("security headers", () => {
  it("blocks MIME sniffing and plugins on every response", async () => {
    const res = withSecurityHeaders(new Response("ok", { status: 200 }), false);
    expect(res.headers.get("X-Content-Type-Options")).toBe("nosniff");
    expect(res.headers.get("Content-Security-Policy")).toContain("object-src 'none'");
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("ok");
  });

  it("only restricts framing on the live site, so the editor preview keeps working", () => {
    expect(securityHeaders(false)["Content-Security-Policy"]).not.toContain("frame-ancestors");
    expect(securityHeaders(true)["Content-Security-Policy"]).toContain("frame-ancestors 'self'");
  });

  it("keeps a header the page already set", () => {
    const res = withSecurityHeaders(new Response("", { headers: { "Referrer-Policy": "no-referrer" } }), true);
    expect(res.headers.get("Referrer-Policy")).toBe("no-referrer");
  });
});
