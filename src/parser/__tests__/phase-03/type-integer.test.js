/* eslint-disable max-len */
const parser = require('../../index');

describe('parser > types > integer', () => {
    describe('error handling', () => {
        test('does not throw on null division', () => {
            const code = '1 / 0\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '1'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '0'
                        },
                        operator: '/'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('throws an error if right hand expression on + operator is missing for integer', () => {
            const code = '3 +\n';
            expect(() => parser(code)).toThrow();
        });

        test('throws an error if right hand expression on - operator is missing for integer', () => {
            const code = '1 -\n';
            expect(() => parser(code)).toThrow();
        });

        test('throws an error if right hand expression on * operator is missing for integer', () => {
            const code = '18754 *\n';
            expect(() => parser(code)).toThrow();
        });

        test('throws an error if right hand expression on / operator is missing for integer', () => {
            const code = '9999999999999999 /\n';
            expect(() => parser(code)).toThrow();
        });

        test('throws an error if right hand expression on multiple operator is missing for integer [1]', () => {
            const code = '2 + 6 -\n';
            expect(() => parser(code)).toThrow();
        });

        test('throws an error if right hand expression on multiple operator is missing for integer [2]', () => {
            const code = '58 + 10004 - 2 *\n';
            expect(() => parser(code)).toThrow();
        });

        test('throws an error if right hand expression on multiple operator is missing for integer [3]', () => {
            const code = '12 + 987 /\n';
            expect(() => parser(code)).toThrow();
        });

        test('throws an error if right hand expression on multiple operator is missing for integer [4]', () => {
            const code = '22 + 31 +\n';
            expect(() => parser(code)).toThrow();
        });

        test('throws an error if integer is missing on two + operations', () => {
            const code = '1 + + 2\n';
            expect(() => parser(code)).toThrow();
        });

        test('throws an error if integer is missing on two + operations without whitespace', () => {
            const code = '1++2\n';
            expect(() => parser(code)).toThrow();
        });

        test('throws an error if integer is missing on two - operations', () => {
            const code = '1000 - - 3000\n';
            expect(() => parser(code)).toThrow();
        });

        test('throws an error if integer is missing on two - operations without whitespace', () => {
            const code = '1000--3000\n';
            expect(() => parser(code)).toThrow();
        });

        test('throws an error if integer is missing on two * operations', () => {
            const code = '3 * * 1\n';
            expect(() => parser(code)).toThrow();
        });

        test('throws an error if integer is missing on two * operations without whitespace', () => {
            const code = '3**1\n';
            expect(() => parser(code)).toThrow();
        });

        test('throws an error if integer is missing on two / operations', () => {
            const code = '36 / / 6\n';
            expect(() => parser(code)).toThrow();
        });
    });
});
