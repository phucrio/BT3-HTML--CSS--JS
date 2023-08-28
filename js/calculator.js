document.addEventListener('DOMContentLoaded', function() {
    const resultField = document.getElementById('result');
    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');
    const equalsButton = document.getElementById('equals');
    const clearButton = document.getElementById('clear');
    const plusMinusButton = document.getElementById('plusMinus');
  
    let currentValue = '';
    let currentOperator = '';
    let currentOperand = '';
  
    numbers.forEach(number => {
      number.addEventListener('click', function() {
        currentValue += this.textContent;
        resultField.value = currentValue;
      });
    });
  
    operators.forEach(operator => {
      operator.addEventListener('click', function() {
        if (currentValue !== '') {
          currentOperand = currentValue;
          currentValue = '';
          currentOperator = this.textContent;
        }
      });
    });
  
    equalsButton.addEventListener('click', function() {
      if (currentOperand !== '' && currentOperator !== '' && currentValue !== '') {
        const operand1 = parseFloat(currentOperand);
        const operand2 = parseFloat(currentValue);
  
        switch (currentOperator) {
          case '+':
            currentValue = (operand1 + operand2).toString();
            break;
          case '-':
            currentValue = (operand1 - operand2).toString();
            break;
          case '*':
            currentValue = (operand1 * operand2).toString();
            break;
          case '/':
            if (operand2 !== 0) {
              currentValue = (operand1 / operand2).toString();
            } else {
              currentValue = 'Error';
            }
            break;
          case '%':
            currentValue = (operand1 % operand2).toString();
            break;
        }
  
        currentOperator = '';
        currentOperand = '';
        resultField.value = currentValue;
      }
    });
  
    clearButton.addEventListener('click', function() {
      currentValue = '';
      currentOperator = '';
      currentOperand = '';
      resultField.value = '';
    });
  
    plusMinusButton.addEventListener('click', function() {
      if (currentValue !== '') {
        currentValue = (parseFloat(currentValue) * -1).toString();
        resultField.value = currentValue;
      }
    });
  });
  