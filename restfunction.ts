function hello(name = "Alexander", ...nickNames: string[]) {
    console.log(`Hello ${name} aka ${nickNames}`);
}

hello("Imran","Alexander","Alex","Alexander the Great")


function hello2(name = "Alexander", ...nickNames: string[]) {
    console.log(`Hello ${name} aka ${nickNames}`);
}
   hello2("Imran", "Alexander", "Alex", "Alexander the Great", "Assadullah") 
