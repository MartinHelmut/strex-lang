const {
    createAstBody,
    createAstExpression,
    createAstIntegerLiteral,
    createAstLastExpression,
    createAstPrintOut,
    createAstIfStatement,
} = require('./_ast-helper');

const parser = require('../parser');

describe('parser', () => {
    test('creates an empty body if input is missing', () => {
        const code =
``;
        const ast = parser(code);
        const expected = createAstBody();

        expect(ast, expected);
    });

    test('creates a print out statement on empty line', () => {
        const code =
`
`;
        const ast = parser(code);
        const expected = createAstBody([createAstPrintOut()]);

        expect(ast, expected);
    });

    test('creates a signed integer literal expression', () => {
        const code =
`-5
`;
        const ast = parser(code);
        const expected = createAstBody([createAstIntegerLiteral('-5')]);

        expect(ast, expected);
    });

    test('creates an unsigned integer literal', () => {
        const code =
`3
`;
        const ast = parser(code);
        const expected = createAstBody([createAstIntegerLiteral('3')]);

        expect(ast, expected);
    });

    test('creates an integer expression with + operator', () => {
        const code =
`2 + 5
`;
        const ast = parser(code);
        const expected = createAstBody([
            createAstExpression(
                createAstIntegerLiteral('2'),
                createAstIntegerLiteral('5'),
                '+'
            ),
        ]);

        expect(ast, expected);
    });

    test('creates an integer expression with - operator', () => {
        const code =
`1 - 45
`;
        const ast = parser(code);
        const expected = createAstBody([
            createAstExpression(
                createAstIntegerLiteral('1'),
                createAstIntegerLiteral('45'),
                '-'
            ),
        ]);

        expect(ast, expected);
    });

    test('creates an integer expression with / operator', () => {
        const code =
`36 / 6
`;
        const ast = parser(code);
        const expected = createAstBody([
            createAstExpression(
                createAstIntegerLiteral('36'),
                createAstIntegerLiteral('6'),
                '/'
            ),
        ]);

        expect(ast, expected);
    });

    test('creates an integer expression with * operator', () => {
        const code =
`10 * 3
`;
        const ast = parser(code);
        const expected = createAstBody([
            createAstExpression(
                createAstIntegerLiteral('10'),
                createAstIntegerLiteral('3'),
                '*'
            ),
        ]);

        expect(ast, expected);
    });

    test('throws an error if right hand expression is missing', () => {
        const code =
`3 *
`;
        expect(() => parser(code)).toThrow(
            'Missing left hand expression in line 1'
        );
    });

    test('creates an integer expression for the last expression', () => {
        const code =
`- 2
`;
        const ast = parser(code);
        const expected = createAstBody([
            createAstExpression(
                createAstLastExpression(),
                createAstIntegerLiteral('2'),
                '-'
            ),
        ]);

        expect(ast, expected);
    });

    test('creates a basic if-statement', () => {
        const code =
`if = 1 (+ 2) | (- 3)
`;
        const ast = parser(code);
        const expected = createAstBody([
            createAstIfStatement(
                createAstExpression(
                    createAstLastExpression(),
                    createAstIntegerLiteral('1'),
                    '='
                ),
                createAstExpression(
                    createAstLastExpression(),
                    createAstIntegerLiteral('2'),
                    '+'
                ),
                createAstExpression(
                    createAstLastExpression(),
                    createAstIntegerLiteral('3'),
                    '-'
                )
            ),
        ]);

        expect(ast, expected);
    });

    test('throws an error if if-statement is missing the test', () => {
        const code =
`if (+ 2) | (- 3)
`;
        expected(() => parser(code)).toThrow(
            'Missing test for if-statement in line 1'
        );
    });

    test('throws an error if if-statement is missing the consequent', () => {
        const code =
`if = 1 | (- 3)
`;
        expected(() => parser(code)).toThrow(
            'Missing "consequent" for if-statement in line 1'
        );
    });

    test('throws an error if if-statement is missing the alternate', () => {
        const code =
`if = 1 (+ 2) |
`;
        expected(() => parser(code)).toThrow(
            'Missing "alternate" for if-statement in line 1'
        );
    });

    test('throws an error if if-statement is missing the pipe operator', () => {
        const code =
`if = 1 (+ 2) (- 3)
`;
        expected(() => parser(code)).toThrow(
            'Missing "alternate" for if-statement in line 1'
        );
    });

    // 1. Check whitespaces
    // 2. Check if..pipe variations
    // 3. Check print out with continue expression
    // Think about more cases ...
});
