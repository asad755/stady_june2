let person1: [string, number, boolean] = ['Danny', 1, true];
// person1[0] = 100; // Error - Value at index 0 can only be a string
// person1[1] = 'Danny'; // Error - Value at index 1 can only be a number
person1[2] = false;

console.log(person1);
