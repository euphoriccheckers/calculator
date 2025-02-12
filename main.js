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

let display = document.getElementById("display");
display.innerHTML = `<h1 id='displayText'>0</h1>`;
let btnBar = document.getElementById("btnBar");

let clrSpan = document.createElement("span");
clrSpan.id = "clear";
let clrBtn = document.createElement("button");
clrBtn.innerHTML = `<span>CLEAR</span>`;
clrSpan.append(clrBtn);
btnBar.append(clrSpan);

let delSpan = document.createElement("span");
delSpan.id = "delete";
let delBtn = document.createElement("button");
delBtn.innerHTML = `<span>DELETE</span>`;
delSpan.append(delBtn);
btnBar.append(delSpan);

let btnGrid = document.getElementById("btnGrid");
let btnArray = ["7", "8", "9", String.fromCharCode(247), "4", "5", "6",
                "x", "1", "2", "3", "-", ".", "0", "=", "+"];

btnArray.forEach(btn => {
    let button = document.createElement("button");
    button.innerHTML = `<span>${btn}</span>`;
    button.id = `${btn}`;
    button.className = "gridBtn";
    btnGrid.append(button);
});