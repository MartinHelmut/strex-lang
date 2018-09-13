/**
 * Please don't modify!
 *
 * This command is to execute strex files. The result will be written to the
 * standard output.
 */
'use strict';

const { promisify } = require('util');
const fs = require('fs');

const compiler = require('../../compiler');

const statAsync = promisify(fs.stat);
const readFileAsync = promisify(fs.readFile);

/**
 * Execute a strex file and write the result to stdout.
 *
 * @param {Object} commander Commander.js cli result object
 * @return {Promise<string>}
 */
module.exports = async function execute({ execute, ensure }) {
    if (await statAsync(execute)) {
        const fileContent = await readFileAsync(execute);
        return compiler(fileContent, ensure);
    }
};
