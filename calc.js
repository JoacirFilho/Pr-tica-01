let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelectorAll('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');

let realTimeScreenValue = []

clearbtn.addEventListener("click", () => {
    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = "rgba(150, 150, 150, 0.87)";

})

buttons.forEach((btn) => {  
    btn.addEventListener("click", () => {

        if (!btn.id.match('erase')) {

            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');
        
            if (btn.classList.contains('num_btn')) {
        
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            }
        
        }
        
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }
        
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }
        
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0;
        }

        
        
    })
})

// Para o usuario digitar atrás do teclado do PC

document.addEventListener("keydown", function(event) {
    
    const key = event.key;
        
    if (/[\d+\-*/.=%,]/.test(key)) {
        
        realTimeScreenValue.push(key);
        currentInput.innerHTML = realTimeScreenValue.join('');
        
        
        if (/\d/.test(key)) {
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }
    } else if (key === "Enter") {
        
        currentInput.className = 'answerScreen';
        answerScreen.className = 'currentInput';
        answerScreen.style.color = "white";
    } else if (key === "Backspace") {
        
        realTimeScreenValue.pop();
        currentInput.innerHTML = realTimeScreenValue.join('');
        answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
    }
    
    
    event.preventDefault();
});
