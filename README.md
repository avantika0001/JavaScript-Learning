# JavaScript-Learning

## 1. Basic JavaScript Syntax

### Hello World in JS

```js
console.log("Hello World");
```

#### OUTPUT

```
Hello World
```

-   The log( ) function is used to print a value to the console.

### Variables

-   Variables in JS are used to store a value under a name.

#### Variable Declaration using 'var'

```js
var name = "Avantika";
var age = 21;
console.log(name, age);
```

#### OUTPUT

```
Avantika 21
```

-   'var' was an older way of to create variables.
-   It ignores the block scope.

#### Variable Declaration using 'let'

```js
let name = "Avantika";
let age = 21;
console.log(name, age);
```

#### OUTPUT

```
Avantika 21
```

-   'let' works same as 'var'.

#### Variable Declaration using 'const'

```js
const name = "Avantika";
const age = 21;
console.log(name, age);
```

#### OUTPUT

```
Avantika 21
```

-   'const' is also used to create variables.
-   It doesn't allow updation of the variable once it is formed.

### Data Types

#### Numbers

```js
let age = 21;
let phone = 12345;
let pi = 3.14159;
console.log(age, phone, pi);
```

#### OUTPUT

```
21 12345 3.14159
```

-   Number datatype in JS includes both integers and decimal numbers.

#### Strings

```js
let name = "Avantika";
let country = "India";
console.log("My name is " + name + " and I live in " + country);
```

#### OUTPUT

```
My name is Avantika and I live in India
```

-   String is a combination of characters. enclosed in double-quotes( " " ).

#### Arrays

```js
let colors = ["red", "blue", "pink", "green"];
console.log(colors);
```

#### OUTPUT

```
["red" , "blue" , "pink" , "green"]
```

-   Arrays are combination of multiple values of various data types under a single name.

#### Boolean

```js
let is_rain = False;
let can_vote = True;
console.log(is_rain, can_vote);
```

#### OUTPUT

```
False True
```

-   Boolean consists of only two values - True and False.

#### Null and undefined

```js
let a;
let b = null;
console.log(a, b);
```

#### OUTPUT

```
undefined null
```

-   Null - It represents the intentional absence of a value.
-   Undefined - It shows that the value is yet to be assigned.

### Comparison Operators

```js
let age = 18;

console.log(age == 18); // Is equal to
console.log(age != 18); // Is not equal to
console.log(age > 18); // Is greater than
console.log(age < 18); // Is less than
```

#### OUTPUT

```
True
False
False
False
```

#### Loose comparison

```js
let age = 18;
console.log(age == 18);
console.log(age == "18"); // Implicit type conversion takes place
```

#### OUTPUT

```
True
True
```

-   Before comparing, Type conversion takes place.

#### Strict comparison

```js
let age = 18;
console.log(age === 18);
console.log(age === "18"); // no type conversion takes place.
```

#### OUTPUT

```
True
False
```

-   No type conversion takes place before comparison.

### Type Conversion

#### Implicit conversion

```js
let age = 18;
console.log(age == 18);
console.log(age == "18"); // Implicit type conversion takes place
```

#### OUTPUT

```
True
True
```

-   In this example, type conversion is done by browser, thus it is an Implicit conversion.

#### Explicit conversion

```js
let age = 20;
console.log(age);

age = "Twenty";
console.log(age);
```

#### OUTPUT

```
20
Twenty
```

-   Type conversion done by the user is known as Explicit Type Conversion.
