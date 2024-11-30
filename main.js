function add(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}

function subtract(num1, num2) {
    console.log(num1 - num2);
    return num1 - num2;
}

function multiply(num1, num2) {
    console.log(num1 * num2);
    return num1 * num2;
}

function divide(num1, num2) {
    if(num2 == 0) {
        console.log("Can't break the laws of math!");
        return NaN;
    } else {
        console.log(Math.round((num1 / num2) * 100) / 100);
        return Math.round((num1 / num2) * 100) / 100;
    }
}

let num1 = 0;
let num2 = 0;
let operator = "";

function operate(num1, operator, num2) {
    let result = 0;

    switch(operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            console.log("Invalid operator!");
            return NaN;
    }

    return result;
}