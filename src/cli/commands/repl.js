/**
 * Please don't modify!
 *
 * This implements a StrexLang REPL to immediately test your implementation.
 *
 * REPL: https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop
 */
'use strict';

const os = require('os');
const replServer = require('repl');
const compiler = require('../../compiler');

/**
 * The StrexLang REPL (Read–eval–print loop).
 *
 * @param {Object} commander Commander.js cli result object
 * @return {Promise<void>} Resolves to the evaluated expression.
 */
module.exports = async function repl({ ensure }) {
    let lines = [];

    return new Promise((resolve, reject) => {
        const server = replServer.start({
            eval: line => {
                try {
                    if (line === os.EOL) {
                        const result = compiler(lines.join(''), ensure);
                        lines = [];
                        console.log(result);
                    }

                    lines.push(line);
                } catch (exception) {
                    reject(exception);
                }
            },
            writer: output => output
        });

        server.on('exit', resolve);
    });
};
