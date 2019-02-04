/* eslint-disable max-len */
const compiler = require("../index");

const ENSURE = process.env.STREX_LANG_ENSURE === "1";

describe("compiler > literals", () => {
  test("returns the number zero as a string if empty input", () => {
    const actual = compiler("", ENSURE);
    const expected = "0";

    expect(actual).toBe(expected);
  });

  test("returns a given integer", () => {
    const actual = compiler("42\n", ENSURE);
    const expected = "42";

    expect(actual).toBe(expected);
  });

  test("returns a given integer without leading zero", () => {
    const actual = compiler("0023\n", ENSURE);
    const expected = "23";

    expect(actual).toBe(expected);
  });

  test("returns a given float", () => {
    const actual = compiler("9999.99999999999999999999999\n", ENSURE);
    const expected = "9999.99999999999999999999999";

    expect(actual).toBe(expected);
  });

  test("returns a given float without leading zero", () => {
    const actual = compiler("0003.9\n", ENSURE);
    const expected = "3.9";

    expect(actual).toBe(expected);
  });
});
