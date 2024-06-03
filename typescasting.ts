let myname: unknown = "Assadullah";
console.log((myname as string).length);
console.log((<string>myname).length);