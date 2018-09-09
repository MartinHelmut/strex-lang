## Phase 04

This is the fourth phase to implement the parser for _StrexLang_.

### Syntax goal

-   **Basic if-expressions** e.g. `= 1 ? + 2 : + 3`

### Test

Execute `npm test -- phase-04` to test this phase (including earlier phases).

### Examples

**Basic if-expressions:**

If-expressions could be defined as: `<boolean-expression> ? <expression> : <expression>` where a boolean expression starts with a compare operator (`=`, `>` and `<`) that references the last expression and compares this to and binary expression or last expression. If-expressions itself are not allowed as boolean expressions.

The expression after `?` is the true-case, after `:` the false-case and both can be any expression.

```strex
= 1 ? + 2 : + 3
```

```json
{
    "type": "Program",
    "body": [
        {
            "type": "IfExpression",
            "test": {
                "type": "BooleanExpression",
                "left": {
                    "type": "LastExpression"
                },
                "right": {
                    "type": "IntegerLiteral",
                    "value": "1 "
                },
                "operator": "="
            },
            "consequent": {
                "type": "BinaryExpression",
                "left": {
                    "type": "LastExpression"
                },
                "right": [
                    {
                        "type": "IntegerLiteral",
                        "value": "2 "
                    }
                ],
                "operator": "+"
            },
            "alternate": {
                "type": "BinaryExpression",
                "left": {
                    "type": "LastExpression"
                },
                "right": [
                    {
                        "type": "IntegerLiteral",
                        "value": "3"
                    }
                ],
                "operator": "+"
            }
        }
    ]
}
```
