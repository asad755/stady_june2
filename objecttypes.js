"use strict";
// Declare a variable called person4 with a specific object type annotation
let person4;
// Assign person4 to an object with all the necessary properties and value types
person4 = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
    age: 30, // Assuming an age value
};
// This will cause an error as the value should be a boolean
// person4.isProgrammer = 'Yes';
// This will cause an error as the object is missing required properties
// person4 = {
//     name: 'John',
//     location: 'US',
// };
console.log(person4.location);
console.log(person4.isProgrammer);
console.log(person4.name);
console.log(person4.age);
console.info("person4");
let person5 = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
    age: 30,
};
// Reassigning the properties of person5
person5 = {
    name: 'asaad',
    location: 'pakistan',
    isProgrammer: true,
    age: 55,
};
console.log(person5.location);
console.log(person5.isProgrammer);
console.log(person5.name);
console.log(person5.age);
console.info("person5");
