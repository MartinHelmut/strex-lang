/**
 * Please don't modify!
 *
 * This file is a small helper to execute tests in phases. It either executes
 * all tests or takes the given phase and executes all phases that came before
 * as well. So if `phase-02` is given it will execute `phase-01,phase-02`.
 */
'use strict';

const path = require('path');
const jest = require('jest');

module.exports = async function([arg = '', command] = []) {
    let args = [];

    if (arg.startsWith('phase-')) {
        const phase = parseInt(arg.split('-')[1], 10);

        args.push(
            Array(phase)
                .fill('')
                .map(
                    (_, index) => `phase-${String(index + 1).padStart(2, '0')}`
                )
                .join('|')
        );
    }

    // Ensure implementation against PEG implementation
    if (command === '--ensure' || arg === '--ensure') {
        const setupTestsFilePath = path.resolve(
            __dirname,
            '../parser/__mocks__/setup.js'
        );

        args.push(`--setupTestFrameworkScriptFile=${setupTestsFilePath}`);
    }

    return jest.run(args);
};
