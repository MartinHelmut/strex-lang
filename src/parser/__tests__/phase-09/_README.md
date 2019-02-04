## Phase 09

This is the ninth phase to implement the parser for _StrexLang_.

### Syntax goal

- **Last expression** syntax
- **Multi line**

### Test

Execute `npm test -- phase-09` to test this phase (including earlier phases).

### Examples

**Last expression:**

The "last expression" is the value evaluated the line before. If no last expression is given it is implicit `0`. In the following example line 2 refers to the last expression (and would be `4 + 3` is `7`, `7` is the last expression, therefore `7 - 2` results in `5` for a print out).

```strex
4 + 3
- 2
```

```json
{
  "type": "Program",
  "body": [
    {
      "type": "BinaryExpression",
      "left": {
        "type": "IntegerLiteral",
        "value": "4"
      },
      "right": {
        "type": "IntegerLiteral",
        "value": "3"
      },
      "operator": "+"
    },
    {
      "type": "BinaryExpression",
      "left": {
        "type": "LastExpression"
      },
      "right": {
        "type": "IntegerLiteral",
        "value": "2"
      },
      "operator": "-"
    }
  ]
}
```

**Multi line:**

As many lines as needed can be used to write StrexLang expressions. By referencing the "last expression" evaluations can be combined.

```strex
4 + 3
= 7 ? - 2
* 3
```

```json
{
  "type": "Program",
  "body": [
    {
      "type": "BinaryExpression",
      "left": {
        "type": "IntegerLiteral",
        "value": "4"
      },
      "right": {
        "type": "IntegerLiteral",
        "value": "3"
      },
      "operator": "+"
    },
    {
      "type": "IfExpression",
      "test": {
        "type": "BooleanExpression",
        "left": {
          "type": "LastExpression"
        },
        "right": {
          "type": "IntegerLiteral",
          "value": "7"
        },
        "operator": "="
      },
      "consequent": {
        "type": "BinaryExpression",
        "left": {
          "type": "LastExpression"
        },
        "right": {
          "type": "IntegerLiteral",
          "value": "2"
        },
        "operator": "-"
      },
      "alternate": {
        "type": "LastExpression"
      }
    },
    {
      "type": "BinaryExpression",
      "left": {
        "type": "LastExpression"
      },
      "right": {
        "type": "IntegerLiteral",
        "value": "3"
      },
      "operator": "*"
    }
  ]
}
```
