let currentInput = "0";
let operator = null;
let previousInput = null;

const display = document.getElementById("display");

function updateDisplay() {
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = "0";
    previousInput = null;
    operator = null;
    updateDisplay();
}

function appendNumber(number) {
    if (currentInput === "0") {
        currentInput = String(number);
    } else {
        currentInput += String(number);
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operator !== null) {
        calculateResult();
    }
    previousInput = currentInput;
    operator = op;
    currentInput = "0";
}

function appendDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
    }
}

function calculateResult() {
    if (operator === null || previousInput === null) return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = String(result);
    operator = null;
    previousInput = null;
    updateDisplay();
}
