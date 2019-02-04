/* eslint-disable max-len */
const parser = require("../../index");

describe("parser > expressions > if", () => {
  describe("basic behaviour", () => {
    test("creates an if-expression with integer", () => {
      const code = "= 1 ? + 2 : - 3\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "1"
              },
              operator: "="
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "2"
              },
              operator: "+"
            },
            alternate: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "3"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an if-expression with integer without whitespace", () => {
      const code = "=1?+2:-3\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "1"
              },
              operator: "="
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "2"
              },
              operator: "+"
            },
            alternate: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "3"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an if-expression with float", () => {
      const code = "= 1.1 ? * 2.5 : - 3.0\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "1.1"
              },
              operator: "="
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "2.5"
              },
              operator: "*"
            },
            alternate: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "3.0"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an if-expression with float without whitespace", () => {
      const code = "=1.1?+2.5:-3.0\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "1.1"
              },
              operator: "="
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "2.5"
              },
              operator: "+"
            },
            alternate: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "3.0"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an if-expression with float and integer", () => {
      const code = "= 1 ? + 2.5 : - 3\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "1"
              },
              operator: "="
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "2.5"
              },
              operator: "+"
            },
            alternate: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "3"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an if-expression with float and integer without whitespace", () => {
      const code = "=1?+2.5:-3\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "1"
              },
              operator: "="
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "2.5"
              },
              operator: "+"
            },
            alternate: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "3"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });
  });
});
