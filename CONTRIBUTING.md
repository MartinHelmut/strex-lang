# Contributing

You want do something for this repo? Nice! And of course: you are the best!

## Issues

### General

If you report a bug, please try to:

- Perform a web / GitHub search to avoid creating a duplicate ticket.
- Include enough information to reproduce the problem.
- Mention the exact version of the project causing you problems, as well as any related software and versions (such as operating system, browser, etc.).
- Test against the latest version of the project (and if possible also the master branch) to see if the problem has already been fixed.

Once you have tried the above, create a GitHub issue notifying your bug report.

## Working in the code

If you want to contribute code, please:

- Write [good commit messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html), explain what your patch does, and why it is needed. How to is described in the [Commit changes chapter](#commit-changes).
- Keep it simple: Any patch that changes a lot of code or is difficult to understand should be discussed before you put in the effort.

Once you have tried the above, create a GitHub pull request with your changes changes and feel awesome 🎉.

### Environment

Tested with Node 10 and NPM 6 and up.

### Setup

Clone the repo and run an install:

```shell script
git clone git@github.com:MartinHelmut/strex-lang.git && cd strex-lang && npm i
```

### Tests

Tests are written in [Jest][jturl]. To run all tests execute

```shell script
npm test
```

and to lint all the code:

```shell script
npm run lint
```

If you want to ensure that the tests and compiler work against a reference implementation, you can execute:

```shell script
npm test -- --ensure
```

### Commit changes

**This repo is is Commitizen-friendly!** ([read more][czcli])

Checkout a new branch, e.g.:

```shell script
git checkout -b do-something
```

**There is no specific naming convention for branches.**

Add your changes with a proper and commitizen friendly message. Create a "Pull Request" on Github and be awesome! 😎

## Be Nice

Please follow the defined [code of conduct](CODE_OF_CONDUCT.md).

[czcli]: http://commitizen.github.io/cz-cli/
[svurl]: https://github.com/conventional-changelog/standard-version
[jturl]: https://facebook.github.io/jest/
