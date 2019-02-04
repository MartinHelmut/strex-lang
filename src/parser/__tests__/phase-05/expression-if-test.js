/* eslint-disable max-len */
const parser = require("../../index");

describe("parser > expressions > if", () => {
  describe("with sub-if-expressions", () => {
    test('creates an if-expression with integer including a sub-if-expressions for "consequent"', () => {
      const code = "> 1 ? = 2 ? -2 : -3 : - 6\n";
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
              operator: ">"
            },
            consequent: {
              type: "IfExpression",
              test: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "IntegerLiteral",
                  value: "2"
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
                operator: "-"
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
            },
            alternate: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "6"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with integer including a sub-if-expressions for "consequent" without whitespace', () => {
      const code = ">1?=2?-2:-3:-6\n";
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
              operator: ">"
            },
            consequent: {
              type: "IfExpression",
              test: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "IntegerLiteral",
                  value: "2"
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
                operator: "-"
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
            },
            alternate: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "6"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with integer including a sub-if-expressions for "alternate"', () => {
      const code = "> 1 ? - 6 : = 2 ? -2 : -3\n";
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
              operator: ">"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "6"
              },
              operator: "-"
            },
            alternate: {
              type: "IfExpression",
              test: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "IntegerLiteral",
                  value: "2"
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
                operator: "-"
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
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with integer including a sub-if-expressions for "alternate" without whitespace', () => {
      const code = ">1?-6:=2?-2:-3\n";
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
              operator: ">"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "6"
              },
              operator: "-"
            },
            alternate: {
              type: "IfExpression",
              test: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "IntegerLiteral",
                  value: "2"
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
                operator: "-"
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
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with float including a sub-if-expressions for "consequent"', () => {
      const code = "> 1.1 ? = 2.67 ? -2.0 : -3.0001 : - 65.34\n";
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
              operator: ">"
            },
            consequent: {
              type: "IfExpression",
              test: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "2.67"
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
                  value: "2.0"
                },
                operator: "-"
              },
              alternate: {
                type: "BinaryExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "3.0001"
                },
                operator: "-"
              }
            },
            alternate: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "65.34"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with float including a sub-if-expressions for "consequent" without whitespace', () => {
      const code = ">1.1?=2.67?-2.0:-3.0001:-65.34\n";
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
              operator: ">"
            },
            consequent: {
              type: "IfExpression",
              test: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "2.67"
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
                  value: "2.0"
                },
                operator: "-"
              },
              alternate: {
                type: "BinaryExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "3.0001"
                },
                operator: "-"
              }
            },
            alternate: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "65.34"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with float including a sub-if-expressions for "alternate"', () => {
      const code = "> 1.4 ? - 6.66 : = 2.2 ? -24.0 : -3.1\n";
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
                value: "1.4"
              },
              operator: ">"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "6.66"
              },
              operator: "-"
            },
            alternate: {
              type: "IfExpression",
              test: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "2.2"
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
                  value: "24.0"
                },
                operator: "-"
              },
              alternate: {
                type: "BinaryExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "3.1"
                },
                operator: "-"
              }
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with float including a sub-if-expressions for "alternate" without whitespace', () => {
      const code = ">1.4?-6.66:=2.2?-24.0:-3.1\n";
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
                value: "1.4"
              },
              operator: ">"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "6.66"
              },
              operator: "-"
            },
            alternate: {
              type: "IfExpression",
              test: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "2.2"
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
                  value: "24.0"
                },
                operator: "-"
              },
              alternate: {
                type: "BinaryExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "3.1"
                },
                operator: "-"
              }
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with integer and float including a sub-if-expressions for "consequent"', () => {
      const code = "> 1 ? = 2.67 ? -2 : -3.0001 : * 6533\n";
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
              operator: ">"
            },
            consequent: {
              type: "IfExpression",
              test: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "2.67"
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
                operator: "-"
              },
              alternate: {
                type: "BinaryExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "3.0001"
                },
                operator: "-"
              }
            },
            alternate: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "6533"
              },
              operator: "*"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with integer and float including a sub-if-expressions for "consequent" without whitespace', () => {
      const code = ">1?=2.67?-2:-3.0001:*6533\n";
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
              operator: ">"
            },
            consequent: {
              type: "IfExpression",
              test: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "2.67"
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
                operator: "-"
              },
              alternate: {
                type: "BinaryExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "3.0001"
                },
                operator: "-"
              }
            },
            alternate: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "6533"
              },
              operator: "*"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with integer and float including a sub-if-expressions for "alternate"', () => {
      const code = "> 1.4 ? - 6 : = 2.2 ? -240 : / 3.1\n";
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
                value: "1.4"
              },
              operator: ">"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "6"
              },
              operator: "-"
            },
            alternate: {
              type: "IfExpression",
              test: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "2.2"
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
                  value: "240"
                },
                operator: "-"
              },
              alternate: {
                type: "BinaryExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "3.1"
                },
                operator: "/"
              }
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with integer and float including a sub-if-expressions for "alternate" without whitespaces', () => {
      const code = ">1.4?-6:=2.2?-240:/3.1\n";
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
                value: "1.4"
              },
              operator: ">"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "6"
              },
              operator: "-"
            },
            alternate: {
              type: "IfExpression",
              test: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "2.2"
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
                  value: "240"
                },
                operator: "-"
              },
              alternate: {
                type: "BinaryExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "3.1"
                },
                operator: "/"
              }
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });
  });
});
