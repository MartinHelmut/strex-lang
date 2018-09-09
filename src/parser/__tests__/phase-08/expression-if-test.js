/* eslint-disable max-len */
const parser = require('../../index');

describe('parser > expressions > if', () => {
    describe('error handling', () => {
        test('throws an error if if-expression is missing the test with integer', () => {
            const code = '? + 2 : - 3';
            expect(() => parser(code)).toThrow(
                'Line 1, column 1: Missing test for if-expression'
            );
        });

        test('throws an error if if-expression is missing the test with integer without whitespace', () => {
            const code = '?+2:-3';
            expect(() => parser(code)).toThrow(
                'Line 1, column 1: Missing test for if-expression'
            );
        });

        test('throws an error if if-expression is missing the test with float', () => {
            const code = '? + 2.001 : - 3.1';
            expect(() => parser(code)).toThrow(
                'Line 1, column 1: Missing test for if-expression'
            );
        });

        test('throws an error if if-expression is missing the test with float without whitespace', () => {
            const code = '?+2.001:-3.1';
            expect(() => parser(code)).toThrow(
                'Line 1, column 1: Missing test for if-expression'
            );
        });

        test('throws an error if if-expression is missing the test with integer and float', () => {
            const code = '? + 2.001 : - 3';
            expect(() => parser(code)).toThrow(
                'Line 1, column 1: Missing test for if-expression'
            );
        });

        test('throws an error if if-expression is missing the test with integer and float without whitespace', () => {
            const code = '?+2.001:-3';
            expect(() => parser(code)).toThrow(
                'Line 1, column 1: Missing test for if-expression'
            );
        });

        test('throws an error if if-expression is missing the consequent with integer', () => {
            const code = '= 1 ? : - 3';
            expect(() => parser(code)).toThrow(
                'Line 1, column 1: Missing consequent for if-expression'
            );
        });

        test('throws an error if if-expression is missing the consequent with integer without whitespace', () => {
            const code = '=1?:-3';
            expect(() => parser(code)).toThrow(
                'Line 1, column 1: Missing consequent for if-expression'
            );
        });

        test('throws an error if if-expression is missing the consequent with float', () => {
            const code = '= 1.0 ? : - 3.0';
            expect(() => parser(code)).toThrow(
                'Line 1, column 1: Missing consequent for if-expression'
            );
        });

        test('throws an error if if-expression is missing the consequent with float without whitespace', () => {
            const code = '=1.0?:-3.0';
            expect(() => parser(code)).toThrow(
                'Line 1, column 1: Missing consequent for if-expression'
            );
        });

        test('throws an error if if-expression is missing the consequent with integer and float', () => {
            const code = '= 1 ? : - 3.0';
            expect(() => parser(code)).toThrow(
                'Line 1, column 1: Missing consequent for if-expression'
            );
        });

        test('throws an error if if-expression is missing the consequent with integer and float without whitespace', () => {
            const code = '=1?:-3.0';
            expect(() => parser(code)).toThrow(
                'Line 1, column 1: Missing consequent for if-expression'
            );
        });

        test('throws an error if if-expression is missing the alternate with integer', () => {
            const code = '= 1 ? + 2 :';
            expect(() => parser(code)).toThrow(
                'Line 1, column 1: Missing alternate for if-expression'
            );
        });

        test('throws an error if if-expression is missing the alternate with integer without whitespace', () => {
            const code = '=1?+2:';
            expect(() => parser(code)).toThrow(
                'Line 1, column 1: Missing alternate for if-expression'
            );
        });

        test('throws an error if if-expression is missing the alternate with float', () => {
            const code = '= 1.23 ? + 2.05 :';
            expect(() => parser(code)).toThrow(
                'Line 1, column 1: Missing alternate for if-expression'
            );
        });

        test('throws an error if if-expression is missing the alternate with float without whitespace', () => {
            const code = '=1.23?+2.05:';
            expect(() => parser(code)).toThrow(
                'Line 1, column 1: Missing alternate for if-expression'
            );
        });

        test('throws an error if if-expression is missing the alternate with integer and float', () => {
            const code = '= 1.23 ? + 2 :';
            expect(() => parser(code)).toThrow(
                'Line 1, column 1: Missing alternate for if-expression'
            );
        });

        test('throws an error if if-expression is missing the alternate with integer and float without whitespace', () => {
            const code = '=1.23?+2:';
            expect(() => parser(code)).toThrow(
                'Line 1, column 1: Missing alternate for if-expression'
            );
        });
    });
});
