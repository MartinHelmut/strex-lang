/* eslint-disable max-len */
const parser = require("../../index");

describe("parser > types > integer", () => {
  describe("basic literal", () => {
    test("creates an integer expression for the last expression", () => {
      const code = "- 2\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "LastExpression"
            },
            right: {
              type: "IntegerLiteral",
              value: "2"
            },
            operator: "-"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an integer expression for the last expression without whitespace", () => {
      const code = "-5\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "LastExpression"
            },
            right: {
              type: "IntegerLiteral",
              value: "5"
            },
            operator: "-"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an unsigned integer literal", () => {
      const code = "3\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IntegerLiteral",
            value: "3"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("does not throw on JSON.stringify", () => {
      const code = `568\n`;
      expect(() => JSON.stringify(parser(code))).not.toThrow();
    });
  });

  describe("without braces", () => {
    test("creates an integer expression with + operator", () => {
      const code = "2 + 5\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "IntegerLiteral",
              value: "2"
            },
            right: {
              type: "IntegerLiteral",
              value: "5"
            },
            operator: "+"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an integer expression with + operator without whitespace", () => {
      const code = "2+5\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "IntegerLiteral",
              value: "2"
            },
            right: {
              type: "IntegerLiteral",
              value: "5"
            },
            operator: "+"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an integer expression with - operator", () => {
      const code = "1 - 45\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "IntegerLiteral",
              value: "1"
            },
            right: {
              type: "IntegerLiteral",
              value: "45"
            },
            operator: "-"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an integer expression with - operator without whitespace", () => {
      const code = "1-45\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "IntegerLiteral",
              value: "1"
            },
            right: {
              type: "IntegerLiteral",
              value: "45"
            },
            operator: "-"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an integer expression with / operator", () => {
      const code = "36 / 6\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "IntegerLiteral",
              value: "36"
            },
            right: {
              type: "IntegerLiteral",
              value: "6"
            },
            operator: "/"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an integer expression with / operator without whitespace", () => {
      const code = "36/6\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "IntegerLiteral",
              value: "36"
            },
            right: {
              type: "IntegerLiteral",
              value: "6"
            },
            operator: "/"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an integer expression with * operator", () => {
      const code = "10 * 3\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "IntegerLiteral",
              value: "10"
            },
            right: {
              type: "IntegerLiteral",
              value: "3"
            },
            operator: "*"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an integer expression with * operator without whitespace", () => {
      const code = "10*3\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "IntegerLiteral",
              value: "10"
            },
            right: {
              type: "IntegerLiteral",
              value: "3"
            },
            operator: "*"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });
  });

  describe("with all operands", () => {
    test("creates an expression with all operands on integer", () => {
      const code = "1 + 2 * 3 - 4 / 5\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "BinaryExpression",
              left: {
                type: "IntegerLiteral",
                value: "1"
              },
              right: {
                type: "BinaryExpression",
                left: {
                  type: "IntegerLiteral",
                  value: "2"
                },
                right: {
                  type: "IntegerLiteral",
                  value: "3"
                },
                operator: "*"
              },
              operator: "+"
            },
            right: {
              type: "BinaryExpression",
              left: {
                type: "IntegerLiteral",
                value: "4"
              },
              right: {
                type: "IntegerLiteral",
                value: "5"
              },
              operator: "/"
            },
            operator: "-"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an expression with all operands on integer without whitespace", () => {
      const code = "1+2*3-4/5\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "BinaryExpression",
              left: {
                type: "IntegerLiteral",
                value: "1"
              },
              right: {
                type: "BinaryExpression",
                left: {
                  type: "IntegerLiteral",
                  value: "2"
                },
                right: {
                  type: "IntegerLiteral",
                  value: "3"
                },
                operator: "*"
              },
              operator: "+"
            },
            right: {
              type: "BinaryExpression",
              left: {
                type: "IntegerLiteral",
                value: "4"
              },
              right: {
                type: "IntegerLiteral",
                value: "5"
              },
              operator: "/"
            },
            operator: "-"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("does not throw on JSON.stringify", () => {
      const code = `1 + 2 * 3 - 4 / 5\n`;
      expect(() => JSON.stringify(parser(code))).not.toThrow();
    });
  });
});
