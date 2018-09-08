/**
 * Please don't modify!
 *
 * This is a mock file to test the tests and compiler.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const peg = require('pegjs');

const grammar = fs.readFileSync(
    path.resolve(__dirname, '../../strex-lang.peg'),
    { encoding: 'utf8' }
);
const parser = peg.generate(grammar);

module.exports = function(input) {
    try {
        return parser.parse(input);
    } catch (exception) {
        const {
            location: { start },
            message
        } = exception;

        throw new SyntaxError(
            `Line ${start.line}, column ${start.column}: ${message}`
        );
    }
};
