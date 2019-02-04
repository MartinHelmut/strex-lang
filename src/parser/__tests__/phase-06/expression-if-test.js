/* eslint-disable max-len */
const parser = require("../../index");

describe("parser > expressions > if", () => {
  describe('with | as "or" operator', () => {
    test('creates an if-expression with two "or" tests on integer', () => {
      const code = "= 1 | > 3 ? + 2 : / 3\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
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
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "IntegerLiteral",
                  value: "3"
                },
                operator: ">"
              },
              operator: "|"
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
              operator: "/"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with two "or" tests on integer without whitespace', () => {
      const code = "=1|>3?+2:-3\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
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
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "IntegerLiteral",
                  value: "3"
                },
                operator: ">"
              },
              operator: "|"
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

    test('creates an if-expression with two "or" tests on float', () => {
      const code = "= 1.1 | > 3.3 ? + 2.2 : - 3.0\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
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
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "3.3"
                },
                operator: ">"
              },
              operator: "|"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "2.2"
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

    test('creates an if-expression with two "or" tests on float without whitespace', () => {
      const code = "=1.1|>3.3?+2.2:-3.0\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
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
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "3.3"
                },
                operator: ">"
              },
              operator: "|"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "2.2"
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

    test('creates an if-expression with two "or" tests on integer and float', () => {
      const code = "= 0 | > 3.3 ? + 2 : - 3.0\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "IntegerLiteral",
                  value: "0"
                },
                operator: "="
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "3.3"
                },
                operator: ">"
              },
              operator: "|"
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

    test('creates an if-expression with two "or" tests on integer and float without whitespace', () => {
      const code = "=0|>3.3?+2:-3.0\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "IntegerLiteral",
                  value: "0"
                },
                operator: "="
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "3.3"
                },
                operator: ">"
              },
              operator: "|"
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

    test('creates an if-expression with multiple "or" tests on integer', () => {
      const code = "= 1 | > 3 | < - 2 ? + 2 : - 3\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
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
                right: {
                  type: "BooleanExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "IntegerLiteral",
                    value: "3"
                  },
                  operator: ">"
                },
                operator: "|"
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
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
                operator: "<"
              },
              operator: "|"
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

    test('creates an if-expression with multiple "or" tests on integer without whitespace', () => {
      const code = "=1|>3|<-2?+2:-3\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
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
                right: {
                  type: "BooleanExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "IntegerLiteral",
                    value: "3"
                  },
                  operator: ">"
                },
                operator: "|"
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
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
                operator: "<"
              },
              operator: "|"
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

    test('creates an if-expression with multiple "or" tests on float', () => {
      const code = "= 1.1 | > 3.3 | < -2.2 ? + 2.34 : - 3.01\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
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
                right: {
                  type: "BooleanExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "FloatLiteral",
                    value: "3.3"
                  },
                  operator: ">"
                },
                operator: "|"
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "BinaryExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "FloatLiteral",
                    value: "2.2"
                  },
                  operator: "-"
                },
                operator: "<"
              },
              operator: "|"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "2.34"
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
                value: "3.01"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with multiple "or" tests on float without whitespace', () => {
      const code = "=1.1|>3.3|<-2.2?+2.34:-3.01\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
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
                right: {
                  type: "BooleanExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "FloatLiteral",
                    value: "3.3"
                  },
                  operator: ">"
                },
                operator: "|"
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "BinaryExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "FloatLiteral",
                    value: "2.2"
                  },
                  operator: "-"
                },
                operator: "<"
              },
              operator: "|"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "2.34"
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
                value: "3.01"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with multiple "or" tests on integer and float', () => {
      const code = "= 1 | > 3.3 | < -2 ? + 2.34 : - 3\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
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
                right: {
                  type: "BooleanExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "FloatLiteral",
                    value: "3.3"
                  },
                  operator: ">"
                },
                operator: "|"
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
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
                operator: "<"
              },
              operator: "|"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "2.34"
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

    test('creates an if-expression with multiple "or" tests on integer and float without whitespace', () => {
      const code = "=1|>3.3|<-2?+2.34:-3\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
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
                right: {
                  type: "BooleanExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "FloatLiteral",
                    value: "3.3"
                  },
                  operator: ">"
                },
                operator: "|"
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
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
                operator: "<"
              },
              operator: "|"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "2.34"
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

  describe('with & as "and" operator', () => {
    test('creates an if-expression with two "and" tests on integer', () => {
      const code = "< 4 & > 1 ? * 3 : / 4\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "IntegerLiteral",
                  value: "4"
                },
                operator: "<"
              },
              right: {
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
              operator: "&"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "3"
              },
              operator: "*"
            },
            alternate: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "4"
              },
              operator: "/"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with two "and" tests on integer without whitespace', () => {
      const code = "<4&>1?*3:/4\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "IntegerLiteral",
                  value: "4"
                },
                operator: "<"
              },
              right: {
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
              operator: "&"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "3"
              },
              operator: "*"
            },
            alternate: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "4"
              },
              operator: "/"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with two "and" tests on float', () => {
      const code = "> 0.1 & > 1.2 ? + 1.5 : - 1.5\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "0.1"
                },
                operator: ">"
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "1.2"
                },
                operator: ">"
              },
              operator: "&"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "1.5"
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
                value: "1.5"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with two "and" tests on float without whitespace', () => {
      const code = ">0.1&>1.2?+1.5:-1.5\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "0.1"
                },
                operator: ">"
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "1.2"
                },
                operator: ">"
              },
              operator: "&"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "1.5"
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
                value: "1.5"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with two "and" tests on integer and float', () => {
      const code = "> 0 & > 1.2 ? + 1 : - 1.5\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "IntegerLiteral",
                  value: "0"
                },
                operator: ">"
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "1.2"
                },
                operator: ">"
              },
              operator: "&"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "1"
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
                value: "1.5"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with two "and" tests on integer and float without whitespace', () => {
      const code = ">0&>1.2?+1:-1.5\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "IntegerLiteral",
                  value: "0"
                },
                operator: ">"
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "1.2"
                },
                operator: ">"
              },
              operator: "&"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "1"
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
                value: "1.5"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with multiple "and" tests on integer', () => {
      const code = "= 1 & > 3 & < -1 ? + 2 : - 2\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
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
                right: {
                  type: "BooleanExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "IntegerLiteral",
                    value: "3"
                  },
                  operator: ">"
                },
                operator: "&"
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "BinaryExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "IntegerLiteral",
                    value: "1"
                  },
                  operator: "-"
                },
                operator: "<"
              },
              operator: "&"
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
                value: "2"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with multiple "and" tests on integer without whitespace', () => {
      const code = "=1&>3&<-1?+2:-2\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
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
                right: {
                  type: "BooleanExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "IntegerLiteral",
                    value: "3"
                  },
                  operator: ">"
                },
                operator: "&"
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "BinaryExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "IntegerLiteral",
                    value: "1"
                  },
                  operator: "-"
                },
                operator: "<"
              },
              operator: "&"
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
                value: "2"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with multiple "and" tests on float', () => {
      const code = "= 1.1 & > 3.3 & < -2.2 ? + 2.34 : - 3.01\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
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
                right: {
                  type: "BooleanExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "FloatLiteral",
                    value: "3.3"
                  },
                  operator: ">"
                },
                operator: "&"
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "BinaryExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "FloatLiteral",
                    value: "2.2"
                  },
                  operator: "-"
                },
                operator: "<"
              },
              operator: "&"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "2.34"
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
                value: "3.01"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with multiple "and" tests on float without whitespace', () => {
      const code = "=1.1&>3.3&<-2.2?+2.34:-3.01\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
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
                right: {
                  type: "BooleanExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "FloatLiteral",
                    value: "3.3"
                  },
                  operator: ">"
                },
                operator: "&"
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "BinaryExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "FloatLiteral",
                    value: "2.2"
                  },
                  operator: "-"
                },
                operator: "<"
              },
              operator: "&"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "2.34"
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
                value: "3.01"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test('creates an if-expression with multiple "and" tests on integer and float', () => {
      const code = "= 1 & > 3.3 & < -2 ? + 2.34 : - 3\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
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
                right: {
                  type: "BooleanExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "FloatLiteral",
                    value: "3.3"
                  },
                  operator: ">"
                },
                operator: "&"
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
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
                operator: "<"
              },
              operator: "&"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "2.34"
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

    test('creates an if-expression with multiple "and" tests on integer and float without whitespace', () => {
      const code = "=1&>3.3&<-2?+2.34:-3\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
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
                right: {
                  type: "BooleanExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "FloatLiteral",
                    value: "3.3"
                  },
                  operator: ">"
                },
                operator: "&"
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
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
                operator: "<"
              },
              operator: "&"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "2.34"
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

  describe("with & and | operator", () => {
    test("creates an if-expression on integer", () => {
      const code = "< 4 & > 1 | = 1 ? * 3 : / 4\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
                  type: "BooleanExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "IntegerLiteral",
                    value: "4"
                  },
                  operator: "<"
                },
                right: {
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
                operator: "&"
              },
              right: {
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
              operator: "|"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "3"
              },
              operator: "*"
            },
            alternate: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "4"
              },
              operator: "/"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an if-expression on integer without whitespace", () => {
      const code = "<4&>1|=1?*3:/4\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
                  type: "BooleanExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "IntegerLiteral",
                    value: "4"
                  },
                  operator: "<"
                },
                right: {
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
                operator: "&"
              },
              right: {
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
              operator: "|"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "3"
              },
              operator: "*"
            },
            alternate: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "IntegerLiteral",
                value: "4"
              },
              operator: "/"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an if-expression on float", () => {
      const code = "> 0.1 & < 1.2 | > 5.5 ? + 1.5 : - 1.5\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
                  type: "BooleanExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "FloatLiteral",
                    value: "0.1"
                  },
                  operator: ">"
                },
                right: {
                  type: "BooleanExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "FloatLiteral",
                    value: "1.2"
                  },
                  operator: "<"
                },
                operator: "&"
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "5.5"
                },
                operator: ">"
              },
              operator: "|"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "1.5"
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
                value: "1.5"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an if-expression on float without whitespaces", () => {
      const code = ">0.1&<1.2|>5.5?+1.5:-1.5\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
                  type: "BooleanExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "FloatLiteral",
                    value: "0.1"
                  },
                  operator: ">"
                },
                right: {
                  type: "BooleanExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "FloatLiteral",
                    value: "1.2"
                  },
                  operator: "<"
                },
                operator: "&"
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "FloatLiteral",
                  value: "5.5"
                },
                operator: ">"
              },
              operator: "|"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "1.5"
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
                value: "1.5"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an if-expression on integer and float", () => {
      const code = "> 1 & < 1.2 | > 5 ? + 1.5 : - 1.5\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
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
                right: {
                  type: "BooleanExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "FloatLiteral",
                    value: "1.2"
                  },
                  operator: "<"
                },
                operator: "&"
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "IntegerLiteral",
                  value: "5"
                },
                operator: ">"
              },
              operator: "|"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "1.5"
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
                value: "1.5"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("creates an if-expression on integer and float without whitespace", () => {
      const code = "> 1 & < 1.2 | > 5 ? + 1.5 : - 1.5\n";
      const ast = parser(code);
      const expected = {
        type: "Program",
        body: [
          {
            type: "IfExpression",
            test: {
              type: "BooleanExpression",
              left: {
                type: "BooleanExpression",
                left: {
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
                right: {
                  type: "BooleanExpression",
                  left: {
                    type: "LastExpression"
                  },
                  right: {
                    type: "FloatLiteral",
                    value: "1.2"
                  },
                  operator: "<"
                },
                operator: "&"
              },
              right: {
                type: "BooleanExpression",
                left: {
                  type: "LastExpression"
                },
                right: {
                  type: "IntegerLiteral",
                  value: "5"
                },
                operator: ">"
              },
              operator: "|"
            },
            consequent: {
              type: "BinaryExpression",
              left: {
                type: "LastExpression"
              },
              right: {
                type: "FloatLiteral",
                value: "1.5"
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
                value: "1.5"
              },
              operator: "-"
            }
          }
        ]
      };

      expect(ast).toEqual(expected);
    });

    test("does not throw on JSON.stringify", () => {
      const code = `> 1 & < 1.2 | > 5 ? + 1.5 : - 1.5\n`;
      expect(() => JSON.stringify(parser(code))).not.toThrow();
    });
  });
});
