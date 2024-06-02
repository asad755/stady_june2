let person: (string | number | boolean)[] = ['Danny', 1, true];
person[0] = 100;
 person[1] = {name: 'Danny'} // Error - person array can't contain objects

 console.log(person);
