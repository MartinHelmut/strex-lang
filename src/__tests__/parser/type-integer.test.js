/* eslint-disable max-len */
const parser = require('../../parser');

describe('parser > types > integer', () => {
    describe('basic literal', () => {
        test('creates an integer expression for the last expression', () => {
            const code = `- 2`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
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
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates an integer expression for the last expression without whitespace', () => {
            const code = `-5`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'LastExpression',
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '5',
                        },
                        operator: '-',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates an unsigned integer literal', () => {
            const code = `3`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IntegerLiteral',
                        value: '3',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });
    });

    describe('without braces', () => {
        test('creates an integer expression with + operator', () => {
            const code = `2 + 5`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '2',
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '5',
                        },
                        operator: '+',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates an integer expression with + operator without whitespace', () => {
            const code = `2+5`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '2',
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '5',
                        },
                        operator: '+',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates an integer expression with - operator', () => {
            const code = `1 - 45`;
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
                            value: '45',
                        },
                        operator: '-',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates an integer expression with - operator without whitespace', () => {
            const code = `1-45`;
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
                            value: '45',
                        },
                        operator: '-',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates an integer expression with / operator', () => {
            const code = `36 / 6`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '36',
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '6',
                        },
                        operator: '/',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates an integer expression with / operator without whitespace', () => {
            const code = `36/6`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '36',
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '6',
                        },
                        operator: '/',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates an integer expression with * operator', () => {
            const code = `10 * 3`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '10',
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '3',
                        },
                        operator: '*',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates an integer expression with * operator without whitespace', () => {
            const code = `10*3`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '10',
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '3',
                        },
                        operator: '*',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });
    });

    describe('with braces', () => {
        test('creates combined integer expressions if braces are used at the start', () => {
            const code = `(5 - 1) / 2`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'Expression',
                            left: {
                                type: 'IntegerLiteral',
                                value: '5',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '1',
                            },
                            operator: '-',
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '2',
                        },
                        operator: '/',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates combined integer expressions if braces are used at the start without whitespace', () => {
            const code = `(5-1)/2`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'Expression',
                            left: {
                                type: 'IntegerLiteral',
                                value: '5',
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '1',
                            },
                            operator: '-',
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '2',
                        },
                        operator: '/',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates combined integer expressions if braces are used in the middle', () => {
            const code = `2 / (3 - 2) + 5`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'Expression',
                            left: {
                                type: 'IntegerLiteral',
                                value: '2',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'IntegerLiteral',
                                    value: '3',
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
                            type: 'IntegerLiteral',
                            value: '5',
                        },
                        operator: '+',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates combined integer expressions if braces are used in the middle without whitespace', () => {
            const code = `2/(3-2)+5`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'Expression',
                            left: {
                                type: 'IntegerLiteral',
                                value: '2',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'IntegerLiteral',
                                    value: '3',
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
                            type: 'IntegerLiteral',
                            value: '5',
                        },
                        operator: '+',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates combined integer expressions if braces are used at the end', () => {
            const code = `2 * (2 + 3)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '2',
                        },
                        right: {
                            type: 'Expression',
                            left: {
                                type: 'IntegerLiteral',
                                value: '2',
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

        test('creates combined integer expressions if braces are used at the end without whitespace', () => {
            const code = `2*(2+3)`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '2',
                        },
                        right: {
                            type: 'Expression',
                            left: {
                                type: 'IntegerLiteral',
                                value: '2',
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
        test('creates an expression with all operands on integer', () => {
            const code = `1 + 2 * 3 - 4 / 5`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'Expression',
                            left: {
                                type: 'IntegerLiteral',
                                value: '1',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'IntegerLiteral',
                                    value: '2',
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
                            type: 'Expression',
                            left: {
                                type: 'IntegerLiteral',
                                value: '4',
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

        test('creates an expression with all operands on integer without whitespace', () => {
            const code = `1+2*3-4/5`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'Expression',
                        left: {
                            type: 'Expression',
                            left: {
                                type: 'IntegerLiteral',
                                value: '1',
                            },
                            right: {
                                type: 'Expression',
                                left: {
                                    type: 'IntegerLiteral',
                                    value: '2',
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
                            type: 'Expression',
                            left: {
                                type: 'IntegerLiteral',
                                value: '4',
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
        test('does not throw on null division', () => {
            const code = `1 / 0`;
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

        test('throws an error on leading zero for integer', () => {
            const code = `03`;
            expect(() => parser(code)).toThrow(
                'Leading zero on integer values is not allowed in line 1'
            );
        });

        test('throws an error on multiple leading zero for integer', () => {
            const code = `000045`;
            expect(() => parser(code)).toThrow(
                'Leading zero on integer values is not allowed in line 1'
            );
        });

        test('throws an error if right hand expression on + operator is missing for integer', () => {
            const code = `3 +`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if right hand expression on - operator is missing for integer', () => {
            const code = `1 -`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if right hand expression on * operator is missing for integer', () => {
            const code = `18754 *`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if right hand expression on / operator is missing for integer', () => {
            const code = `9999999999999999 /`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if right hand expression on multiple operator is missing for integer [1]', () => {
            const code = `2 + 6 -`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if right hand expression on multiple operator is missing for integer [2]', () => {
            const code = `58 + 10004 - 2 *`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if right hand expression on multiple operator is missing for integer [3]', () => {
            const code = `12 + 987 /`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if right hand expression on multiple operator is missing for integer [4]', () => {
            const code = `22 + 31 +`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if integer is missing on two + operations', () => {
            const code = `1 + + 2`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if integer is missing on two + operations without whitespace', () => {
            const code = `1++2`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if integer is missing on two - operations', () => {
            const code = `1000 - - 3000`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if integer is missing on two - operations without whitespace', () => {
            const code = `1000--3000`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if integer is missing on two * operations', () => {
            const code = `3 * * 1`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if integer is missing on two * operations without whitespace', () => {
            const code = `3**1`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws an error if integer is missing on two / operations', () => {
            const code = `36 / / 6`;
            expect(() => parser(code)).toThrow(
                'Missing left hand expression in line 1'
            );
        });

        test('throws no error if integer is missing on two / operations without whitespace because it is interpreted as comment', () => {
            const code = `36//6`;
            const ast = parser(code);
            const expected = {
                body: [
                    {
                        type: 'IntegerLiteral',
                        value: '36',
                    },
                ],
            };

            expect(ast).toEqual(expected);
        });
    });
});
