/**
 * Please don't modify!
 *
 * This file is a small helper to execute tests in phases. It either executes
 * all tests or takes the given phase and executes all phases that came before
 * as well. So if `phase-02` is given it will execute `phase-01,phase-02`.
 */
"use strict";

const path = require("path");
const jest = require("jest");

/**
 * Create an array of phases as range to target phase
 *
 * @param {number} toPhase Phase to generate range to
 * @return {string[]} Phase range
 */
function createPhaseRange(toPhase) {
  return Array(toPhase)
    .fill("")
    .map((_, index) => `phase-${String(index + 1).padStart(2, "0")}`);
}

/**
 * Run all test or only specific phases
 *
 * @param {Object} commander Commander.js cli result object
 * @return {Promise<void>}
 */
module.exports = async function test({ test, ensure }) {
  const jestArgs = [];

  if (typeof test === "string") {
    const arg =
      test === "compiler"
        ? test
        : createPhaseRange(parseInt(test.split("-")[1], 10)).join("|");
    jestArgs.push(arg);
  }

  // Use reference implementation
  if (ensure) {
    const setupTestsFilePath = path.resolve(
      __dirname,
      "../../parser/__mocks__/setup.js"
    );

    jestArgs.push(`--setupTestFrameworkScriptFile=${setupTestsFilePath}`);

    process.env.STREX_LANG_ENSURE = "1";
  }

  return jest.run(jestArgs);
};
