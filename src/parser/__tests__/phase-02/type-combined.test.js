/* eslint-disable max-len */
const parser = require("../../index");

describe("parser > types > combined", () => {
  describe("without braces", () => {
    test("creates an expression with + operator on float and integer", () => {
      const code = "2 + 4.09\n";
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
              type: "FloatLiteral",
              value: "4.09"
            },
            operator: "+"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an expression with + operator on float and integer without whitespace", () => {
      const code = "2+4.09\n";
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
              type: "FloatLiteral",
              value: "4.09"
            },
            operator: "+"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an expression with - operator on float and integer", () => {
      const code = "1.11 - 23\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "FloatLiteral",
              value: "1.11"
            },
            right: {
              type: "IntegerLiteral",
              value: "23"
            },
            operator: "-"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an expression with - operator on float and integer without whitespace", () => {
      const code = "1.11-23\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "FloatLiteral",
              value: "1.11"
            },
            right: {
              type: "IntegerLiteral",
              value: "23"
            },
            operator: "-"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an expression with / operator on float and integer", () => {
      const code = "98 / 0.1\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "IntegerLiteral",
              value: "98"
            },
            right: {
              type: "FloatLiteral",
              value: "0.1"
            },
            operator: "/"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an expression with / operator on float and integer without whitespace", () => {
      const code = "98/0.1\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "IntegerLiteral",
              value: "98"
            },
            right: {
              type: "FloatLiteral",
              value: "0.1"
            },
            operator: "/"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an expression with * operator on float and integer", () => {
      const code = "100 * 3.3\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "IntegerLiteral",
              value: "100"
            },
            right: {
              type: "FloatLiteral",
              value: "3.3"
            },
            operator: "*"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an expression with * operator on float and integer without whitespaces", () => {
      const code = "100*3.3\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "BinaryExpression",
            left: {
              type: "IntegerLiteral",
              value: "100"
            },
            right: {
              type: "FloatLiteral",
              value: "3.3"
            },
            operator: "*"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });
  });

  describe("with braces", () => {
    test("creates combined expressions if braces are used at the start on float and integer", () => {
      const code = "(5 - 2.5) / 2.5\n";
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
                value: "5"
              },
              right: {
                type: "FloatLiteral",
                value: "2.5"
              },
              operator: "-"
            },
            right: {
              type: "FloatLiteral",
              value: "2.5"
            },
            operator: "/"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates combined expressions if braces are used at the start on float and integer without whitespaces", () => {
      const code = "(5-2.5)/2.5\n";
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
                value: "5"
              },
              right: {
                type: "FloatLiteral",
                value: "2.5"
              },
              operator: "-"
            },
            right: {
              type: "FloatLiteral",
              value: "2.5"
            },
            operator: "/"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates combined expressions if braces are used in the middle on float and integer", () => {
      const code = "2 / (3.2 - 2) + 5.0001\n";
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
                value: "2"
              },
              right: {
                type: "BinaryExpression",
                left: {
                  type: "FloatLiteral",
                  value: "3.2"
                },
                right: {
                  type: "IntegerLiteral",
                  value: "2"
                },
                operator: "-"
              },
              operator: "/"
            },
            right: {
              type: "FloatLiteral",
              value: "5.0001"
            },
            operator: "+"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates combined expressions if braces are used in the middle on float and integer without whitespaces", () => {
      const code = "2/(3.2-2)+5.0001\n";
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
                value: "2"
              },
              right: {
                type: "BinaryExpression",
                left: {
                  type: "FloatLiteral",
                  value: "3.2"
                },
                right: {
                  type: "IntegerLiteral",
                  value: "2"
                },
                operator: "-"
              },
              operator: "/"
            },
            right: {
              type: "FloatLiteral",
              value: "5.0001"
            },
            operator: "+"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates combined expressions if braces are used at the end on float and integer", () => {
      const code = "2 * (0.1 + 3)\n";
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
              type: "BinaryExpression",
              left: {
                type: "FloatLiteral",
                value: "0.1"
              },
              right: {
                type: "IntegerLiteral",
                value: "3"
              },
              operator: "+"
            },
            operator: "*"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates combined expressions if braces are used at the end on float and integer without whitespaces", () => {
      const code = "2*(0.1+3)\n";
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
              type: "BinaryExpression",
              left: {
                type: "FloatLiteral",
                value: "0.1"
              },
              right: {
                type: "IntegerLiteral",
                value: "3"
              },
              operator: "+"
            },
            operator: "*"
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("does not throw on JSON.stringify", () => {
      const code = "2 * (0.1 + 3)\n";
      expect(() => JSON.stringify(parser(code))).not.toThrow();
    });
  });

  describe("with all operands", () => {
    test("creates an expression with all operands on integer and float", () => {
      const code = "1 + 2.2 * 3 - 4.4 / 5\n";
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
                  type: "FloatLiteral",
                  value: "2.2"
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
                type: "FloatLiteral",
                value: "4.4"
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

    test("creates an expression with all operands on integer and float without whitespace", () => {
      const code = "1+2.2*3-4.4/5\n";
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
                  type: "FloatLiteral",
                  value: "2.2"
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
                type: "FloatLiteral",
                value: "4.4"
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
      const code = "1 + 2.2 * 3 - 4.4 / 5\n";
      expect(() => JSON.stringify(parser(code))).not.toThrow();
    });
  });
});
