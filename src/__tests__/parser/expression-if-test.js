/* eslint-disable max-len */
const parser = require('../../parser');

describe('parser > expressions > if', () => {
    describe('basic behaviour', () => {
        test('creates a basic if-statement with integer', () => {
            const code = `if = 1 (+ 2) | (- 3)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '1',
                            },
                            operator: '=',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '2',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '3',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with integer without whitespace', () => {
            const code = `if=1(+2)|(-3)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '1',
                            },
                            operator: '=',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '2',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '3',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with float', () => {
            const code = `if = 1.1 (* 2.5) | (- 3.0)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '1.1',
                            },
                            operator: '=',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '2.5',
                            },
                            operator: '*',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '3.0',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with float without whitespace', () => {
            const code = `if=1.1(+2.5)|(-3.0)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '1.1',
                            },
                            operator: '=',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '2.5',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '3.0',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with float and integer', () => {
            const code = `if = 1 (+ 2.5) | (- 3)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '1',
                            },
                            operator: '=',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '2.5',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '3',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with float and integer without whitespace', () => {
            const code = `if=1(+2.5)|(-3)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '1',
                            },
                            operator: '=',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '2.5',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '3',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });
    });

    describe('with | as "or" operator for multiple tests', () => {
        test('creates a basic if-statement with two "or" tests on integer', () => {
            const code = `if = 1 | > 3 (+ 2) | (/ 3)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '1',
                                },
                                operator: '=',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '3',
                                },
                                operator: '=',
                            },
                            operator: '|',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '2',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '3',
                            },
                            operator: '/',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with two "or" tests on integer without whitespace', () => {
            const code = `if=1|>3(+2)|(-3)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '1',
                                },
                                operator: '=',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '3',
                                },
                                operator: '=',
                            },
                            operator: '|',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '2',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '3',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with two "or" tests on float', () => {
            const code = `if = 1.1 | > 3.3 (+ 2.2) | (- 3.0)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'FloatLiteral',
                                    value: '1.1',
                                },
                                operator: '=',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'FloatLiteral',
                                    value: '3.3',
                                },
                                operator: '=',
                            },
                            operator: '|',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '2.2',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '3.0',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with two "or" tests on float without whitespace', () => {
            const code = `if=1.1|>3.3(+2.2)|(-3.0)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'FloatLiteral',
                                    value: '1.1',
                                },
                                operator: '=',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'FloatLiteral',
                                    value: '3.3',
                                },
                                operator: '=',
                            },
                            operator: '|',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '2.2',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '3.0',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with two "or" tests on integer and float', () => {
            const code = `if = 0 | > 3.3 (+ 2) | (- 3.0)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '0',
                                },
                                operator: '=',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'FloatLiteral',
                                    value: '3.3',
                                },
                                operator: '=',
                            },
                            operator: '|',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '2',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '3.0',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with two "or" tests on integer and float without whitespace', () => {
            const code = `if=0|>3.3(+2)|(-3.0)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '0',
                                },
                                operator: '=',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'FloatLiteral',
                                    value: '3.3',
                                },
                                operator: '=',
                            },
                            operator: '|',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '2',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '3.0',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with multiple "or" tests on integer', () => {
            const code = `if = 1 | > 3 | < -2 (+ 2) | (- 3)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '1',
                                },
                                operator: '=',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'IntegerLiteral',
                                        value: '3',
                                    },
                                    operator: '>',
                                },
                                right: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'Expression',
                                        left: {
                                            type: 'LastExpression',
                                        },
                                        right: {
                                            type: 'IntegerLiteral',
                                            value: '2',
                                        },
                                        operator: '-',
                                    },
                                    operator: '<',
                                },
                                operator: '|',
                            },
                            operator: '|',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '2',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '3',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with multiple "or" tests on integer without whitespace', () => {
            const code = `if=1|>3|<-2(+2)|(-3)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '1',
                                },
                                operator: '=',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'IntegerLiteral',
                                        value: '3',
                                    },
                                    operator: '>',
                                },
                                right: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'Expression',
                                        left: {
                                            type: 'LastExpression',
                                        },
                                        right: {
                                            type: 'IntegerLiteral',
                                            value: '2',
                                        },
                                        operator: '-',
                                    },
                                    operator: '<',
                                },
                                operator: '|',
                            },
                            operator: '|',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '2',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '3',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with multiple "or" tests on float', () => {
            const code = `if = 1.1 | > 3.3 | < -2.2 (+ 2.34) | (- 3.01)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'FloatLiteral',
                                    value: '1.1',
                                },
                                operator: '=',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'FloatLiteral',
                                        value: '3.3',
                                    },
                                    operator: '>',
                                },
                                right: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'Expression',
                                        left: {
                                            type: 'LastExpression',
                                        },
                                        right: {
                                            type: 'FloatLiteral',
                                            value: '2.2',
                                        },
                                        operator: '-',
                                    },
                                    operator: '<',
                                },
                                operator: '|',
                            },
                            operator: '|',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '2.24',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '3.01',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with multiple "or" tests on float without whitespace', () => {
            const code = `if=1.1|>3.3|<-2.2(+2.34)|(-3.01)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'FloatLiteral',
                                    value: '1.1',
                                },
                                operator: '=',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'FloatLiteral',
                                        value: '3.3',
                                    },
                                    operator: '>',
                                },
                                right: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'Expression',
                                        left: {
                                            type: 'LastExpression',
                                        },
                                        right: {
                                            type: 'FloatLiteral',
                                            value: '2.2',
                                        },
                                        operator: '-',
                                    },
                                    operator: '<',
                                },
                                operator: '|',
                            },
                            operator: '|',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '2.23',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '3.01',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with multiple "or" tests on integer and float', () => {
            const code = `if = 1 | > 3.3 | < -2 (+ 2.34) | (- 3)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '1',
                                },
                                operator: '=',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'FloatLiteral',
                                        value: '3.3',
                                    },
                                    operator: '>',
                                },
                                right: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'Expression',
                                        left: {
                                            type: 'LastExpression',
                                        },
                                        right: {
                                            type: 'IntegerLiteral',
                                            value: '2',
                                        },
                                        operator: '-',
                                    },
                                    operator: '<',
                                },
                                operator: '|',
                            },
                            operator: '|',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '2.24',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '3',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with multiple "or" tests on integer and float without whitespace', () => {
            const code = `if=1|>3.3|<-2(+2.34)|(-3)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '1',
                                },
                                operator: '=',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'FloatLiteral',
                                        value: '3.3',
                                    },
                                    operator: '>',
                                },
                                right: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'Expression',
                                        left: {
                                            type: 'LastExpression',
                                        },
                                        right: {
                                            type: 'IntegerLiteral',
                                            value: '2',
                                        },
                                        operator: '-',
                                    },
                                    operator: '<',
                                },
                                operator: '|',
                            },
                            operator: '|',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '2.24',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '3',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });
    });

    describe('with & as "and" operator for multiple tests', () => {
        test('creates a basic if-statement with two "and" tests on integer', () => {
            const code = `if < 4 & > 1 (* 3) | (/ 4)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '4',
                                },
                                operator: '<',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '1',
                                },
                                operator: '>',
                            },
                            operator: '&',
                        },
                        consequent: {},
                        alternate: {},
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with two "and" tests on integer without whitespace', () => {
            const code = `if<4&>1(*3)|(/4)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '4',
                                },
                                operator: '<',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '1',
                                },
                                operator: '>',
                            },
                            operator: '&',
                        },
                        consequent: {},
                        alternate: {},
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with two "and" tests on float', () => {
            const code = `if > 0.1 & > 1.2 (+ 1.5) | (- 1.5)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'FloatLiteral',
                                    value: '0.1',
                                },
                                operator: '>',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'FloatLiteral',
                                    value: '1.2',
                                },
                                operator: '>',
                            },
                            operator: '&',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '1.5',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '1.5',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with two "and" tests on float without whitespace', () => {
            const code = `if>0.1&>1.2(+1.5)|(-1.5)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'FloatLiteral',
                                    value: '0.1',
                                },
                                operator: '>',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'FloatLiteral',
                                    value: '1.2',
                                },
                                operator: '>',
                            },
                            operator: '&',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '1.5',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '1.5',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with two "and" tests on integer and float', () => {
            const code = `if > 0 & > 1.2 (+ 1) | (- 1.5)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '0',
                                },
                                operator: '>',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'FloatLiteral',
                                    value: '1.2',
                                },
                                operator: '>',
                            },
                            operator: '&',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '1',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '1.5',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with two "and" tests on integer and float without whitespace', () => {
            const code = `if>0&>1.2(+1)|(-1.5)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '0',
                                },
                                operator: '>',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'FloatLiteral',
                                    value: '1.2',
                                },
                                operator: '>',
                            },
                            operator: '&',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '1',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '1.5',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with multiple "and" tests on integer', () => {
            const code = `if = 1 & > 3 & < -1 (+ 2) | (- 2)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '1',
                                },
                                operator: '=',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'IntegerLiteral',
                                        value: '3',
                                    },
                                    operator: '>',
                                },
                                right: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'Expression',
                                        left: {
                                            type: 'LastExpression',
                                        },
                                        right: {
                                            type: 'IntegerLiteral',
                                            value: '2',
                                        },
                                        operator: '-',
                                    },
                                    operator: '<',
                                },
                                operator: '&',
                            },
                            operator: '&',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '2',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '2',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with multiple "and" tests on integer without whitespace', () => {
            const code = `if=1&>3&<-1(+2)|(-2)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '1',
                                },
                                operator: '=',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'IntegerLiteral',
                                        value: '3',
                                    },
                                    operator: '>',
                                },
                                right: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'Expression',
                                        left: {
                                            type: 'LastExpression',
                                        },
                                        right: {
                                            type: 'IntegerLiteral',
                                            value: '2',
                                        },
                                        operator: '-',
                                    },
                                    operator: '<',
                                },
                                operator: '&',
                            },
                            operator: '&',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '2',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '2',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with multiple "and" tests on float', () => {
            const code = `if = 1.1 & > 3.3 & < -2.2 (+ 2.34) | (- 3.01)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'FloatLiteral',
                                    value: '1.1',
                                },
                                operator: '=',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'FloatLiteral',
                                        value: '3.3',
                                    },
                                    operator: '>',
                                },
                                right: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'Expression',
                                        left: {
                                            type: 'LastExpression',
                                        },
                                        right: {
                                            type: 'FloatLiteral',
                                            value: '2.2',
                                        },
                                        operator: '-',
                                    },
                                    operator: '<',
                                },
                                operator: '&',
                            },
                            operator: '&',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '2.23',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '3.01',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with multiple "and" tests on float without whitespace', () => {
            const code = `if=1.1&>3.3&<-2.2(+2.34)|(-3.01)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'FloatLiteral',
                                    value: '1.1',
                                },
                                operator: '=',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'FloatLiteral',
                                        value: '3.3',
                                    },
                                    operator: '>',
                                },
                                right: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'Expression',
                                        left: {
                                            type: 'LastExpression',
                                        },
                                        right: {
                                            type: 'FloatLiteral',
                                            value: '2.2',
                                        },
                                        operator: '-',
                                    },
                                    operator: '<',
                                },
                                operator: '&',
                            },
                            operator: '&',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '2.23',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '3.01',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with multiple "and" tests on integer and float', () => {
            const code = `if = 1 & > 3.3 & < -2 (+ 2.34) | (- 3)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '1',
                                },
                                operator: '=',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'FloatLiteral',
                                        value: '3.3',
                                    },
                                    operator: '>',
                                },
                                right: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'Expression',
                                        left: {
                                            type: 'LastExpression',
                                        },
                                        right: {
                                            type: 'IntegerLiteral',
                                            value: '2',
                                        },
                                        operator: '-',
                                    },
                                    operator: '<',
                                },
                                operator: '&',
                            },
                            operator: '&',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '2.24',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '3',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a basic if-statement with multiple "and" tests on integer and float without whitespace', () => {
            const code = `if=1&>3.3&<-2(+2.34)|(-3)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IfStatement',
                        test: {
                            type: 'Expression',
                            left: {
                                type: 'Expression',
                                left: {
                                    type: 'LastExpression',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '1',
                                },
                                operator: '=',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'FloatLiteral',
                                        value: '3.3',
                                    },
                                    operator: '>',
                                },
                                right: {
                                    type: 'Expression',
                                    left: {
                                        type: 'LastExpression',
                                    },
                                    right: {
                                        type: 'Expression',
                                        left: {
                                            type: 'LastExpression',
                                        },
                                        right: {
                                            type: 'IntegerLiteral',
                                            value: '2',
                                        },
                                        operator: '-',
                                    },
                                    operator: '<',
                                },
                                operator: '&',
                            },
                            operator: '&',
                        },
                        consequent: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '2.24',
                            },
                            operator: '+',
                        },
                        alternate: {
                            type: 'Expression',
                            left: {
                                type: 'LastExpression',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '3',
                            },
                            operator: '-',
                        },
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });
    });

    describe('error handling', () => {
        test('throws an error if if-statement is missing the test with integer', () => {
            const code = `if (+ 2) | (- 3)`;
            expected(() => parser(code)).toThrow(
                'Missing test for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the test with integer without whitespace', () => {
            const code = `if(+2)|(-3)`;
            expected(() => parser(code)).toThrow(
                'Missing test for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the test with float', () => {
            const code = `if (+ 2.001) | (- 3.1)`;
            expected(() => parser(code)).toThrow(
                'Missing test for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the test with float without whitespace', () => {
            const code = `if(+2.001)|(-3.1)`;
            expected(() => parser(code)).toThrow(
                'Missing test for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the test with integer and float', () => {
            const code = `if (+ 2.001) | (- 3)`;
            expected(() => parser(code)).toThrow(
                'Missing test for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the test with integer and float without whitespace', () => {
            const code = `if(+2.001)|(-3)`;
            expected(() => parser(code)).toThrow(
                'Missing test for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the consequent with integer', () => {
            const code = `if = 1 | (- 3)`;
            expected(() => parser(code)).toThrow(
                'Missing "consequent" for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the consequent with integer without whitespace', () => {
            const code = `if=1|(-3)`;
            expected(() => parser(code)).toThrow(
                'Missing "consequent" for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the consequent with float', () => {
            const code = `if = 1.0 | (- 3.0)`;
            expected(() => parser(code)).toThrow(
                'Missing "consequent" for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the consequent with float without whitespace', () => {
            const code = `if=1.0|(-3.0)`;
            expected(() => parser(code)).toThrow(
                'Missing "consequent" for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the consequent with integer and float', () => {
            const code = `if = 1 | (- 3.0)`;
            expected(() => parser(code)).toThrow(
                'Missing "consequent" for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the consequent with integer and float without whitespace', () => {
            const code = `if=1|(-3.0)`;
            expected(() => parser(code)).toThrow(
                'Missing "consequent" for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the alternate with integer', () => {
            const code = `if = 1 (+ 2) |`;
            expected(() => parser(code)).toThrow(
                'Missing "alternate" for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the alternate with integer without whitespace', () => {
            const code = `if=1(+2)|`;
            expected(() => parser(code)).toThrow(
                'Missing "alternate" for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the alternate with float', () => {
            const code = `if = 1.23 (+ 2.05) |`;
            expected(() => parser(code)).toThrow(
                'Missing "alternate" for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the alternate with float without whitespace', () => {
            const code = `if=1.23(+2.05)|`;
            expected(() => parser(code)).toThrow(
                'Missing "alternate" for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the alternate with integer and float', () => {
            const code = `if = 1.23 (+ 2) |`;
            expected(() => parser(code)).toThrow(
                'Missing "alternate" for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the alternate with integer and float without whitespace', () => {
            const code = `if=1.23(+2)|`;
            expected(() => parser(code)).toThrow(
                'Missing "alternate" for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the pipe operator with integer', () => {
            const code = `if = 1 (+ 2) (- 3)`;
            expected(() => parser(code)).toThrow(
                'Missing "alternate" for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the pipe operator with integer without whitespace', () => {
            const code = `if=1(+2)(-3)`;
            expected(() => parser(code)).toThrow(
                'Missing "alternate" for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the pipe operator with float', () => {
            const code = `if = 1.0 (+ 2.1) (- 3.2)`;
            expected(() => parser(code)).toThrow(
                'Missing "alternate" for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the pipe operator with float without whitespace', () => {
            const code = `if=1.0(+2.1)(-3.2)`;
            expected(() => parser(code)).toThrow(
                'Missing "alternate" for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the pipe operator with integer and float', () => {
            const code = `if = 1.0 (+ 2) (- 3.2)`;
            expected(() => parser(code)).toThrow(
                'Missing "alternate" for if-statement in line 1'
            );
        });

        test('throws an error if if-statement is missing the pipe operator with integer and float without whitespace', () => {
            const code = `if=1.0(+2)(-3.2)`;
            expected(() => parser(code)).toThrow(
                'Missing "alternate" for if-statement in line 1'
            );
        });
    });
});
