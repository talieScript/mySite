// Button variables
var oneBtn            = document.querySelector('#calc-one'),
    twoBtn            = document.querySelector('#calc-two'),
    threeBtn          = document.querySelector('#calc-three'),
    fourBtn           = document.querySelector('#calc-four'),
    fiveBtn           = document.querySelector('#calc-five'),
    sixBtn            = document.querySelector('#calc-six'),
    sevenBtn          = document.querySelector('#calc-seven'),
    eightBtn          = document.querySelector('#calc-eight'),
    nineBtn           = document.querySelector('#calc-nine'),
    zeroBtn           = document.querySelector('#calc-zero'),

    decimalBtn        = document.querySelector('#calc-decimal'),
    clearBtn          = document.querySelector('#calc-clear'),
    backspaceBtn      = document.querySelector('#calc-backspace'),
    displayValElement = document.querySelector('#calc-display-val'),

    calcNumBtns       = document.querySelectorAll('.calc-btn-num'),
    calcOperatorsBtn  = document.querySelectorAll('.calc-btn-operator')
    
    displayVal        = '0',
    pendingVal        = undefined,
    evalStrArr        = [];

    // click number display function
    var updateDiplayVal = (clickObj) => {
        var btnText = clickObj.target.innerText;
        if(displayVal === '0'){
            displayVal = '';
        }
        displayVal += btnText;
        displayValElement.innerText = displayVal;
    }
    // clear and backspace click functions
    clearBtn.onclick = () => {
        displayVal = '0'; 
        pendingVal = undefined;
        evalStrArr = [];
        displayValElement.innerHTML = displayVal;
    }
    backspaceBtn.onclick = () => {
        let lengthOfDisplayVal = displayVal.length;
        displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
        if(displayVal === ''){
            displayVal = '0';
        }
        displayValElement.innerText = displayVal;
    }
    // decimal display function
    decimalBtn.onclick = () => {
        if(!displayVal.includes('.')){
            displayVal += '.';
        }
        displayValElement.innerText = displayVal;
    }
    // operators Arithmetic functions
    var performOperation = (clickObj) => {
        var operation = clickObj.target.innerText;
        switch (operation) {
            case '÷':
                pendingVal = displayVal;
                displayVal = '0';
                displayValElement.innerText = displayVal;
                evalStrArr.push(pendingVal)
                evalStrArr.push('/')
            break;
            case 'x':
                pendingVal = displayVal;
                displayVal = '0';
                displayValElement.innerText = displayVal;
                evalStrArr.push(pendingVal)
                evalStrArr.push('*')
            break;
            case '-':
                pendingVal = displayVal;
                displayVal = '0';
                displayValElement.innerText = displayVal;
                evalStrArr.push(pendingVal)
                evalStrArr.push('-')
            break;
            case '+':
                pendingVal = displayVal;
                displayVal = '0';
                displayValElement.innerText = displayVal;
                evalStrArr.push(pendingVal)
                evalStrArr.push('+')
            break;
            case '=':
                evalStrArr.push(displayVal);
                var evalution = eval(evalStrArr.join(' '));
                displayVal = evalution + '';
                displayValElement.innerText = displayVal;
                evalStrArr = [];
            break
        }
    }
    // loops to add click functions
    for(var i = 0; i < calcNumBtns.length; i++){
        calcNumBtns[i].addEventListener('click', updateDiplayVal, false);
    }
    for(var i = 0; i < calcOperatorsBtn.length; i++){
        calcOperatorsBtn[i].addEventListener('click', performOperation, false)
    }

    
