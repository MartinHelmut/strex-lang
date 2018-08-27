'use strict';

/**
 * Create an AST body
 *
 * @param {Object[]} body
 * @return {Object}
 */
function createAstBody(body = []) {
    return {body};
}

/**
 * Create an AST expression
 *
 * @param {Object} left
 * @param {Object} right
 * @param {String} operator
 * @return {Object}
 */
function createAstExpression(left, right, operator) {
    return {
        type: 'Expression',
        left, right, operator,
    };
}

/**
 * Create an AST integer literal
 *
 * @param {String} value
 * @return {Object}
 */
function createAstIntegerLiteral(value) {
    return {
        type: 'IntegerLiteral',
        value,
    };
}

/**
 * Create an AST last expression statement
 *
 * @return {Object}
 */
function createAstLastExpression() {
    return {type: 'LastExpression'};
}

/**
 * Create an AST print out statement
 *
 * @return {Object}
 */
function createAstPrintOut() {
    return {type: 'PrintOut'};
}

/**
 * Create an AST if-statement
 *
 * @param {Object} test
 * @param {Object} consequent
 * @param {Object} alternate
 * @return {Object}
 */
function createAstIfStatement(test, consequent, alternate) {
    return {
        type: 'IfStatement',
        test, consequent, alternate,
    };
}

module.exports = {
    createAstBody,
    createAstExpression,
    createAstIntegerLiteral,
    createAstLastExpression,
    createAstPrintOut,
    createAstIfStatement,
};
