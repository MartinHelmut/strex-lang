# StrexLang

[![Build Status](https://circleci.com/gh/MartinHelmut/strex-lang/tree/main.svg?style=shield)](https://circleci.com/gh/MartinHelmut/strex-lang/tree/main)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

_StrexLang_ ("Strange expression language") is used to train regular expressions in JavaScript. Also a bit of parser design in a hopefully not so boring way. It is a project where a mentor and trainee can work together in a predefined environment.

## Contents

- [Goal](#goal)
- [Language](#language)
- [How to start](#how-to-start)
  - [Installation](#installation)
  - [Start development](#start-development)
  - [Phases](#phases)

---

## Goal

The Goal is to create an [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) in JavaScript that can be serialized. Also to get to know regular expressions in combination with `.replace` (and what ever fits your needs as well). To get into it you should start with regular expressions that you can rewrite later with a tokenizer.

To test regular expressions the website https://regex101.com/ can be used (in JavaScript mode). Later on ([phase 8](#phases)) the regular expressions are replaced with a [tokenizer](https://en.wikipedia.org/wiki/Lexical_analysis#Tokenization) for a process called "lexical analysis" to give more control over the parser.

## Language

An overview of the _StrexLang_ can be found in [docs/language.md](docs/language.md).

## How to start

### Installation

Clone this repository locally:

```bash
git clone git@github.com:MartinHelmut/strex-lang.git && cd strex-lang
```

or even better fork this repository. This also makes it easier to update your repository later.

After this install the necessary NPM dependencies:

```bash
npm i
```

**Note:** If you forked this repository to implement your parser, it would be lovely if you send a PR to add it to the [list of possible implementations](docs/implementations.md) 🎉

### Start development

Open the file `src/parser/index.js` in your favorite code editor and read the comments included for further guidance.

To test your progress you can execute `npm test` and see how many green you get 🚀. All tests for the parser, separated by the phases, can be found in the folder `src/parser/__tests__`. Tests can also provide further documentation.

### Phases

Development can be done in phases to get step by step to a more sophisticated language.

1. [Basic language](src/parser/__tests__/phase-01/README.md)
2. [Advanced types and calculations](src/parser/__tests__/phase-02/README.md)
3. [Error handling](src/parser/__tests__/phase-03/README.md)
4. [If expressions](src/parser/__tests__/phase-04/README.md)
5. [Nested if expressions](src/parser/__tests__/phase-05/README.md)
6. ["And" and "or" if expressions](src/parser/__tests__/phase-06/README.md)
7. [Error messages for if expressions](src/parser/__tests__/phase-07/README.md)
8. [Human readable error messages](src/parser/__tests__/phase-08/README.md)
9. [Multi line expressions](src/parser/__tests__/phase-09/README.md)

Phases can also be tested running `npm test -- phase-01` (for the first phase). If a later phase is tested all phases before are executed as well to ensure nothing broke.

**Note:** running `npm test` will execute not only all phases but the compiler tests as well. If you only want to execute compiler tests you can run `npm test -- compiler`.
