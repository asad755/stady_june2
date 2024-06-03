"use strict";
// new Date(timestamp)
// new Date(year, month, day)
/*
function createDate(timestamp: number): Date;
function createDate(day: number, month: number, year: number): Date;

function createDate(dayOrTimestamp: number, month?: number, year?: number) {
  return month === undefined || year === undefined
    ? new Date(dayOrTimestamp)
    : new Date(year, month, dayOrTimestamp);
}

console.log(createDate(2022, 1, 1));

 new Date(timestamp)

let timestamp = new Date().getTime()
console.log(timestamp);

 //new Date(year, month, day)

 //console.log(createDate(2022, 1, 1));
 */
console.log(new Date());
console.log(new Date().getTime());
console.log(new Date().toString());
console.log(new Date().toUTCString());
console.log(new Date().toISOString());
console.log(new Date().toJSON());
console.log(new Date().toLocaleString());
console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());
