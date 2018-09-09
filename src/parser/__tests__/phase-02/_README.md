## Phase 02

This is the second phase to implement the parser for *StrexLang*.

### Syntax goal

* **Combined types** uses integer and float in one expression
* **Braces** to change the precedence of expressions

### Test

Execute `npm test -- phase-02` to test this phase (including earlier phases).

### Examples

**Combined types:**

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
