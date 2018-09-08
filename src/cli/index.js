/**
 * Please don't modify!
 *
 * This defines a small CLI tool to execute tests for StrexLang and to test your
 * implementation inside the REPL that can be spawned.
 *
 * REPL: https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop
 */
'use strict';

const repl = require('./repl');
const tests = require('./tests');

(async function() {
    const [command, ...args] = process.argv.slice(2);

    switch (command) {
        case '--run-tests':
            await tests(args);
            break;
        default:
            await repl();
    }

    process.exit(0);
})();
