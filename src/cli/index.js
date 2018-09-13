/**
 * Please don't modify!
 *
 * This defines a small CLI tool to execute tests for StrexLang and to test your
 * implementation inside the REPL that can be spawned.
 *
 * REPL: https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop
 */
'use strict';

const commander = require('commander');
const pkg = require('../../package.json');

const test = require('./commands/test');
const execute = require('./commands/execute');
const repl = require('./commands/repl');

const print = console.log;

(async function cli() {
    commander
        .version(pkg.version, '-v, --version')
        .option('-x, --execute <input>', 'Execute a strex file')
        .option('-t, --test [phase]', 'Run tests for phases')
        .option('-e, --ensure', 'Execute with reference implementation')
        .parse(process.argv);

    try {
        if (commander.test) {
            return print(await test(commander));
        }

        if (commander.execute) {
            return print(await execute(commander));
        }

        return await repl(commander);
    } catch (exception) {
        console.error(exception.message);
        process.exit(1);
    }
})();
