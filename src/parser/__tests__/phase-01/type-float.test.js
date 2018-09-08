/* eslint-disable max-len */
const parser = require('../../index');

describe('parser > types > float', () => {
    describe('basic literal', () => {
        test('creates a float expression for the last expression', () => {
            const code = '- 20.1\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '20.1'
                        },
                        operator: '-'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates a float expression for the last expression without whitespace', () => {
            const code = '-5.5\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '5.5'
                        },
                        operator: '-'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates an unsigned float literal', () => {
            const code = '3.003332\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'FloatLiteral',
                        value: '3.003332'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('does not throw on JSON.stringify', () => {
            const code = `4.8\n`;
            expect(() => JSON.stringify(parser(code))).not.toThrow();
        });
    });

    describe('without braces', () => {
        test('creates a float expression with + operator', () => {
            const code = '24811.1 + 5.4\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '24811.1'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '5.4'
                        },
                        operator: '+'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates a float expression with + operator without whitespace', () => {
            const code = '24811.1+5.4\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '24811.1'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '5.4'
                        },
                        operator: '+'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates a float expression with - operator', () => {
            const code = '1.1 - 45.56\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '1.1'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '45.56'
                        },
                        operator: '-'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates a float expression with - operator without whitespace', () => {
            const code = '1.1-45.56\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '1.1'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '45.56'
                        },
                        operator: '-'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates a float expression with / operator', () => {
            const code = '36.456 / 6.0\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '36.456'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '6.0'
                        },
                        operator: '/'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates a float expression with / operator without whitespace', () => {
            const code = '36.456/6.0\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '36.456'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '6.0'
                        },
                        operator: '/'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates a float expression with * operator', () => {
            const code = '10.0 * 3.3\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '10.0'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '3.3'
                        },
                        operator: '*'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates a float expression with * operator without whitespace', () => {
            const code = '10.0*3.3\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '10.0'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '3.3'
                        },
                        operator: '*'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });
    });

    describe('with all operands', () => {
        test('creates an expression with all operands on float', () => {
            const code = '1.1 + 2.2 * 3.3 - 4.4 / 5.5\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'FloatLiteral',
                                value: '1.1'
                            },
                            right: {
                                type: 'BinaryExpression',
                                left: {
                                    type: 'FloatLiteral',
                                    value: '2.2'
                                },
                                right: {
                                    type: 'FloatLiteral',
                                    value: '3.3'
                                },
                                operator: '*'
                            },
                            operator: '+'
                        },
                        right: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'FloatLiteral',
                                value: '4.4'
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '5.5'
                            },
                            operator: '/'
                        },
                        operator: '-'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates an expression with all operands on float without whitespace', () => {
            const code = '1.1+2.2*3.3-4.4/5.5\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'FloatLiteral',
                                value: '1.1'
                            },
                            right: {
                                type: 'BinaryExpression',
                                left: {
                                    type: 'FloatLiteral',
                                    value: '2.2'
                                },
                                right: {
                                    type: 'FloatLiteral',
                                    value: '3.3'
                                },
                                operator: '*'
                            },
                            operator: '+'
                        },
                        right: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'FloatLiteral',
                                value: '4.4'
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '5.5'
                            },
                            operator: '/'
                        },
                        operator: '-'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('does not throw on JSON.stringify', () => {
            const code = `1.1 + 2.2 * 3.3 - 4.4 / 5.5\n`;
            expect(() => JSON.stringify(parser(code))).not.toThrow();
        });
    });
});
