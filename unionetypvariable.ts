let age: string | number;
age = 26;
age = '26';

let mixed: (string | number)[] = [];
mixed.push(5);
mixed.push('5');
mixed.push(true);
console.log(mixed);

console.log(age);