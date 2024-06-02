function hello(name) {
    console.log(`Hello ${name}`);
}

let firstName1 = "John";
hello(firstName1);
hello(firstName1 + " Smith");
console.log(firstName1);

function hello2(name) {
    console.log(`Hello ${name} + + yar ${firstName1}`);
}

console.log(hello2("John"));
console.log(hello2("John Smith"));
console.log(hello2(firstName1));