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

Integers are whole numbers (without fraction) and can contain leading zeros.

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

Floats are fractional numbers and can contain leading zeros.

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

Arithmetic works as expected, multiplication and division operators have precedence over the addition and subtraction operators.

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

A print out statement is an empty line and indicates that the last evaluated expression should be written to _stdout_.

```strex
42
\n
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
