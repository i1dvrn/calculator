const displayNow = document.querySelector('.calc__display--now p');
const buttons = document.querySelectorAll('.calc__buttons button');

function operat(firsttInput, secondInput, operator) {
    if (operator === "x") {
        inResult = parseFloat(firsttInput) * parseFloat(secondInput);
        AC();
        return inResult;
    }
    else if (operator === "/") {
        inResult = parseFloat(firsttInput) / parseFloat(secondInput);
        AC();
        return inResult;
    }
    else if (operator === "-") {
        inResult = parseFloat(firsttInput) - parseFloat(secondInput);
        AC();
        return inResult;
    }
    else if (operator === "+") {
        inResult = parseFloat(firsttInput) + parseFloat(secondInput);
        AC();
        return inResult;
    }
}


function AC() {
    firsttInput = "";
    secondInput = '';
    operator = '';
    opSelected = false ;
    result ="" ;
    furmela=""
}
function DEL(){
    if (secondInput) {
        secondInput =secondInput.slice(0, -1);
        furmela = firsttInput+operator+secondInput;
    } else if (operator) {
        operator = "";  
        furmela = firsttInput;
    } else if (firsttInput) {
        firsttInput = firsttInput.slice(0, -1);
        furmela = firsttInput;
    }
}
let furmela = "";
let firsttInput = 0;
let secondInput = '';
let operator = '';
let opSelected = false ;
let result ="" ;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === "=") {
            if ( firsttInput === "" || secondInput === "" || operator === ""){
                result = "error"
                displayNow.textContent = result;   
                AC();
            }
            else {
                result = operat (firsttInput ,secondInput , operator);
                displayNow.textContent = result;
            }
        }
        else if (value === "AC") {
            AC();
            displayNow.textContent = 0
        }
        else if (value === "DEL") {
            DEL();
            if (furmela === "") {
                displayNow.textContent = 0;
            } else {
                displayNow.textContent = furmela;
            }
        }
        else if ((firsttInput&&secondInput&&operator) && (value === "/" ||value ===  "x" ||value ===  "-" ||value === "+" )) {
                let tOperator = value ; 
                firsttInput = operat (firsttInput ,secondInput , operator);
                operator = tOperator ;
                opSelected = true ;
                displayNow.textContent = firsttInput + operator;   

            }
        else if (value === "/" ||value ===  "x" ||value ===  "-" ||value === "+" ) {
            opSelected = true ;
            operator = value ;
            displayNow.textContent += operator;   
        }

         else if (opSelected) {
              if (value === "." && secondInput.includes(".")) return;
              secondInput += value;
              displayNow.textContent += value;
        }
         else {
             if (value === "." && String(firsttInput).includes(".")) return;
             if (firsttInput === 0) {
             firsttInput = value === "." ? "0." : value;
                 } else {
                  firsttInput += value;
                }
        displayNow.textContent = firsttInput;
        }
        
        console.log(firsttInput, secondInput, operator, result);
})});
