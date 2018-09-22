/**
 * Please don't modify!
 *
 * This is the compiler that will evaluate your progress to ensure the resulting
 * AST can also produce real values. Also this enables you to directly test your
 * implementation by producing a value rather an AST.
 */
'use strict';

const Decimal = require('decimal.js');

const TYPE = {
    PROGRAM: 'Program',
    PRINT_OUT: 'PrintOut',
    INTEGER_LITERAL: 'IntegerLiteral',
    FLOAT_LITERAL: 'FloatLiteral',
    BINARY_EXPRESSION: 'BinaryExpression',
    BOOLEAN_EXPRESSION: 'BooleanExpression',
    LAST_EXPRESSION: 'LastExpression',
    IF_EXPRESSION: 'IfExpression'
};

const BOOLEAN_OPERATOR = {
    AND: '&',
    OR: '|'
};

/**
 * Get the decimal.js operation name by operator
 *
 * @param {string} operator
 * @return {string}
 */
function getOperationName(operator) {
    const METHOD_MAPPING = {
        '+': 'plus',
        '-': 'minus',
        '*': 'times',
        '/': 'dividedBy',
        '=': 'equals',
        '>': 'greaterThan',
        '<': 'lessThan'
    };

    return METHOD_MAPPING[operator];
}

/**
 * Evaluate "and" for boolean expression
 *
 * @param {Decimal} evaluation
 * @param {Object} test
 * @param {index} index
 * @return {boolean}
 */
function evaluateAndExpression(evaluation, test, index) {
    const { left, right } = test;
    const leftExpression = evaluateBooleanExpression(evaluation, left, index);
    const rightExpression = evaluateBooleanExpression(evaluation, right, index);

    return Boolean(leftExpression && rightExpression);
}

/**
 * Evaluate "or" for boolean expression
 *
 * @param {Decimal} evaluation
 * @param {Object} test
 * @param {index} index
 * @return {boolean}
 */
function evaluateOrExpression(evaluation, test, index) {
    const { left, right } = test;
    const leftExpression = evaluateBooleanExpression(evaluation, left, index);

    return (
        leftExpression || evaluateBooleanExpression(evaluation, right, index)
    );
}

/**
 * Determine implicit boolean
 *
 * @param {Decimal} evaluation
 * @param {Object} test
 * @param {index} index
 * @return {boolean}
 */
function evaluateBooleanExpression(evaluation, test, index) {
    const lineNumber = index + 1;
    const { type, left, right, operator } = test;

    if (type !== TYPE.BOOLEAN_EXPRESSION) {
        throw new SyntaxError(
            `Please use a boolean expression for tests in line ${lineNumber}`
        );
    }

    switch (operator) {
        case BOOLEAN_OPERATOR.AND:
            return evaluateAndExpression(evaluation, test, index);
        case BOOLEAN_OPERATOR.OR:
            return evaluateOrExpression(evaluation, test, index);
        default:
            const leftExpression = evaluateExpression(evaluation, left, index);
            const rightExpression = evaluateExpression(
                evaluation,
                right,
                index
            );
            const method = getOperationName(operator);

            return leftExpression[method](rightExpression);
    }
}

/**
 * Evaluate a given expression
 *
 * @param {Decimal} evaluation
 * @param {Object} line
 * @param {index} index
 * @return {Decimal}
 */
function evaluateExpression(evaluation, line, index) {
    switch (line.type) {
        case TYPE.INTEGER_LITERAL:
        case TYPE.FLOAT_LITERAL:
            return new Decimal(line.value);
        case TYPE.LAST_EXPRESSION:
        case TYPE.PRINT_OUT:
            return evaluation;
        case TYPE.BINARY_EXPRESSION:
            const { left, right, operator } = line;
            const leftExpression = evaluateExpression(evaluation, left, index);
            const rightExpression = evaluateExpression(
                evaluation,
                right,
                index
            );
            const method = getOperationName(operator);

            return leftExpression[method](rightExpression);
        case TYPE.IF_EXPRESSION:
            const { test, consequent, alternate } = line;

            return evaluateBooleanExpression(evaluation, test, index)
                ? evaluateExpression(evaluation, consequent, index)
                : evaluateExpression(evaluation, alternate, index);
        default:
            return evaluation;
    }
}

/**
 *
 * @param {string} input Strex syntax as string
 * @param {boolean} ensure Run against reference implementation
 * @return {string} Evaluated expression
 */
module.exports = function compiler(input, ensure = false) {
    const parser = ensure
        ? require('../parser/__mocks__')
        : require('../parser');
    const ast = parser(input);

    if (ast.type !== TYPE.PROGRAM) {
        throw new TypeError('Invalid input generated by parser.');
    }

    return ast.body.reduce(evaluateExpression, new Decimal('0')).toFixed();
};
