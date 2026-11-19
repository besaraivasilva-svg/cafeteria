import { describe, expect, it } from "vitest";
import { formatPrice, menu } from "./menu";

describe("menu prices", () => {
  it("shows prices in Brazilian reais with a comma", () => {
    expect(formatPrice(16)).toBe("R$ 16,00");
    expect(formatPrice(7.5)).toBe("R$ 7,50");
  });
  it("every item has a name, description and a positive price", () => {
    for (const c of menu) for (const i of c.items) {
      expect(i.name.length).toBeGreaterThan(0);
      expect(i.description.length).toBeGreaterThan(0);
      expect(i.price).toBeGreaterThan(0);
    }
  });
});
