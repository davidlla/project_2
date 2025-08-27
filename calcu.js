let currentInput = '';
let operator = '';
let previousInput = '';

function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput !== '') {
            if (previousInput !== '' && operator !== '') {
                calculate();
            }
            previousInput = currentInput;
            operator = value;
            currentInput = '';
            display.value = previousInput + ' ' + operator + ' ';
        }
    } else {
        currentInput += value;
        if (previousInput !== '' && operator !== '') {
            display.value = previousInput + ' ' + operator + ' ' + currentInput;
        } else {
            display.value = currentInput;
        }
    }
}

function calculate() {
    const display = document.getElementById('display');
    
    if (previousInput === '' || currentInput === '' || operator === '') {
        return;
    }
    
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result;
    
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                display.value = 'Error';
                clearCalculator();
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }
    
    display.value = previousInput + ' ' + operator + ' ' + currentInput + ' = ' + result;
    
    // Reset for next calculation
    previousInput = result.toString();
    currentInput = '';
    operator = '';
}

function clearDisplay() {
    document.getElementById('display').value = '';
    clearCalculator();
}

function clearCalculator() {
    currentInput = '';
    operator = '';
    previousInput = '';
}