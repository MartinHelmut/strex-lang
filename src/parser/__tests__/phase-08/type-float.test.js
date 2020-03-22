/* eslint-disable max-len */
const parser = require("../../index");

describe("parser > types > float", () => {
  describe("error handling", () => {
    test("does not throw on null division", () => {
      const code = "1.3 / 0\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "FloatLiteral",
              value: "1.3",
            },
            right: {
              type: "IntegerLiteral",
              value: "0",
            },
            operator: "/",
          },
        ],
      };

      expect(ast).toEqual(expected);
    });

    test("throws an error if right hand expression on + operator is missing for float", () => {
      const code = "3.1 +\n";
      expect(() => parser(code)).toThrow(
        'Line 1, column 5: Expected end of line but "+" found.'
      );
    });

    test("throws an error if right hand expression on - operator is missing for float", () => {
      const code = "0.001 -\n";
      expect(() => parser(code)).toThrow(
        'Line 1, column 7: Expected end of line but "-" found.'
      );
    });

    test("throws an error if right hand expression on * operator is missing for float", () => {
      const code = "9.9 *\n";
      expect(() => parser(code)).toThrow(
        'Line 1, column 5: Expected end of line but "*" found.'
      );
    });

    test("throws an error if right hand expression on / operator is missing for float", () => {
      const code = "9.9999999999999999 /\n";
      expect(() => parser(code)).toThrow(
        'Line 1, column 20: Expected end of line but "/" found.'
      );
    });

    test("throws an error if right hand expression on multiple operator is missing for float [1]", () => {
      const code = "1.2 + 4.6 -\n";
      expect(() => parser(code)).toThrow(
        'Line 1, column 11: Expected end of line but "-" found.'
      );
    });

    test("throws an error if right hand expression on multiple operator is missing for float [2]", () => {
      const code = "1.2 + 4.6 - 4.2 *\n";
      expect(() => parser(code)).toThrow(
        'Line 1, column 17: Expected end of line but "*" found.'
      );
    });

    test("throws an error if right hand expression on multiple operator is missing for float [3]", () => {
      const code = "1.2 + 3.0 /\n";
      expect(() => parser(code)).toThrow(
        'Line 1, column 11: Expected end of line but "/" found.'
      );
    });

    test("throws an error if right hand expression on multiple operator is missing for float [4]", () => {
      const code = "2.2 + 3.1 +\n";
      expect(() => parser(code)).toThrow(
        'Line 1, column 11: Expected end of line but "+" found.'
      );
    });

    test("throws an error if float is missing on two + operations", () => {
      const code = "1.1 + + 2.4\n";
      expect(() => parser(code)).toThrow(
        'Line 1, column 5: Expected end of line but "+" found.'
      );
    });

    test("throws an error if float is missing on two + operations without whitespace", () => {
      const code = "1.1++2.4\n";
      expect(() => parser(code)).toThrow(
        'Line 1, column 4: Expected end of line but "+" found.'
      );
    });

    test("throws an error if float is missing on two - operations", () => {
      const code = "10.00 - - 30.00\n";
      expect(() => parser(code)).toThrow(
        'Line 1, column 7: Expected end of line but "-" found.'
      );
    });

    test("throws an error if float is missing on two - operations without whitespace", () => {
      const code = "10.00--30.00\n";
      expect(() => parser(code)).toThrow(
        'Line 1, column 6: Expected end of line but "-" found.'
      );
    });

    test("throws an error if float is missing on two * operations", () => {
      const code = "0.3 * * 1.1\n";
      expect(() => parser(code)).toThrow(
        'Line 1, column 5: Expected end of line but "*" found.'
      );
    });

    test("throws an error if float is missing on two * operations without whitespace", () => {
      const code = "0.3**1.1\n";
      expect(() => parser(code)).toThrow(
        'Line 1, column 4: Expected end of line but "*" found.'
      );
    });

    test("throws an error if float is missing on two / operations", () => {
      const code = "36.45 / / 6.66\n";
      expect(() => parser(code)).toThrow(
        'Line 1, column 7: Expected end of line but "/" found.'
      );
    });
  });
});
