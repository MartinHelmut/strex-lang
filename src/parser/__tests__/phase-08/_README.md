## Phase 08

This is the eighth phase to implement the parser for *StrexLang*.

**Important:** To make your life easier, here is the point where your current parser can be reworked to use a tokenizer. The tokenizer should be separated by the parser in `src/parser/tokenizer.js`.

### Syntax goal

* **Human readable error messages**

### Test

Execute `npm test -- phase-08` to test this phase (including earlier phases).

### Examples

All error messages get a human readable form e.g.:

```strex
= 1 ? 4 :
```

```md
Line 1, column 1: Missing alternate for if-expression
```
