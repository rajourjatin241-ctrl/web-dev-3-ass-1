// ----------------------------------------------------TASK 1:------------------------------------------------------
console.log("Setup successful!", process.argv);

const operation = process.argv[2];

const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);

console.log("operation:", operation);
console.log("First Number:", num1);
console.log("Second Number:", num2);

switch (operation) {
    case "add":
        console.log(`Result: ${num1 + num2}`);
        break;

    case "sub":
        console.log(`Result: ${num1-num2}`);
        break;

    case "mul":
        console.log(`Result: ${num1 * num2}`);
        break;

    case "div":
        if (num2==0){
            console.log("Error: Division by zero is not allowed.");
        } else {
            console.log(`Result: ${num1 / num2}`);
        }
        break;  
}


