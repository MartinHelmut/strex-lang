# StrexLang

The _StrexLang_ ("Strange expression language") is only used to train regular expressions and parser design for JavaScript in a hopefully not so boring way 😎.

## Contents

* [Goal](#goal)
* [Language](#language)
  * [Example](#example)
  * [Features](#features)
  * [AST](#ast)
* [How to start](#how-to-start)
  * [Installation](#installation)
  * [Start development](#start-development)
  * [Phases](#phases)

* * *

## Goal

Goal of this task is to create an [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) in JavaScript that can be serialized. Also to get to know regular expressions in combination with `.replace` (and what ever fits your needs as well). To get into it step by step you should start with regular expressions and can rewrite it later with a tokenizer.

To test regular expressions https://regex101.com/ can be used (in JavaScript mode). Later on ([phase 8](#phases)) the regular expressions are replaced with a [tokenizer](https://en.wikipedia.org/wiki/Lexical_analysis#Tokenization) for a process called "lexical analysis" to give more control over the parser.

## Language

### Example

_StrexLang_ is a very small language without any functions. It contains of expressions and returns the last evaluated expression. Here is an example how it works:

```strex
// This is a comment
4 + 3
= 7 ? + 5 : - 4
- 2
```

**What it does, line by line:**

1. This is just a comment and will be ignored for the AST
2. Calculate `4 + 3`, this is `7`
3. Use the last evaluated expression `7` and check if it equals `7`, if so add `5`, if not calculate minus `4`
4. Use the last evaluated expression and calculate minus `2`
5. Empty line: print this statement to console

### Features

#### Types

-   **Signed and unsigned integer** (e.g. `-3`, `0`, `23`)
    -   Can be used as literal
-   **Signed and unsigned float** (e.g. `-3.2`, `0.1`, `23.9`)
    -   Can be used as literal
-   **Implicit boolean** (`true` and `false`)
    -   Can not be used as literal
    -   Is only be used for compare results in `if`-statements

#### Operator

-   `+` - Math operator for addition (works with Integer and Float)
-   `-` - Math operator for subtraction (works with Integer and Float)
-   `*` - Math operator for multiplication (works with Integer and Float)
-   `/` - Math operator for division (works with Integer and Float)
-   `|` - "Or" (alternate/pipe) operator (works with implicit boolean)
-   `&` - "And" (consequent) operator (works with implicit boolean)
-   `=` - Equals operator (works with Integer and Float to compare value)
-   `>` - Greater-than operator (works with Integer and Float to compare value)
-   `<` - Less-than operator (works with Integer and Float to compare value)

#### Calculation

Only base arithmetic is used: `+ - * /` with integer values.

#### if-expression

**Defined as:** `<compare-operator> <boolean-expression> ? <expression> : <expression>`

If-expression start with a compare operator `=`, `>` or `<` and sets the if case with `?` and the else with `:` to compare against an expression. It uses the last evaluated expression for the comparison. The first expression after `?` is the true case and works with the last evaluated expression. The `:` indicates the else case and gets also the last expression to work with if the if-case is false.

Example for true case:

```strex
5
= 5 ? + 3 : - 3 // Last expression is 5, therefore true, calculate `5 + 3`.
```

Example for false case:

```strex
4
= 5 ? + 3 : - 3 // Last expression is 4, therefore false, calculate `4 - 3`.
```

If-expressions can use any expression to compare and can also be combined with the pipe-operator (or) `|` and the "and" operator `&`. E.g.:

```strex
// Or
4
> 2 + 1 | < 4 ? + 1 : - 1 // Result is 5
```

```strex
// And
4
< 5 & > 1 ? + 1 : - 1 // Result is 5
```

It is also possible to omit the "else" case, therefore `LastExpression` will be used implicit as else:

```strex
= 0 ? + 1
```

### AST

Like mentioned the goal is to produce an abstract syntax tree with the `parser` function provided by `src/parser/index.js`. Taking the example provided earlier:

```strex
// This is a comment
4 + 3
= 7 ? + 5 : - 4
- 2
```

the resulting AST would look like the following (defined as JSON):

```json
{
    "body": [
        {
            "type": "BinaryExpression",
            "left": {
                "type": "IntegerLiteral",
                "value": "4"
            },
            "right": {
                "type": "IntegerLiteral",
                "value": "3"
            },
            "operator": "+"
        },
        {
            "type": "IfExpression",
            "test": {
                "type": "BooleanExpression",
                "left": {
                    "type": "LastExpression"
                },
                "right": {
                    "type": "IntegerLiteral",
                    "value": "7"
                },
                "operator": "="
            },
            "consequent": {
                "type": "BinaryExpression",
                "left": {
                    "type": "LastExpression"
                },
                "right": {
                    "type": "IntegerLiteral",
                    "value": "5"
                },
                "operator": "+"
            },
            "alternate": {
                "type": "BinaryExpression",
                "left": {
                    "type": "LastExpression"
                },
                "right": {
                    "type": "IntegerLiteral",
                    "value": "4"
                },
                "operator": "-"
            }
        },
        {
            "type": "BinaryExpression",
            "left": {
                "type": "LastExpression"
            },
            "right": {
                "type": "IntegerLiteral",
                "value": "2"
            },
            "operator": "-"
        },
        {
            "type": "PrintOut"
        }
    ]
}
```

Step by step the AST is defined as follows. It starts with the actual program body without any comments:

```json
{
    "body": []
}
```

The `body` array contains any defined statement and expression of the program line by line. Where the first is the definition for an expression:

```json
{
    "type": "BinaryExpression",
    "left": {
        "type": "IntegerLiteral",
        "value": "4"
    },
    "right": {
        "type": "IntegerLiteral",
        "value": "3"
    },
    "operator": "+"
}
```

Values can be right or left hand defined to the operator. Like seen above, the AST does not represent any evaluation. It only defines the source code in a different, standardized, format. The following if-expression is a bit more complex, but let's break it down:

```json
{
    "type": "IfExpression",
    "test": {
        "type": "BooleanExpression",
        "left": {
            "type": "LastExpression"
        },
        "right": {
            "type": "IntegerLiteral",
            "value": "7"
        },
        "operator": "="
    },
    "consequent": {...},
    "alternate": {...}
}
```

The if-expression contains a test to determine if the result is `true` ("consequent") or `false` ("alternate"). The test itself is an boolean expression, but this time the left hand operation is the `LastExpression`. The "consequent" is an expression again:

```json
{
    "type": "IfExpression",
    "test": {...},
    "consequent": {
        "type": "BinaryExpression",
        "left": {
            "type": "LastExpression"
        },
        "right": {
            "type": "IntegerLiteral",
            "value": "5"
        },
        "operator": "+"
    },
    "alternate": {...}
}
```

That would use the last expression as a left hand operation and an integer value as right hand. Alternate works the same that the last expression is used as left hand operation. If no "alternate" is provided `LastExpression` is used.

The next line uses the last expression as left hand to assign the operator `-` with the integer literal `2`:

```json
{
    "type": "BinaryExpression",
    "left": {
        "type": "LastExpression"
    },
    "right": {
        "type": "IntegerLiteral",
        "value": "2"
    },
    "operator": "-"
}
```

The last statement is the "empty line" that results in a print out to the stdout:

```json
{
    "type": "PrintOut"
}
```

**Important:** If no `LastExpression` is defined, the integer value `0` will be used.

## How to start

### Installation

Clone this repository locally:

```shell
git clone git@github.com:MartinHelmut/strex-lang.git && cd strex-lang
```

After this install the necessary NPM dependencies:

```shell
npm i
```

### Start development

Open the file `src/parser/index.js` in your favorite code editor and read the comments included that will provide further guidance.

To test your progress you can execute `npm test` and see how many green you get 🚀. All tests for the parser separated by the phases can be found in the folder `src/parser/__tests__`. This can also provide further documentation.

### Phases

Development can be done in phases to get step by step to a more and more sophisticated language.

1. [Basic language](src/parser/__tests__/phase-01/_README.md)
2. [Advanced types and calculations](src/parser/__tests__/phase-02/_README.md)
3. [Error handling](src/parser/__tests__/phase-03/_README.md)
4. [If expressions](src/parser/__tests__/phase-04/_README.md)
5. [Nested if expressions](src/parser/__tests__/phase-05/_README.md)
6. ["And" and "or" if expressions](src/parser/__tests__/phase-06/_README.md)
7. [Error messages for if expressions](src/parser/__tests__/phase-07/_README.md)
8. [Human readable error messages](src/parser/__tests__/phase-08/_README.md)

Phases can also be tested with `npm test -- phase-01` for the first phase. If a later phase is tested all phases before are executed as well to ensure nothing broke. **Note:** running `npm test` will execute not only all phases but the compiler tests as well.
