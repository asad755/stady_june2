/*
// Define a function called circle that takes a diam variable of type number, and returns a string
function circle(diam: number): string {
    return 'The circumference is ' + Math.PI * diam;
  }
  
  console.log(circle(10)); // The circumference is 31.41592653589793
  

  const circle2 = (diam: number): string => {
    return 'The circumference is ' + Math.PI * diam;
  };
  
  console.log(circle(10)); // The circumference is 31.41592653589793
  
 function (diam: number): string => {
    return 'The circumference is ' + Math.PI * diam;
  };
  
   Inferred typing - TypeScript sees that circle is a function that always returns a string, so no need to explicitly state it
  const circle3 = (diam: number) => {
    return 'The circumference is ' + Math.PI * diam;
  };

  


  const circleExplicit: (diam: number) => string = (diam: number): string => {
    return 'The circumference is ' + Math.PI * diam;
  };

  

  const circleInferred = (diam: number): string => {
    return 'The circumference is ' + Math.PI * diam;
  };
  
*/


  // Using explicit typing
const circleExplicit: (diam: number) => string = (diam: number): string => {
    return 'The circumference is ' + Math.PI * diam;
  };
  
  // Using inferred typing
  const circleInferred = (diam: number): string => {
    return 'The circumference is ' + Math.PI * diam;
  };
  
  // Example usage
  console.log(circleExplicit(10));
  console.log(circleInferred(10));


  const add = (a: number, b: number, c?: number | string) => {
    console.log(c);
  
    return a + b;
  };
  
  console.log(add(5, 4, 'I could pass a number, string, or nothing here!'));
  // I could pass a number, string, or nothing here!
  // 9


  const logMessage = (msg: string): void => {
    console.log('This is the message: ' + msg);
  };
  
  logMessage('TypeScript is superb'); // This is the message: TypeScript is superb


  // Declare the varible sayHello, and give it a function signature that takes a string and returns nothing.
let sayHello: (name: string) => void;

// Define the function, satisfying its signature
sayHello = (name) => {
  console.log('Hello ' + name);
};

sayHello('Danny'); // Hello Danny
  
  