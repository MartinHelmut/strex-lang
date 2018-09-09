## Phase 03

This is the third phase to implement the parser for _StrexLang_.

### Syntax goal

-   **Error handling** for integer and float expressions

### Test

Execute `npm test -- phase-03` to test this phase (including earlier phases).

### Examples

**Error handling:**

All of the following example will throw a syntax error:

```strex
2.1 + 6 -
```

```strex
1.1 + + 2
```

```strex
3.3** 1
```

```strex
3.6 / / 6
```
