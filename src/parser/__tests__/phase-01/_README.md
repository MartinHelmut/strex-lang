## Phase 01

This is the first phase to implement the parser for _StrexLang_.

### Syntax goal

-   **Integer** e.g. `4`, `-4580`
-   **Float** e.g. `9.0`, `-6.83654`, `0235.5678`
-   **Basic arithmetic** with `+`, `-`, `*` and `/`
-   **Print out** on empty line
-   Whitespace is optional
-   Multiplication and division operators have precedence over the addition and subtraction operators

### Test

Execute `npm test -- phase-01` to test this phase.

### Examples

**Integer:**

```strex
42
```

Results in the following AST:

```json
{
    "type": "Program",
    "body": [
        {
            "type": "IntegerLiteral",
            "value": "42"
        }
    ]
}
```

**Float:**

```strex
00034.29786
```

Results in the following AST:

```json
{
    "type": "Program",
    "body": [
        {
            "type": "FloatLiteral",
            "value": "00034.29786"
        }
    ]
}
```

**Basic arithmetic:**

```strex
1 + 2
```

Results in the following AST:

```json
{
    "type": "Program",
    "body": [
        {
            "type": "BinaryExpression",
            "left": {
                "type": "IntegerLiteral",
                "value": "1 "
            },
            "right": {
                "type": "IntegerLiteral",
                "value": "2"
            },
            "operator": "+"
        }
    ]
}
```

Complex example with precedence:

```strex
1 + 2 * 3
```

```json
{
    "type": "Program",
    "body": [
        {
            "type": "BinaryExpression",
            "left": {
                "type": "IntegerLiteral",
                "value": "1 "
            },
            "right": {
                "type": "BinaryExpression",
                "left": {
                    "type": "IntegerLiteral",
                    "value": "2 "
                },
                "right": {
                    "type": "IntegerLiteral",
                    "value": "3"
                },
                "operator": "*"
            },
            "operator": "+"
        }
    ]
}
```

**Print out:**

```strex
42
```

Results in the following AST:

```json
{
    "type": "Program",
    "body": [
        {
            "type": "IntegerLiteral",
            "value": "42"
        },
        {
            "type": "PrintOut",
            "value": {
                "type": "LastExpression"
            }
        }
    ]
}
```
