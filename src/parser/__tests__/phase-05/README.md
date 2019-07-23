## Phase 05

This is the fifth phase to implement the parser for _StrexLang_.

### Syntax goal

- **sub if-expressions** e.g. `> 1 ? = 2 ? -2 : -3 : - 6`

### Test

Execute `npm test -- phase-05` to test this phase (including earlier phases).

### Examples

**sub if-expressions:**

Now both expression for the true- and false-case can be if-expressions itself.

```strex
> 1 ? = 2 ? -2 : -3 : - 6
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
        "operator": ">"
      },
      "consequent": {
        "type": "IfExpression",
        "test": {
          "type": "BooleanExpression",
          "left": {
            "type": "LastExpression"
          },
          "right": {
            "type": "IntegerLiteral",
            "value": "2 "
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
          "operator": "-"
        },
        "alternate": {
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
          "operator": "-"
        }
      },
      "alternate": {
        "type": "BinaryExpression",
        "left": {
          "type": "LastExpression"
        },
        "right": [
          {
            "type": "IntegerLiteral",
            "value": "6"
          }
        ],
        "operator": "-"
      }
    }
  ]
}
```
