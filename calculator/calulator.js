function add(addend1, addend2) {
    const sum = addend1 + addend2
    return sum
}

function subtract(minuend, subtrahend) {
    const difference = minuend - subtrahend
    return difference
}

function multiply(multiplicand, multiplier) {
    const product = multiplicand * multiplier
    return product
}

function divide(dividend, divisor) {
    const quotient = dividend / divisor
    return quotient
}

var num1
var num2
var operator

function operate(num1,num2,operator) {
    if (operator = '+') {
        add(num1, num2);
    } else if (operator = '-') {
        subtract(num1, num2);
    } else if (operator = '*') {
        product(num1, num2);
    } else if (operator = '/') {
        divide(num1, num2)
    }
}

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const decimalButton = document.querySelector('.decimal');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent();
    if (!numString1) {
        let numString1 = value
    } else if (numString1 && !operator) {
        let numString1 = numString1 + value
    } else if (numString1 && operator && !numString2) {
        let numString2 = value
    } else if (numString1 && operator && numString2) {
        let numString2 = numString2 + value
    }
    });
});
operatorButtons.addEventListener('click', () => {
    const value = button.textContent();
    if (!numString1) {
        let numString1 = 0
        let operator = value
    } else if (numString1 && !operator) {
        let operator = value
    } else if (numString1 && operator && !numString2) {
        return error
    } else if (numString1 && operator && numString2) {
        num1 = parseInt(numString1);
        num2 = parseInt(numString2);
        const result = operate(num1, num2, operator);
        let numString1 = result
        let operator = value
    } 
});
decimalButton.addEventListener('click', () => {

});
equalsButton.addEventListener('click', () => {

});
clearButton.addEventListener('click', () => {

});