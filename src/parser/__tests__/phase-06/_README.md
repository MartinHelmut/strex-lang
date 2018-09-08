## Phase 06

This is the sixth phase to implement the parser for _StrexLang_.

### Syntax goal

-   **if-expressions with "or"** e.g. `= 1 | > 2 ? + 2 : + 3`
-   **if-expressions with "and"** e.g. `< 4 & > 1 ? + 2 : + 3`
-   **if-expressions with "or" and "and"** e.g. `= 1 | > 2 & < 3 ? + 2 : + 3`

### Test

Execute `npm test -- phase-06` to test this phase (including earlier phases).

### Examples

**if-expressions with "or":**

```strex
= 1 | > 3 ? + 2 : / 3
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
                "right": undefined,
                "operator": "|"
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
                "operator": "/"
            }
        }
    ]
}
```

**if-expressions with "and":**

```strex
< 4 & > 1 ? * 3 : / 4
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
                    "type": "BooleanExpression",
                    "left": {
                        "type": "LastExpression"
                    },
                    "right": {
                        "type": "IntegerLiteral",
                        "value": "4 "
                    },
                    "operator": "<"
                },
                "right": undefined,
                "operator": "&"
            },
            "consequent": {
                "type": "BinaryExpression",
                "left": {
                    "type": "LastExpression"
                },
                "right": [
                    {
                        "type": "IntegerLiteral",
                        "value": "3 "
                    }
                ],
                "operator": "*"
            },
            "alternate": {
                "type": "BinaryExpression",
                "left": {
                    "type": "LastExpression"
                },
                "right": [
                    {
                        "type": "IntegerLiteral",
                        "value": "4"
                    }
                ],
                "operator": "/"
            }
        }
    ]
}
```

**if-expressions with "or" and "and":**

```strex
> 1 & < 4 | = 42 ? +1 : -1
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
                    "type": "BooleanExpression",
                    "left": {
                        "type": "BooleanExpression",
                        "left": {
                            "type": "LastExpression"
                        },
                        "right": {
                            "type": "IntegerLiteral",
                            "value": "1 "
                        },
                        "operator": ">"
                    },
                    "right": undefined,
                    "operator": "&"
                },
                "right": undefined,
                "operator": "|"
            },
            "consequent": {
                "type": "BinaryExpression",
                "left": {
                    "type": "LastExpression"
                },
                "right": [
                    {
                        "type": "IntegerLiteral",
                        "value": "1 "
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
                        "value": "1"
                    }
                ],
                "operator": "-"
            }
        }
    ]
}
```
