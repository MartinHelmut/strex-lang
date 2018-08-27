/* eslint-disable max-len */
const parser = require('../parser');

describe('parser', () => {
    test('creates an empty body if input is missing', () => {
        const code = ``;
        const ast = parser(code);
        const expected = {
            body: [],
        };

        expect(ast).toEqual(expected);
    });

    test('creates a print out statement on empty line', () => {
        const code = ``;
        const ast = parser(code);
        const expected = {
            body: [
                {type: 'PrintOut'},
            ],
        };

        expect(ast).toEqual(expected);
    });

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

    test('creates combined expressions if braces are used at the start', () => {
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

    test('creates combined expressions if braces are used at the start without whitespace', () => {
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

    test('creates combined expressions if braces are used at the end', () => {
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

    test('creates combined expressions if braces are used at the end without whitespace', () => {
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

    test('throws an error if right hand expression is missing', () => {
        const code = `3 *`;
        expect(() => parser(code)).toThrow(
            'Missing left hand expression in line 1'
        );
    });

    test('creates a basic if-statement', () => {
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

    test('creates a basic if-statement without whitespace', () => {
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

    test('creates a basic if-statement with two tests', () => {
        const code = `if = 1 | > 3 (+ 2) | (- 3)`;
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

    test('creates a basic if-statement with two tests without whitespace', () => {
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

    test('creates a basic if-statement with multiple tests', () => {
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

    test('creates a basic if-statement with multiple tests without whitespace', () => {
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

    test('throws an error if if-statement is missing the test', () => {
        const code = `if (+ 2) | (- 3)`;
        expected(() => parser(code)).toThrow(
            'Missing test for if-statement in line 1'
        );
    });

    test('throws an error if if-statement is missing the test without whitespace', () => {
        const code = `if(+2)|(-3)`;
        expected(() => parser(code)).toThrow(
            'Missing test for if-statement in line 1'
        );
    });

    test('throws an error if if-statement is missing the consequent', () => {
        const code = `if = 1 | (- 3)`;
        expected(() => parser(code)).toThrow(
            'Missing "consequent" for if-statement in line 1'
        );
    });

    test('throws an error if if-statement is missing the consequent without whitespace', () => {
        const code = `if=1|(-3)`;
        expected(() => parser(code)).toThrow(
            'Missing "consequent" for if-statement in line 1'
        );
    });

    test('throws an error if if-statement is missing the alternate', () => {
        const code = `if = 1 (+ 2) |`;
        expected(() => parser(code)).toThrow(
            'Missing "alternate" for if-statement in line 1'
        );
    });

    test('throws an error if if-statement is missing the alternate without whitespace', () => {
        const code = `if=1(+2)|`;
        expected(() => parser(code)).toThrow(
            'Missing "alternate" for if-statement in line 1'
        );
    });

    test('throws an error if if-statement is missing the pipe operator', () => {
        const code = `if = 1 (+ 2) (- 3)`;
        expected(() => parser(code)).toThrow(
            'Missing "alternate" for if-statement in line 1'
        );
    });

    test('throws an error if if-statement is missing the pipe operator without whitespace', () => {
        const code = `if=1(+2)(-3)`;
        expected(() => parser(code)).toThrow(
            'Missing "alternate" for if-statement in line 1'
        );
    });

    // @todo: Check print out with continue expression afterwards
    // @todo: Add multi line tests
    // @todo: Add & operator
    // @todo: Check if optional if..else statements are possible
});
