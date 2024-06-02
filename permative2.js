"use strict";
let id = 5;
let firstName = 'danny';
let hasDog = true;
let unit; // Declare variable without assigning a value
unit = 5;
console.log(id);
console.log(firstName);
console.log(hasDog);
let id1 = 5; // TS knows it's a number
let firstName2 = 'danny'; // TS knows it's a string
let hasDog1 = true; // TS knows it's a boolean
hasDog = 'yes'; // ERROR
console.log(id1);
console.log(firstName2);
console.log(hasDog1);
