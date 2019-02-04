/* eslint-disable max-len */
const compiler = require("../index");

const ENSURE = process.env.STREX_LANG_ENSURE === "1";

describe("compiler > operation > complex", () => {
  test("calculates correct result for different mixed equations [1]", () => {
    const actual = compiler("1 + 100\n*3\n+ 4 / 2\n-1*4\n", ENSURE);
    const expected = "301";

    expect(actual).toBe(expected);
  });

  test("calculates correct result for different mixed equations [2]", () => {
    const actual = compiler("1 + 2 * 2\n/ 3 + 2\n", ENSURE);
    const expected = "1";

    expect(actual).toBe(expected);
  });

  test("use braces to change precedence [1]", () => {
    const actualWithBraces = compiler("2.2 * (2 + 3.0) / 4\n", ENSURE);
    const actualWithoutBraces = compiler("2.2 * 2 + 3.0 / 4\n", ENSURE);
    const expectedWithBraces = "2.75";
    const expectedWithoutBraces = "5.15";

    expect(actualWithBraces).toBe(expectedWithBraces);
    expect(actualWithoutBraces).toBe(expectedWithoutBraces);
  });

  test("use braces to change precedence [2]", () => {
    const actualWithBraces = compiler("2 / (4.5 + 1) * 4\n", ENSURE);
    const actualWithoutBraces = compiler("2 / 4.5 + 1 * 4\n", ENSURE);
    const expectedWithBraces = "1.4545454545454545454";
    const expectedWithoutBraces = "4.4444444444444444444";

    expect(actualWithBraces).toBe(expectedWithBraces);
    expect(actualWithoutBraces).toBe(expectedWithoutBraces);
  });
});
