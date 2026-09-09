// -----------------------------------------------------TASK 2--------------------------------------------------------

const isEven = require('./isEven');

// console.log("Is 4 even?", isEven(4)); // true
// console.log("Is 7 even?", isEven(7)); // false

const num = parseInt(process.argv[2]);
if (isEven(num)) {
    console.log(`${num} is even.`);
} else {
    console.log(`${num} is odd.`);
}