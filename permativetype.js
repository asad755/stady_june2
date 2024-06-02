"use strict";
/*
stady_june2
Primitive types
In JavaScript, a primitive value is data that is not an object and has no methods. There are 7 primitive data types:

string
number
bigint
boolean
undefined
null
symbol
Primitives are immutable: they can't be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can't be changed in the ways that objects, arrays, and functions can be altered.

Here's an example:

let name = 'Danny';
name.toLowerCase();
console.log(name); // Danny - the string method didn't mutate the string

let arr = [1, 3, 5, 7];
arr.pop();
console.log(arr); // [1, 3, 5] - the array method mutated the array

name = 'Anna' // Assignment gives the primitive a new (not a mutated) value
In JavaScript, all primitive values (apart from null and undefined) have object equivalents that wrap around the primitive values. These wrapper objects are String, Number, BigInt, Boolean, and Symbol. These wrapper objects provide the methods that allow the primitive values to be manipulated.

Back to TypeScript, we can set the type we want a variable to be be adding : type (called a "type annotation" or a "type signature") after declaring a

*/
let name1 = 'Danny';
name1.toLowerCase();
console.log(name1); // Danny - the string method didn't mutate the string
let arr = [1, 3, 5, 7];
arr.pop();
console.log(arr); // [1, 3, 5] - the array method mutated the array
