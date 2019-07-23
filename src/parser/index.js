/**
 * Modify me!
 */
"use strict";

/**
 * This file defines the parser and should be modified to produce an AST, like
 * mentioned in the README.md and covered by the tests provided. These tests
 * can be executed with `npm test`.
 *
 * To execute a single phase run `npm test -- phase-01`. The implementation
 * should be done phase by phase. Every phase provides a readme with further
 * guidance, e.g. for phase one under `src/parser/__tests__/phase-01/README.md`
 */

/**
 * Parse StrexLang
 *
 * @param {String} input A string of StrexLang statements and expressions
 * @return {Object} AST in a JSON serializable format
 */
module.exports = function parser(input) {
  const body = [];

  // Do what you have to do with `input` to generate the AST. Try to use the
  // string function `.replace` with a regular expression, split the string
  // or if you want to you can try to create a tokenizer.
  // START HERE ...

  return {
    type: "Program",
    body
  };
};
