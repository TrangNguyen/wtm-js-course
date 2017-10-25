
## Variables:
Variable in JavaScript is a holder of value, declared by var, let or const. Var and let can be reassigned, const not.

| declaration | scope    | reassignable | mutable | TDZ |
|-------------| ------   | ------------:| -------:| ---:|
| const       | block    |            N | Y       | Y   |
| let         | block    |            Y | Y       | Y   |
| var         | function |            Y | Y       | N   |

### Var-declared variable
* is function scoped. It’s accessible anywhere in the function but not outside. If it is not declared inside a function declaration, it’s globally available.
* is hoisted on top at the execution (declaration and assignation)
* can be re-declared (name resolution order)

### Let-declared variable
* is block scoped. Function is also block (between `{ // code }`) but let variable does not leak outside of the nearest enclosing { } while var does.
* is not accessible before assignation. Technically also hoisted but only the declaration part
* can not be re-declared in the same scope.

### Const-declared variable
* is block-scoped
* is not accessible before assignation. Technially hoisted but only declaration part.
* can not be re-declared in the same scope.
* can not be reassigned.
* is not 100% immutable, array and object consts can be mutated.

### Further readings:
* [How let and const are scoped in JavaScript - WesBos](http://wesbos.com/javascript-scoping/)
* [Temporal Dead Zone (TDZ) Demystified - Fabrício S. Matté](http://jsrocks.org/2015/01/temporal-dead-zone-tdz-demystified)
* [Block-Scoped Declarations - You Don't Know JS: ES6 & Beyond by Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#block-scoped-declarations)

## Function definition:
* Glue of transformation magic.
* Action that takes an input and compute an output.
* Given the same input it returns the same output (pure function)
* Procedure, a routine that execute.
* (Math) a relation or expression involving one or more varibales. A relation between a set of inputs and a set of permissible outputs that each input relate to exactly one output.

### Arrow function
* new in ES6
* more concise (shorter, implicit return on one-liner)
* does not create a new this. This is equal to the this value of the enclosing execution context. So to access variables inside a function inside another function, there is no need to assign `that = this` or `self = this` trick.
* by default anynomous function so it's good practive to put it into a const for better debugging stack trace.

| ES5 function declaration | ES6 arrow function |
|-------------------------|--------------------|
|function double(x) {return x * 2; }| const double = x => x * 2;|

## Class

* In ES6 it is a syntactics sugar for prototype-base inheritance.

* Class can be declared using class declaration or class expression. 

```
// class declaration
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// class experssion

const Rectangle = class {
    // same code
}

```

* Class is not hoisted like function declaration. It must be declared before accessing.
* `constructor` is a special method to create and initialize an object created with a class.
* `super` is used to call the constructor of parent class.
