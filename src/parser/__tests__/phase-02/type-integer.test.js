/* eslint-disable max-len */
const parser = require('../../index');

describe('parser > types > integer', () => {
    describe('with braces', () => {
        test('creates combined integer expressions if braces are used at the start', () => {
            const code = '(5 - 1) / 2\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
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
            const code = '(5-1)/2\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
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
            const code = '2 / (3 - 2) + 5\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
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
            const code = '2/(3-2)+5\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
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
            const code = '2 * (2 + 3)\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
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
            const code = '2*(2+3)\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
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
});
