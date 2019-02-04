/* eslint-disable max-len */
const parser = require("../../index");

describe("parser > types > combined", () => {
  describe("error handling", () => {
    test("throws an error if right hand expression on multiple operator is missing for integer and float [1]", () => {
      const code = "2.1 + 6 -\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if right hand expression on multiple operator is missing for integer and float [2]", () => {
      const code = "58 + 10.004 - 2 *\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if right hand expression on multiple operator is missing for integer and float [3]", () => {
      const code = "12 + 98.7 /\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if right hand expression on multiple operator is missing for integer and float [4]", () => {
      const code = "2.2 + 31 +\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if integer and float is missing on two + operations", () => {
      const code = "1.1 + + 2\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if integer and float is missing on two + operations without whitespace", () => {
      const code = "1++2.2\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if integer and float is missing on two - operations", () => {
      const code = "10.00 - - 3000\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if integer and float is missing on two - operations without whitespace", () => {
      const code = "1000--30.00\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if integer and float is missing on two * operations", () => {
      const code = "3.3 * * 1\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if integer and float is missing on two * operations without whitespace", () => {
      const code = "3**1.45\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if integer and float is missing on two / operations", () => {
      const code = "3.6 / / 6\n";
      expect(() => parser(code)).toThrow();
    });
  });
});
