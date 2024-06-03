// Define a tuple type for staff accounts
type StaffAccount = [number, string, string, string?];

// Create an array of staff accounts
const staff: StaffAccount[] = [
  [0, "Adankwo", "adankwo.e@"],
  [1, "Kanokwan", "kanokwan.s@"],
  [2, "Aneurin", "aneurin.s@", "Supervisor"],
];

// Define a tuple type for pay stubs with a flexible number of payments
type PayStubs = [StaffAccount, ...number[]];

// Create an array of pay stubs
const payStubs: PayStubs[] = [
  [staff[0], 250],
  [staff[1], 250, 260],
  [staff[0], 300, 300, 300],
];

console.log(payStubs);
console.log(payStubs[0][1]);
console.log(payStubs[1][2]);
console.log(payStubs[2][3]);
console.log(payStubs[2][2]);
console.log(payStubs[1][1]);
console.log(payStubs[0][0]);
console.log(payStubs[1][0]);
console.log(payStubs[2][0]);
console.log(payStubs[0][2]);


/*
// Calculate the total payments for each month
const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
const monthTwoPayments = (payStubs[1][2] ?? 0) + (payStubs[2][2] ?? 0);
const monthThreePayments = payStubs[2][3] ?? 0; // Correct index for third payment

// Function declaration to calculate pay for an employee
declare function calculatePayForEmployee(id: number, ...args: number[]): number;

// Calculate pay for employees using the function
calculatePayForEmployee(staff[0][0], payStubs[0][1]);
calculatePayForEmployee(staff[1][0], payStubs[1][1], payStubs[1][2]);

// Log the calculated payments
console.log(monthOnePayments);
console.log(monthTwoPayments);
console.log(monthThreePayments);

// Explanation for additional improvements:
// 1. Used the nullish coalescing operator (??) to handle optional payments that might be undefined.

*/
