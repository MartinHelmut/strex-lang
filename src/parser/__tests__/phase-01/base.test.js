const parser = require('../../index');

describe('parser > base', () => {
    describe('body', () => {
        test('creates an empty body if input is missing', () => {
            const code = ``;
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: []
            };

            expect(ast).toEqual(expected);
        });

        test('does not throw on JSON.stringify', () => {
            const code = ``;
            expect(() => JSON.stringify(parser(code))).not.toThrow();
        });
    });

    describe('print out', () => {
        test('creates a print out statement on empty line', () => {
            const code = `\n`;
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'PrintOut',
                        value: { type: 'LastExpression' }
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates one print out statement on multiple empty line', () => {
            const code = `\n\n`;
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'PrintOut',
                        value: { type: 'LastExpression' }
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('does not throw on JSON.stringify', () => {
            const code = `\n\n`;
            expect(() => JSON.stringify(parser(code))).not.toThrow();
        });
    });
});
