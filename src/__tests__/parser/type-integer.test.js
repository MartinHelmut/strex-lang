/* eslint-disable max-len */
const parser = require('../../parser');

describe('parser > types > integer', () => {
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
                        type: 'IntegerLiteral',
                        value: '2',
                    },
                    right: {
                        type: 'Expression',
                        left: {
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
                        right: {
                            type: 'IntegerLiteral',
                            value: '5',
                        },
                        operator: '+',
                    },
                    operator: '/',
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
                        type: 'IntegerLiteral',
                        value: '2',
                    },
                    right: {
                        type: 'Expression',
                        left: {
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
                        right: {
                            type: 'IntegerLiteral',
                            value: '5',
                        },
                        operator: '+',
                    },
                    operator: '/',
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

    test('throws an error if right hand expression is missing for integer', () => {
        const code = `3 *`;
        expect(() => parser(code)).toThrow(
            'Missing left hand expression in line 1'
        );
    });
});
