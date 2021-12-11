import { unslugify } from "./unslugify";

describe("unslugify", () => {
  it("should unslugify a string", () => {
    const slug = "this-is-a-slug";
    expect(unslugify(slug)).toBe("This Is A Slug");
  });
});
