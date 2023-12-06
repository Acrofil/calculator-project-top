let numberA;
let numberB;
let operator;

operate(operator, numberA, numberB);

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

    console.log('add');

};

function subtract(a, b) {

    console.log('subtract');
};

function multiply(a, b) {

    console.log('multiply');
};

function divide(a, b) {

    console.log('divide');

};

