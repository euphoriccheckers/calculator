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