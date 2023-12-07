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

        if (operators.includes(btnVal)) {

            operatorCount += 1;
        }

        if (btnVal === "C") {
            currentInput = "0";
            result = 0;
            operatorCount = 0;

        } else if (btnVal === "DEL" ) {

            currentInput = currentInput.slice(0, -1);
            
        } else if (currentInput === "0") {

            currentInput = "";
            currentInput += button.value;

        } else {

            currentInput += button.value;
        }

        if (btnVal === " = ") {

            strSplitAndEval();
            
        } else if (operatorCount === 2) {

            strSplitAndEval();

        }

        resultSum.textContent = `${result}`;
        currentResult.appendChild(resultSum);

        input.textContent = `${currentInput}`;
        currentDisplay.appendChild(input);
            
    });
});

function strSplitAndEval() {

    let inputNumbers = currentInput.split(`${" "}`);
    console.log(inputNumbers);
    
    numberA = +inputNumbers[0];
    operator = inputNumbers[1];
    numberB = +inputNumbers[2];

    if (operator === "/" && numberB === 0) {

        result = `${"ODIN INVOKED"}`;
        return
    }

    if (operatorCount === 2) {

        let secondOperator = inputNumbers[3];

        operate(operator, numberA, numberB); 
        currentInput = `${result} ${secondOperator} `;
        operatorCount = 1;
        return
    }

    

    operate(operator, numberA, numberB); 
    currentInput = `${result}`;
    operatorCount = 0;
    
}

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

