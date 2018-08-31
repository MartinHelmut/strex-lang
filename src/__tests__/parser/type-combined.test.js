/* eslint-disable max-len */
const parser = require('../../parser');

describe('parser > types > combined', () => {
    describe('without braces', () => {
        test('creates an expression with + operator on float and integer', () => {
            const code = `2 + 4.09`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '2',
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '4.09',
                        },
                        operator: '+',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates an expression with + operator on float and integer without whitespace', () => {
            const code = `2+4.09`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '2',
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '4.09',
                        },
                        operator: '+',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates an expression with - operator on float and integer', () => {
            const code = `1.11 - 23`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '1.11',
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '23',
                        },
                        operator: '-',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates an expression with - operator on float and integer without whitespace', () => {
            const code = `1.11-23`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '1.11',
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '23',
                        },
                        operator: '-',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates an expression with / operator on float and integer', () => {
            const code = `98 / 0.1`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '98',
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '0.1',
                        },
                        operator: '/',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates an expression with / operator on float and integer without whitespace', () => {
            const code = `98/0.1`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '98',
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '0.1',
                        },
                        operator: '/',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates an expression with * operator on float and integer', () => {
            const code = `100 * 3.3`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '100',
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

        test('creates an expression with * operator on float and integer without whitespaces', () => {
            const code = `100*3.3`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '100',
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
        test('creates combined expressions if braces are used at the start on float and integer', () => {
            const code = `(5 - 2.5) / 2.5`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'IntegerLiteral',
                                value: '5',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '2.5',
                            },
                            operator: '-',
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '2.5',
                        },
                        operator: '/',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates combined expressions if braces are used at the start on float and integer without whitespaces', () => {
            const code = `(5-2.5)/2.5`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'IntegerLiteral',
                                value: '5',
                            },
                            right: {
                                type: 'FloatLiteral',
                                value: '2.5',
                            },
                            operator: '-',
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '2.5',
                        },
                        operator: '/',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates combined expressions if braces are used in the middle on float and integer', () => {
            const code = `2 / (3.2 - 2) + 5.0001`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'IntegerLiteral',
                                value: '2',
                            },
                            right: {
                                type: 'BinaryExpression',
                                left: {
                                    type: 'FloatLiteral',
                                    value: '3.2',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '2',
                                },
                                operator: '-',
                            },
                            operator: '/',
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '5.0001',
                        },
                        operator: '+',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates combined expressions if braces are used in the middle on float and integer without whitespaces', () => {
            const code = `2/(3.2-2)+5.0001`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'IntegerLiteral',
                                value: '2',
                            },
                            right: {
                                type: 'BinaryExpression',
                                left: {
                                    type: 'FloatLiteral',
                                    value: '3.2',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '2',
                                },
                                operator: '-',
                            },
                            operator: '/',
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '5.0001',
                        },
                        operator: '+',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates combined expressions if braces are used at the end on float and integer', () => {
            const code = `2 * (0.1 + 3)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '2',
                        },
                        right: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'FloatLiteral',
                                value: '0.1',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '3',
                            },
                            operator: '+',
                        },
                        operator: '*',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates combined expressions if braces are used at the end on float and integer without whitespaces', () => {
            const code = `2*(0.1+3)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '2',
                        },
                        right: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'FloatLiteral',
                                value: '0.1',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '3',
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
        test('creates an expression with all operands on integer and float', () => {
            const code = `1 + 2.2 * 3 - 4.4 / 5`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'IntegerLiteral',
                                value: '1',
                            },
                            right: {
                                type: 'BinaryExpression',
                                left: {
                                    type: 'FloatLiteral',
                                    value: '2.2',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '3',
                                },
                                operator: '*',
                            },
                            operator: '+',
                        },
                        right: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'FloatLiteral',
                                value: '4.4',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '5',
                            },
                            operator: '/',
                        },
                        operator: '-',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates an expression with all operands on integer and float without whitespace', () => {
            const code = `1+2.2*3-4.4/5`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'IntegerLiteral',
                                value: '1',
                            },
                            right: {
                                type: 'BinaryExpression',
                                left: {
                                    type: 'FloatLiteral',
                                    value: '2.2',
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '3',
                                },
                                operator: '*',
                            },
                            operator: '+',
                        },
                        right: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'FloatLiteral',
                                value: '4.4',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '5',
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
        test('throws an error if right hand expression on multiple operator is missing for integer and float [1]', () => {
            const code = `2.1 + 6 -`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if right hand expression on multiple operator is missing for integer and float [2]', () => {
            const code = `58 + 10.004 - 2 *`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if right hand expression on multiple operator is missing for integer and float [3]', () => {
            const code = `12 + 98.7 /`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if right hand expression on multiple operator is missing for integer and float [4]', () => {
            const code = `2.2 + 31 +`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        // @todo
        test('throws an error if integer and float is missing on two + operations', () => {
            const code = `1.1 + + 2`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if integer and float is missing on two + operations without whitespace', () => {
            const code = `1++2.2`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if integer and float is missing on two - operations', () => {
            const code = `10.00 - - 3000`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if integer and float is missing on two - operations without whitespace', () => {
            const code = `1000--30.00`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if integer and float is missing on two * operations', () => {
            const code = `3.3 * * 1`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if integer and float is missing on two * operations without whitespace', () => {
            const code = `3**1.45`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if integer and float is missing on two / operations', () => {
            const code = `3.6 / / 6`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });
    });
});
