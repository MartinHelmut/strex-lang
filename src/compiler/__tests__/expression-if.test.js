/* eslint-disable max-len */
const compiler = require('../index');

const ENSURE = process.env.STREX_LANG_ENSURE === '1';

describe('compiler > expression > if', () => {
    describe('basic comparisons', () => {
        test('by equality true', () => {
            const actual = compiler('10\n= 10 ? - 5\n', ENSURE);
            const expected = '5';

            expect(actual).toBe(expected);
        });

        test('by equality false', () => {
            const actual = compiler('8\n= 10 ? - 5 : + 2\n', ENSURE);
            const expected = '10';

            expect(actual).toBe(expected);
        });

        test('by greater than true', () => {
            const actual = compiler('1\n> 0 ? + 2\n', ENSURE);
            const expected = '3';

            expect(actual).toBe(expected);
        });

        test('by greater than false', () => {
            const actual = compiler('5\n> 6 ? - 5 : * 2\n', ENSURE);
            const expected = '10';

            expect(actual).toBe(expected);
        });

        test('by smaller than true', () => {
            const actual = compiler('- 10\n< 0 - 1 ? + 10\n', ENSURE);
            const expected = '0';

            expect(actual).toBe(expected);
        });

        test('by smaller than false', () => {
            const actual = compiler('1\n< 0 - 1 ? + 1 : - 2\n', ENSURE);
            const expected = '-1';

            expect(actual).toBe(expected);
        });
    });

    describe('with the "and" operator', () => {
        test('for one operations true', () => {
            const actual = compiler('1\n> 0 & < 2 ? + 0.1\n', ENSURE);
            const expected = '1.1';

            expect(actual).toBe(expected);
        });

        test('for one operations false', () => {
            const actual = compiler('1\n> 0 & < 1 ? + 0.1 : - 0.1\n', ENSURE);
            const expected = '0.9';

            expect(actual).toBe(expected);
        });

        test('for multiple operations true', () => {
            const actual = compiler('5.5\n> 0 & < 10 & > 2 ? - 0.5\n', ENSURE);
            const expected = '5';

            expect(actual).toBe(expected);
        });

        test('for multiple operations false', () => {
            const actual = compiler(
                '0.1\n> 0 & < 10 & > 2 ? - 0.1 : + 0.9\n',
                ENSURE
            );
            const expected = '1';

            expect(actual).toBe(expected);
        });
    });

    describe('with the "or" operator', () => {
        test('for one operations true', () => {
            const actual = compiler('5\n> 10 | = 5 ? + 1\n', ENSURE);
            const expected = '6';

            expect(actual).toBe(expected);
        });

        test('for one operations false', () => {
            const actual = compiler('1\n> 2 | < 1 ? - 1 : + 4\n', ENSURE);
            const expected = '5';

            expect(actual).toBe(expected);
        });

        test('for multiple operations true', () => {
            const actual = compiler('1\n> 2 | < 0 | = 1 ? - 0.2\n', ENSURE);
            const expected = '0.8';

            expect(actual).toBe(expected);
        });

        test('for multiple operations false', () => {
            const actual = compiler(
                '00.2\n= 1 | < 0.1 | > 1 ? * 2 : / 0.1\n',
                ENSURE
            );
            const expected = '2';

            expect(actual).toBe(expected);
        });
    });
});
