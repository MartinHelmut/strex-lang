## Phase 07

This is the seventh phase to implement the parser for _StrexLang_.

### Syntax goal

-   **Error messages for if-expressions**

### Test

Execute `npm test -- phase-07` to test this phase (including earlier phases).

### Examples

**Missing test throws error:**

```strex
? + 2 : - 3
```

**Missing consequent throws error:**

```strex
= 1 ? : - 3
```

**Missing alternate throws error:**

```strex
= 1 ? + 2 :
```

Important for the "alternate" case is that if written like `= 1 ? + 2` the alternate case is implicit the last expression.
