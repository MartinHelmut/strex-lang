/* eslint-disable max-len */
const parser = require("../../index");

describe("parser > expressions > if", () => {
  describe("error handling", () => {
    test("throws an error if if-expression is missing the test with integer", () => {
      const code = "? + 2 : - 3\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if if-expression is missing the test with integer without whitespace", () => {
      const code = "?+2:-3\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if if-expression is missing the test with float", () => {
      const code = "? + 2.001 : - 3.1\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if if-expression is missing the test with float without whitespace", () => {
      const code = "?+2.001:-3.1\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if if-expression is missing the test with integer and float", () => {
      const code = "? + 2.001 : - 3\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if if-expression is missing the test with integer and float without whitespace", () => {
      const code = "?+2.001:-3\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if if-expression is missing the consequent with integer", () => {
      const code = "= 1 ? : - 3\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if if-expression is missing the consequent with integer without whitespace", () => {
      const code = "=1?:-3\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if if-expression is missing the consequent with float", () => {
      const code = "= 1.0 ? : - 3.0\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if if-expression is missing the consequent with float without whitespace", () => {
      const code = "=1.0?:-3.0\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if if-expression is missing the consequent with integer and float", () => {
      const code = "= 1 ? : - 3.0\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if if-expression is missing the consequent with integer and float without whitespace", () => {
      const code = "=1?:-3.0\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if if-expression is missing the alternate with integer", () => {
      const code = "= 1 ? + 2 :\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if if-expression is missing the alternate with integer without whitespace", () => {
      const code = "=1?+2:\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if if-expression is missing the alternate with float", () => {
      const code = "= 1.23 ? + 2.05 :\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if if-expression is missing the alternate with float without whitespace", () => {
      const code = "=1.23?+2.05:\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if if-expression is missing the alternate with integer and float", () => {
      const code = "= 1.23 ? + 2 :\n";
      expect(() => parser(code)).toThrow();
    });

    test("throws an error if if-expression is missing the alternate with integer and float without whitespace", () => {
      const code = "=1.23?+2:\n";
      expect(() => parser(code)).toThrow();
    });

    test("does not throw if if-expression is missing the alternate operator with integer", () => {
      const code = "= 1 ? + 2\n";
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
              type: "LastExpression"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("does not throw if if-expression is missing the alternate operator with integer without whitespace", () => {
      const code = "=1?+2\n";
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
              type: "LastExpression"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("does not throw if if-expression is missing the alternate operator with float", () => {
      const code = "= 1.23 ? + 2.05\n";
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
                value: "1.23"
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
                value: "2.05"
              },
              operator: "+"
            },
            alternate: {
              type: "LastExpression"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("does not throw if if-expression is missing the alternate operator with float without whitespace", () => {
      const code = "=1.23?+2.05\n";
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
                value: "1.23"
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
                value: "2.05"
              },
              operator: "+"
            },
            alternate: {
              type: "LastExpression"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("does not throw if if-expression is missing the alternate operator with integer and float", () => {
      const code = "= 1.23 ? + 2\n";
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
                value: "1.23"
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
              type: "LastExpression"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("does not throw if if-expression is missing the alternate operator with integer and float without whitespace", () => {
      const code = "=1.23?+2\n";
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
                value: "1.23"
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
              type: "LastExpression"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });
  });
});
