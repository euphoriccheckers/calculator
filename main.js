//operator functions
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

//create calculator UI
let display = document.getElementById("display");
display.innerText = `0`;

let btnBar = document.getElementById("btnBar");

let clrBtn = document.createElement("button");
clrBtn.id = "clear";
clrBtn.innerText = `CLEAR`;
btnBar.append(clrBtn);

let delBtn = document.createElement("button");
delBtn.id = "delete";
delBtn.innerText = `DELETE`;
btnBar.append(delBtn);

let btnGrid = document.getElementById("btnGrid");
let btnArray = ["7", "8", "9", String.fromCharCode(247), "4", "5", "6",
                "x", "1", "2", "3", "-", ".", "0", "=", "+"];

btnArray.forEach(btn => {
    let button = document.createElement("button");
    button.innerText = `${btn}`;
    button.id = `${btn}`;
    button.className = "gridBtn";
    btnGrid.append(button);
});