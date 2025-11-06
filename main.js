let operand1, operand2, operator;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b === 0) return null;
    return a / b;
}

function operate(op1, op2, op) {
    switch (op) {
        case "+":
            return add(op1, op2);
        case "-":
            return subtract(op1, op2);
        case "*":
            return multiply(op1, op2);
        case "/":
            return divide(op1, op2);
        default:
            return null;
    }
}
