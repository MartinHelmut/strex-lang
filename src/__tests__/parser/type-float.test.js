/* eslint-disable max-len */
const parser = require('../../parser');

describe('parser > types > float', () => {
    describe('basic literal', () => {
        test('creates a float expression for the last expression', () => {
            const code = `- 2.1`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'LastExpression',
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '2.1',
                        },
                        operator: '-',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a float expression for the last expression without whitespace', () => {
            const code = `-5.5`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'LastExpression',
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '5.5',
                        },
                        operator: '-',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates an unsigned float literal', () => {
            const code = `3.003332`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'FloatLiteral',
                        value: '3.003332',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });
    });

    describe('without braces', () => {
        test('creates a float expression with + operator', () => {
            const code = `2.1 + 5.4`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'FloatLiteral',
                            value: '2.1',
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '5.4',
                        },
                        operator: '+',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates an float expression with + operator without whitespace', () => {
            const code = `2.1+5.4`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '2.1',
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '5.',
                        },
                        operator: '+',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a float expression with - operator', () => {
            const code = `1.1 - 45.56`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'FloatLiteral',
                            value: '1.1',
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '45.56',
                        },
                        operator: '-',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a float expression with - operator without whitespace', () => {
            const code = `1.1-45.56`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'FloatLiteral',
                            value: '1.1',
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '45.56',
                        },
                        operator: '-',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a float expression with / operator', () => {
            const code = `36.456 / 6.0`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'FloatLiteral',
                            value: '36.456',
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '6.0',
                        },
                        operator: '/',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a float expression with / operator without whitespace', () => {
            const code = `36.456/6.0`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'FloatLiteral',
                            value: '36.456',
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '6.0',
                        },
                        operator: '/',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a float expression with * operator', () => {
            const code = `10.0 * 3.3`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'FloatLiteral',
                            value: '10.0',
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '3.3',
                        },
                        operator: '*',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates a float expression with * operator without whitespace', () => {
            const code = `10.0*3.3`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'FloatLiteral',
                            value: '10.0',
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '3.3',
                        },
                        operator: '*',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });
    });

    describe('with braces', () => {
        test('creates combined float expressions if braces are used at the start', () => {
            const code = `(5.6 - 1.0) / 2.4`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'Expression',
                            left: {
                                type: 'FloatLiteral',
                                value: '5.6',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '1.0',
                            },
                            operator: '-',
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '2.4',
                        },
                        operator: '/',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates combined float expressions if braces are used at the start without whitespace', () => {
            const code = `(5.6-1.0)/2.4`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'Expression',
                            left: {
                                type: 'FloatLiteral',
                                value: '5.6',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '1.0',
                            },
                            operator: '-',
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '2.4',
                        },
                        operator: '/',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates combined float expressions if braces are used in the middle', () => {
            const code = `2.2 * (2.1 + 3.0) / 4.9`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'Expression',
                            left: {
                                type: 'FloatLiteral',
                                value: '2.2',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'FloatExpression',
                                    value: '2.1',
                                },
                                right: {
                                    type: 'FloatExpression',
                                    value: '3.0',
                                },
                                operator: '+',
                            },
                            operator: '*',
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '4.9',
                        },
                        operator: '/',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates combined float expressions if braces are used in the middle without whitespace', () => {
            const code = `2.2*(2.1+3.0)/4.9`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'Expression',
                            left: {
                                type: 'FloatLiteral',
                                value: '2.2',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'FloatExpression',
                                    value: '2.1',
                                },
                                right: {
                                    type: 'FloatExpression',
                                    value: '3.0',
                                },
                                operator: '+',
                            },
                            operator: '*',
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '4.9',
                        },
                        operator: '/',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates combined float expressions if braces are used at the end', () => {
            const code = `2.2 * (2.1 + 3.0)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'FloatLiteral',
                            value: '2.2',
                        },
                        right: {
                            type: 'Expression',
                            left: {
                                type: 'FloatLiteral',
                                value: '2.1',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '3.0',
                            },
                            operator: '+',
                        },
                        operator: '*',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates combined float expressions if braces are used at the end without whitespace', () => {
            const code = `2.2*(2.1+3.0)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'FloatLiteral',
                            value: '2.2',
                        },
                        right: {
                            type: 'Expression',
                            left: {
                                type: 'FloatLiteral',
                                value: '2.1',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '3.0',
                            },
                            operator: '+',
                        },
                        operator: '*',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });
    });

    describe('with all operands', () => {
        test('creates an expression with all operands on float', () => {
            const code = `1.1 + 2.2 * 3.3 - 4.4 / 5.5`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'Expression',
                            left: {
                                type: 'FloatLiteral',
                                value: '1.1',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'FloatLiteral',
                                    value: '2.2',
                                },
                                right: {
                                    type: 'FloatLiteral',
                                    value: '3.3',
                                },
                                operator: '*',
                            },
                            operator: '+',
                        },
                        right: {
                            type: 'Expression',
                            left: {
                                type: 'FloatLiteral',
                                value: '4.4',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '5.5',
                            },
                            operator: '/',
                        },
                        operator: '-',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates an expression with all operands on float without whitespace', () => {
            const code = `1.1+2.2*3.3-4.4/5.5`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'Expression',
                            left: {
                                type: 'FloatLiteral',
                                value: '1.1',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'FloatLiteral',
                                    value: '2.2',
                                },
                                right: {
                                    type: 'FloatLiteral',
                                    value: '3.3',
                                },
                                operator: '*',
                            },
                            operator: '+',
                        },
                        right: {
                            type: 'Expression',
                            left: {
                                type: 'FloatLiteral',
                                value: '4.4',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '5.5',
                            },
                            operator: '/',
                        },
                        operator: '-',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });
    });

    describe('error handling', () => {
        test('does not throw on null division', () => {
            const code = `1.3 / 0`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '1',
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '0',
                        },
                        operator: '/',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('throws an error if right hand expression is missing for float', () => {
            const code = `3.1 *`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });
    });
});
