// initialize variables
let displayValue = 0;
let num1 = '';
let num2 = '';
let operator = '';

// digit buttons and operators
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");

// call each digit button
digits.forEach(digit => {
    digit.addEventListener("click", e => {
        if (operator === '') {
            num1 += e.target.innerText;
            displayValue = num1;
            console.log(displayValue);
        } else {
            num2 += e.target.innerText;
            displayValue = num2;
            console.log(displayValue);
        }
    });
});

// call each operator button
operators.forEach(op => {
    op.addEventListener("click", e => {
        operator = e.target.value;
        console.log(operator);
    });
});

// basic functions
function add(a, b) {
    num1 = parseInt(a) + parseInt(b);
    return num1;
  };
function subtract (a, b) {
    num1 = parseInt(a) - parseInt(b);
    return num1;
  };
function multiply(a, b) {
    num1 = parseInt(a) * parseInt(b);
    return num1;
  };
function divide(a, b) {
    num1 = parseInt(a) / parseInt(b);
    return num1;
}

// clear button function
const clear = document.querySelector(".clear");
function clearAll() {
    num1 = '';
    num2 = '';
    operator = '';
    displayValue = '';
}
clear.addEventListener("click", clearAll);

// execute function using equal sign
const equal = document.querySelector(".equal");
function execution(num1, num2, operator) {
    switch (operator) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
        default:
            return "ERROR";
    }
}
equal.addEventListener("click", execution);




const decimal = document.querySelector(".decimal");

const display = document.querySelector(".display");