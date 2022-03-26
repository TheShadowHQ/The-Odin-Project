const calculator = {
    displayValue: '',
    firstOperand: null,
    watingForSecondOperand: false,
    operator: null
}

const updateScreen = () => {
    const screen = document.querySelector('.screen');
    screen.textContent = calculator.displayValue;
}

const calculate = (firstOperand, secondOperand, operator) => {
    if (operator === '+') {
        return firstOperand + secondOperand;
    } else if (operator === '-') {
        return firstOperand - secondOperand;
    } else if (operator === '*') {
        return firstOperand * secondOperand;
    } else if (operator === '/') {
        return firstOperand / secondOperand;
    }

    return secondOperand;
}

const handleOperator = nextOperator => {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    if (operator && calculate.watingForSecondOperand) {
        calculate.operator = nextOperator;
        console.log(calculator);
        return;
    }

    if (firstOperand === null & !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.firstOperand = result;
    }

    calculator.watingForSecondOperand = true;
    calculator.operator = nextOperator;
}

const inputDecimal = dot => {
    if (calculator.watingForSecondOperand === true) {
        calculator.displayValue = '';
        calculator.watingForSecondOperand = false;
        return;
    }

    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

const resetCalculator = () => {
    calculator.displayValue = '|';
    calculator.firstOperand = null;
    calculator.watingForSecondOperand = false;
    calculator.operator = null;
}

const inputDigit = digit => {
    const { displayValue, watingForSecondOperand } = calculator;

    if (watingForSecondOperand) {
        calculator.displayValue = digit;
        calculator.watingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '' ? digit : displayValue + digit;;
    }
}

const keys = [...document.querySelectorAll('button')];
keys.forEach(key => {
    key.addEventListener('click', e => {
        switch (e.target.value) {
            case '+':
            case '-':
            case '*':
            case '/':
            case '=':
                handleOperator(e.target.value);
                break;
            case '.':
                inputDecimal(e.target.value);
                break;
            case 'clear':
                resetCalculator();
                break;
            default:
                if (Number.isInteger(parseFloat(e.target.value))) {
                    inputDigit(e.target.value);
                }
        }

        updateScreen();
    });
});