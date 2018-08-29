/* eslint-disable max-len */
const parser = require('../../parser');

describe('parser > base', () => {
    describe('body', () => {
        test('creates an empty body if input is missing', () => {
            const code = ``;
            const ast = parser(code);
            const expected = {
                body: [],
            };

            expect(ast).toEqual(expected);
        });
    });

    describe('print out', () => {
        test('creates a print out statement on empty line', () => {
            const code = `\n`;
            const ast = parser(code);
            const expected = {
                body: [
                    {type: 'PrintOut'},
                ],
            };

            expect(ast).toEqual(expected);
        });

        test('creates one print out statement on multiple empty line', () => {
            const code = `\n\n`;
            const ast = parser(code);
            const expected = {
                body: [
                    {type: 'PrintOut'},
                ],
            };

            expect(ast).toEqual(expected);
        });
    });
});
