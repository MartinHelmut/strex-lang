/* eslint-disable max-len */
const parser = require("../../index");

describe("parser > types > float", () => {
  describe("with braces", () => {
    test("creates combined float expressions if braces are used at the start", () => {
      const code = "(5.6 - 1.0) / 2.4\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "BinaryExpression",
              left: {
                type: "FloatLiteral",
                value: "5.6",
              },
              right: {
                type: "FloatLiteral",
                value: "1.0",
              },
              operator: "-",
            },
            right: {
              type: "FloatLiteral",
              value: "2.4",
            },
            operator: "/",
          },
        ],
      };

      expect(ast).toEqual(expected);
    });

    test("creates combined float expressions if braces are used at the start without whitespace", () => {
      const code = "(5.6-1.0)/2.4\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "BinaryExpression",
              left: {
                type: "FloatLiteral",
                value: "5.6",
              },
              right: {
                type: "FloatLiteral",
                value: "1.0",
              },
              operator: "-",
            },
            right: {
              type: "FloatLiteral",
              value: "2.4",
            },
            operator: "/",
          },
        ],
      };

      expect(ast).toEqual(expected);
    });

    test("creates combined float expressions if braces are used in the middle", () => {
      const code = "2.2 * (2.1 + 3.0) / 4.9\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "BinaryExpression",
              left: {
                type: "FloatLiteral",
                value: "2.2",
              },
              right: {
                type: "BinaryExpression",
                left: {
                  type: "FloatLiteral",
                  value: "2.1",
                },
                right: {
                  type: "FloatLiteral",
                  value: "3.0",
                },
                operator: "+",
              },
              operator: "*",
            },
            right: {
              type: "FloatLiteral",
              value: "4.9",
            },
            operator: "/",
          },
        ],
      };

      expect(ast).toEqual(expected);
    });

    test("creates combined float expressions if braces are used in the middle without whitespace", () => {
      const code = "2.2*(2.1+3.0)/4.9\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "BinaryExpression",
              left: {
                type: "FloatLiteral",
                value: "2.2",
              },
              right: {
                type: "BinaryExpression",
                left: {
                  type: "FloatLiteral",
                  value: "2.1",
                },
                right: {
                  type: "FloatLiteral",
                  value: "3.0",
                },
                operator: "+",
              },
              operator: "*",
            },
            right: {
              type: "FloatLiteral",
              value: "4.9",
            },
            operator: "/",
          },
        ],
      };

      expect(ast).toEqual(expected);
    });

    test("creates combined float expressions if braces are used at the end", () => {
      const code = "2.2 * (2.1 + 3.0)\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "FloatLiteral",
              value: "2.2",
            },
            right: {
              type: "BinaryExpression",
              left: {
                type: "FloatLiteral",
                value: "2.1",
              },
              right: {
                type: "FloatLiteral",
                value: "3.0",
              },
              operator: "+",
            },
            operator: "*",
          },
        ],
      };

      expect(ast).toEqual(expected);
    });

    test("creates combined float expressions if braces are used at the end without whitespace", () => {
      const code = "2.2*(2.1+3.0)\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "FloatLiteral",
              value: "2.2",
            },
            right: {
              type: "BinaryExpression",
              left: {
                type: "FloatLiteral",
                value: "2.1",
              },
              right: {
                type: "FloatLiteral",
                value: "3.0",
              },
              operator: "+",
            },
            operator: "*",
          },
        ],
      };

      expect(ast).toEqual(expected);
    });
  });
});
