/* eslint-disable max-len */
const parser = require('../../index');

describe('parser > base > multiline', () => {
    describe('with arithmetic', () => {
        test('creates integer expressions with + operator', () => {
            const code = '1 + 2\n+3\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '1'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '2'
                        },
                        operator: '+'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '3'
                        },
                        operator: '+'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates integer expressions with + operator without whitespace', () => {
            const code = '1+2\n+3\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '1'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '2'
                        },
                        operator: '+'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '3'
                        },
                        operator: '+'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates integer expressions with - operator', () => {
            const code = '5 - 3\n- 1\n- 1\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '5'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '3'
                        },
                        operator: '-'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '1'
                        },
                        operator: '-'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '1'
                        },
                        operator: '-'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates integer expressions with - operator without whitespace', () => {
            const code = '5-3\n-1\n-1\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '5'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '3'
                        },
                        operator: '-'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '1'
                        },
                        operator: '-'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '1'
                        },
                        operator: '-'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates integer expressions with * operator', () => {
            const code = '42\n* 5\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'IntegerLiteral',
                        value: '42'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '5'
                        },
                        operator: '*'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates integer expressions with * operator without whitespace', () => {
            const code = '42\n*5\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'IntegerLiteral',
                        value: '42'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '5'
                        },
                        operator: '*'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates integer expressions with / operator', () => {
            const code = '36 / 6\n/ 3\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '36'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '6'
                        },
                        operator: '/'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '3'
                        },
                        operator: '/'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates integer expressions with / operator without whitespace', () => {
            const code = '36/6\n/3\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '36'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '6'
                        },
                        operator: '/'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '3'
                        },
                        operator: '/'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates integer expressions with mixed operators', () => {
            const code = '1 + 2\n- 5\n* 10\n/ 2\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '1'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '2'
                        },
                        operator: '+'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '5'
                        },
                        operator: '-'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '10'
                        },
                        operator: '*'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '2'
                        },
                        operator: '/'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates integer expressions with mixed operators without whitespace', () => {
            const code = '1+2\n-5\n*10\n/2\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '1'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '2'
                        },
                        operator: '+'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '5'
                        },
                        operator: '-'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '10'
                        },
                        operator: '*'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '2'
                        },
                        operator: '/'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates float expressions with + operator', () => {
            const code = '1.2 + 44.01\n+ 5.0\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '1.2'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '44.01'
                        },
                        operator: '+'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '5.0'
                        },
                        operator: '+'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates float expressions with + operator without whitespace', () => {
            const code = '1.2+44.01\n+5.0\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '1.2'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '44.01'
                        },
                        operator: '+'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '5.0'
                        },
                        operator: '+'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates float expressions with - operator', () => {
            const code = '10.5 - 0.5\n- 4.10\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '10.5'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '0.5'
                        },
                        operator: '-'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '4.10'
                        },
                        operator: '-'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates float expressions with - operator without whitespace', () => {
            const code = '10.5-0.5\n-4.10\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '10.5'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '0.5'
                        },
                        operator: '-'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '4.10'
                        },
                        operator: '-'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates float expressions with * operator', () => {
            const code = '0.5 * 1.5\n* 4.0\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '0.5'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '1.5'
                        },
                        operator: '*'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '4.0'
                        },
                        operator: '*'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates float expressions with * operator without whitespace', () => {
            const code = '0.5*1.5\n*4.0\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '0.5'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '1.5'
                        },
                        operator: '*'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '4.0'
                        },
                        operator: '*'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates float expressions with / operator', () => {
            const code = '2.0 / 0.5\n/ 0.5\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '2.0'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '0.5'
                        },
                        operator: '/'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '0.5'
                        },
                        operator: '/'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates float expressions with / operator without whitespace', () => {
            const code = '2.0/0.5\n/0.5\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '2.0'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '0.5'
                        },
                        operator: '/'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '0.5'
                        },
                        operator: '/'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates float expressions with mixed operators', () => {
            const code = '4.2 - 0.1\n* 5.0\n+ 001.5\n/ 0.1\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '4.2'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '0.1'
                        },
                        operator: '-'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '5.0'
                        },
                        operator: '*'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '001.5'
                        },
                        operator: '+'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '0.1'
                        },
                        operator: '/'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('creates float expressions with mixed operators without whitespace', () => {
            const code = '4.2-0.1\n*5.0\n+001.5\n/0.1\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '4.2'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '0.1'
                        },
                        operator: '-'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '5.0'
                        },
                        operator: '*'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '001.5'
                        },
                        operator: '+'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '0.1'
                        },
                        operator: '/'
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });
    });

    describe('with if-expressions', () => {
        test('for one expression', () => {
            const code = '1 + 2\n= 3 ? * 5 : / 2\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '1'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '2'
                        },
                        operator: '+'
                    },
                    {
                        type: 'IfExpression',
                        test: {
                            type: 'BooleanExpression',
                            left: {
                                type: 'LastExpression'
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '3'
                            },
                            operator: '='
                        },
                        consequent: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'LastExpression'
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '5'
                            },
                            operator: '*'
                        },
                        alternate: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'LastExpression'
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '2'
                            },
                            operator: '/'
                        }
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('for one expression without whitespace', () => {
            const code = '1+2\n=3?*5:/2\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '1'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '2'
                        },
                        operator: '+'
                    },
                    {
                        type: 'IfExpression',
                        test: {
                            type: 'BooleanExpression',
                            left: {
                                type: 'LastExpression'
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '3'
                            },
                            operator: '='
                        },
                        consequent: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'LastExpression'
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '5'
                            },
                            operator: '*'
                        },
                        alternate: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'LastExpression'
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '2'
                            },
                            operator: '/'
                        }
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('for multiple expressions', () => {
            const code = '2 - 2\n> 0 | < 5 ? - 1 : + 1\n= 1 ? + 0 : - 100\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '2'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '2'
                        },
                        operator: '-'
                    },
                    {
                        type: 'IfExpression',
                        test: {
                            type: 'BooleanExpression',
                            left: {
                                type: 'BooleanExpression',
                                left: {
                                    type: 'LastExpression'
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '0'
                                },
                                operator: '>'
                            },
                            right: {
                                type: 'BooleanExpression',
                                left: {
                                    type: 'LastExpression'
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '5'
                                },
                                operator: '<'
                            },
                            operator: '|'
                        },
                        consequent: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'LastExpression'
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '1'
                            },
                            operator: '-'
                        },
                        alternate: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'LastExpression'
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '1'
                            },
                            operator: '+'
                        }
                    },
                    {
                        type: 'IfExpression',
                        test: {
                            type: 'BooleanExpression',
                            left: {
                                type: 'LastExpression'
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '1'
                            },
                            operator: '='
                        },
                        consequent: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'LastExpression'
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '0'
                            },
                            operator: '+'
                        },
                        alternate: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'LastExpression'
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '100'
                            },
                            operator: '-'
                        }
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('for multiple expressions without whitespace', () => {
            const code = '2-2\n>0|<5?-1:+1\n=1?+0:-100\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '2'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '2'
                        },
                        operator: '-'
                    },
                    {
                        type: 'IfExpression',
                        test: {
                            type: 'BooleanExpression',
                            left: {
                                type: 'BooleanExpression',
                                left: {
                                    type: 'LastExpression'
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '0'
                                },
                                operator: '>'
                            },
                            right: {
                                type: 'BooleanExpression',
                                left: {
                                    type: 'LastExpression'
                                },
                                right: {
                                    type: 'IntegerLiteral',
                                    value: '5'
                                },
                                operator: '<'
                            },
                            operator: '|'
                        },
                        consequent: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'LastExpression'
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '1'
                            },
                            operator: '-'
                        },
                        alternate: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'LastExpression'
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '1'
                            },
                            operator: '+'
                        }
                    },
                    {
                        type: 'IfExpression',
                        test: {
                            type: 'BooleanExpression',
                            left: {
                                type: 'LastExpression'
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '1'
                            },
                            operator: '='
                        },
                        consequent: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'LastExpression'
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '0'
                            },
                            operator: '+'
                        },
                        alternate: {
                            type: 'BinaryExpression',
                            left: {
                                type: 'LastExpression'
                            },
                            right: {
                                type: 'IntegerLiteral',
                                value: '100'
                            },
                            operator: '-'
                        }
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });
    });

    describe('including print out', () => {
        test('as single statement at the end', () => {
            const code = '1 + 2\n- 3\n\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '1'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '2'
                        },
                        operator: '+'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '3'
                        },
                        operator: '-'
                    },
                    {
                        type: 'PrintOut',
                        value: {
                            type: 'LastExpression'
                        }
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('as single statement at the end without whitespace', () => {
            const code = '1+2\n-3\n\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '1'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '2'
                        },
                        operator: '+'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '3'
                        },
                        operator: '-'
                    },
                    {
                        type: 'PrintOut',
                        value: {
                            type: 'LastExpression'
                        }
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('with multiple statements', () => {
            const code = '4 * 6\n- 42\n\n9.5 / 0.5\n- 4\n\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '4'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '6'
                        },
                        operator: '*'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '42'
                        },
                        operator: '-'
                    },
                    {
                        type: 'PrintOut',
                        value: {
                            type: 'LastExpression'
                        }
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '9.5'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '0.5'
                        },
                        operator: '/'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '4'
                        },
                        operator: '-'
                    },
                    {
                        type: 'PrintOut',
                        value: {
                            type: 'LastExpression'
                        }
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });

        test('with multiple statements without whitespace', () => {
            const code = '4*6\n-42\n\n9.5/0.5\n-4\n\n';
            const ast = parser(code);
            const expected = {
                type: 'Program',
                body: [
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'IntegerLiteral',
                            value: '4'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '6'
                        },
                        operator: '*'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '42'
                        },
                        operator: '-'
                    },
                    {
                        type: 'PrintOut',
                        value: {
                            type: 'LastExpression'
                        }
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'FloatLiteral',
                            value: '9.5'
                        },
                        right: {
                            type: 'FloatLiteral',
                            value: '0.5'
                        },
                        operator: '/'
                    },
                    {
                        type: 'BinaryExpression',
                        left: {
                            type: 'LastExpression'
                        },
                        right: {
                            type: 'IntegerLiteral',
                            value: '4'
                        },
                        operator: '-'
                    },
                    {
                        type: 'PrintOut',
                        value: {
                            type: 'LastExpression'
                        }
                    }
                ]
            };

            expect(ast).toEqual(expected);
        });
    });
});
