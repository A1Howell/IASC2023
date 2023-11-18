'use strict';

function calculate(operator) {
    // Get input values
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    // Check for division by zero
    if (operator === '/' && num2 === 0) {
        alert('Cannot divide by zero');
        return;
    }

    // Declare result variable
    let result;

    // Perform calculation based on the operator
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
            result = num1 / num2;
            break;
        default:
            alert('Invalid operator');
            return;
    }

    // Display the result
    document.getElementById('output').innerText = 'Result: ' + result;
}
