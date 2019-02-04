/* eslint-disable max-len */
const compiler = require("../index");

const ENSURE = process.env.STREX_LANG_ENSURE === "1";

describe("compiler > operation > basic", () => {
  describe("for integer", () => {
    test("calculates correct result for different equations with the + operator", () => {
      const actual = compiler("1 + 2\n+4\n+3\n", ENSURE);
      const expected = "10";

      expect(actual).toBe(expected);
    });

    test("calculates correct result for different equations with the - operator", () => {
      const actual = compiler("34\n-4\n-10\n", ENSURE);
      const expected = "20";

      expect(actual).toBe(expected);
    });

    test("calculates correct result for different equations with the * operator", () => {
      const actual = compiler("2 * 4\n*3\n", ENSURE);
      const expected = "24";

      expect(actual).toBe(expected);
    });

    test("calculates correct result for different equations with the / operator", () => {
      const actual = compiler("100\n/10\n/2\n", ENSURE);
      const expected = "5";

      expect(actual).toBe(expected);
    });
  });

  describe("for float", () => {
    test("calculates correct result for different equations with the + operator", () => {
      const actual = compiler("1.0 + 2.3\n+4.456\n+0.5\n", ENSURE);
      const expected = "8.256";

      expect(actual).toBe(expected);
    });

    test("calculates correct result for different equations with the - operator", () => {
      const actual = compiler("6.89\n-0.0001\n-1.3\n", ENSURE);
      const expected = "5.5899";

      expect(actual).toBe(expected);
    });

    test("calculates correct result for different equations with the * operator", () => {
      const actual = compiler("2.5 * 0.5\n*0.1\n", ENSURE);
      const expected = "0.125";

      expect(actual).toBe(expected);
    });

    test("calculates correct result for different equations with the / operator", () => {
      const actual = compiler("10.0\n/100.1\n/2.2\n", ENSURE);
      const expected = "0.045409136318227227318";

      expect(actual).toBe(expected);
    });

    test("edge case calculation", () => {
      const actual = compiler("0.1 + 0.2\n", ENSURE);
      const expected = "0.3";

      expect(actual).toBe(expected);
    });
  });
});
