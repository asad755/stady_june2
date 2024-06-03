"use strict";
//Named function with optional parameters
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = buildName("Bob"); //ok
let result2 = buildName("Bob", "Adams", "Sr."); //error, too many parameters
var result3 = buildName("Bob", "Adams"); //also ok
//anonymous function type with optional parameters
var buildName1 = function (firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
console.log(buildName1("Bob"));
console.log(buildName1("Bob", "Adams"));
console.log(buildName1("Bob", "Adams", "Sr."));
