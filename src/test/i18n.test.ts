import { describe, expect, it } from "vitest";

import { dictionaries, directionFor } from "@/lib/i18n-dictionary";

function keys(obj: unknown, prefix = ""): string[] {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) return [prefix];
  return Object.entries(obj).flatMap(([k, v]) => keys(v, prefix ? `${prefix}.${k}` : k));
}

describe("Arabic and English support", () => {
  it("Arabic uses right-to-left and English left-to-right", () => {
    expect(directionFor("ar")).toBe("rtl");
    expect(directionFor("en")).toBe("ltr");
  });

  it("every English label has an Arabic translation", () => {
    expect(keys(dictionaries.ar).sort()).toEqual(keys(dictionaries.en).sort());
  });
});
