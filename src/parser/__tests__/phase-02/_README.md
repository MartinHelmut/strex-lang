## Phase 02

This is the second phase to implement the parser for _StrexLang_.

### Syntax goal

-   **Combined types** uses integer and float in one expression
-   **Braces** to change the precedence of expressions

### Test

Execute `npm test -- phase-02` to test this phase (including earlier phases).

### Examples

**Combined types:**

Integer and float numbers can be used together and always result in float numbers. Integer are only the result if all operands are integer.

```strex
2 + 4.2
```

```json
{
    "type": "Program",
    "body": [
        {
            "type": "BinaryExpression",
            "left": {
                "type": "IntegerLiteral",
                "value": "2 "
            },
            "right": {
                "type": "FloatLiteral",
                "value": "4.2"
            },
            "operator": "+"
        }
    ]
}
```

**Braces:**

Braces can be used in arithmetic to define precedence.

```strex
2.2 * (2 + 3.0) / 4
```

```json
{
    "type": "Program",
    "body": [
        {
            "type": "BinaryExpression",
            "left": {
                "type": "BinaryExpression",
                "left": {
                    "type": "FloatLiteral",
                    "value": "2.2 "
                },
                "right": {
                    "type": "BinaryExpression",
                    "left": {
                        "type": "IntegerLiteral",
                        "value": "2 "
                    },
                    "right": {
                        "type": "FloatLiteral",
                        "value": "3.0"
                    },
                    "operator": "+"
                },
                "operator": "*"
            },
            "right": {
                "type": "IntegerLiteral",
                "value": "4"
            },
            "operator": "/"
        }
    ]
}
```
