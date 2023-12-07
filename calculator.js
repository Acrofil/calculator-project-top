
let numberA = 0;
let numberB = 0;
let operator = "";
let result = 0;

const btns = document.querySelectorAll("button");

const currentDisplay = document.querySelector(".previousNumbers");
const currentResult = document.querySelector(".currentNumbers");
const decimalBtn = document.querySelector(".decimal");

let resultSum = document.createElement('div');
let input = document.createElement('div');

const operators = [' + ', ' - ', ' * ', ' / '];
let operatorCount = 0;

let currentInput = "0";

btns.forEach((button) => {

    button.addEventListener('click', () => {

        let btnVal = button.value;

        // count operators and remove disable decimal if second number is inputed
        if (operators.includes(btnVal)) {

            operatorCount += 1;
            disableDecimal();
        }

        // reset the calculator
        if (btnVal === "C") {
            currentInput = "0";
            result = 0;
            operatorCount = 0;
            disableDecimal();
            
        // delete previous number
        } else if (btnVal === "DEL" ) {

            currentInput = currentInput.slice(0, -1);
            
        } else if (currentInput === "0") {

            currentInput = "";
            currentInput += btnVal;

        } else {

            currentInput += btnVal;
        }

        if (btnVal === " = ") {

            strSplitAndEvalResult();
            
        } else if (operatorCount === 2) {

            strSplitAndEvalResult();
        }

        // update calculator display
        resultSum.textContent = `${result}`;
        currentResult.appendChild(resultSum);

        input.textContent = `${currentInput}`;
        currentDisplay.appendChild(input);
            
    });
});

// split the string, convert to numbers
function strSplitAndEvalResult() {

    let inputNumbers = currentInput.split(`${" "}`);

    numberA = +inputNumbers[0];
    operator = inputNumbers[1];
    numberB = +inputNumbers[2];

    // prevent zero division
    if (operator === "/" && numberB === 0) {

        result = `${"L0l"}`;
        return
    }

    // if second operator is inputed eval the previous 2 numbers and set count to 1
    if (operatorCount === 2) {

        let secondOperator = inputNumbers[3];

        operate(operator, numberA, numberB); 
        currentInput = `${result} ${secondOperator} `;
        operatorCount = 1;
        return
    }

    // default behavior
    operate(operator, numberA, numberB); 
    currentInput = `${result}`;
    operatorCount = 0;
    
}

// determine which operation to be executed
function operate(operator, a, b) {

    switch (operator) {

        case "+":
            add(a, b);
            break;
        
        case "-":
            subtract(a, b);
            break;

        case "*":
            multiply(a, b);
            break;
        
        case "/":
            divide(a, b);
            break;
    };
};

// all operations
function add(a, b) {
    result = a + b;
};

function subtract(a, b) {
    result = a - b;
};

function multiply(a, b) {
    result = a * b;
};

function divide(a, b) {
    result = a / b;
};

// add disabled when decimal is clicked
decimalBtn.addEventListener('click', ( ) => decimalBtn.setAttribute("disabled", "") );

// remove disabled on decimal
function disableDecimal() {

    decimalBtn.removeAttribute("disabled", "");
}