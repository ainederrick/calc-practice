const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.keys');
const display = document.querySelector('.display-button');
const buttons = document.querySelectorAll('.btn');



keys.addEventListener('click', (e) => {
    if(e.target.matches('button')) {
        let key = e.target;
        let action = key.dataset.action;
        let keyContent = key.textContent;
        let displayedContent = display.textContent;

        if(!action) {
            if(displayedContent === '0' || calculator.classList.contains('previousKey')) {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedContent + keyContent;
            }
            calculator.classList.remove('previousKey')
        }
        if(action === 'decimal') {
            if(!displayedContent.includes('.')) {
                display.textContent = displayedContent + '.';
            }
            if(calculator.classList.contains('previousKey')) {
                calculator.classList.remove('previousKey');
                display.textContent = 0 + '.'
            }
        }
        if(action === 'add' || action === 'minus' || action === 'divide' || action === 'multiply') {
            
            calculator.classList.add('previousKey')
            calculator.dataset.num1 = displayedContent;
            calculator.dataset.operator = action;
            }
        if(action === 'equals') {
            calculator.dataset.num2 = displayedContent;
            const num1 = calculator.dataset.num1
            const num2 = calculator.dataset.num2
            const operator = calculator.dataset.operator
            display.textContent = calculate(num1, operator, num2) || displayedContent;
            
        }
        if(action === 'restart') {
            display.textContent = '0';  
        }
        
    }
})

function calculate(number1, operator, number2) {
    const n1 = parseFloat(number1);
    
    if(operator === 'add') return n1 + n2;
    
    if(operator === 'minus') return n1 - n2;
    
    if(operator === 'divide') return n1 / n2;
    
    if(operator === 'multiply') return n1 * n2;
    
}

