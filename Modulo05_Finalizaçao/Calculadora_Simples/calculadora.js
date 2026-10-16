//feita por IA (só revisei)
const display = document.getElementById('resultado')
const limpar = document.getElementById('limpar')
const reset = document.getElementById('reset')
const botoes = document.querySelectorAll('.num, .op')
const n = []
let resultado = 0
let VA = ""
let OA = ""

botoes.forEach(function(botao) {
    botao.addEventListener('click', function() {
        if (botao.classList.contains('num')) {
            display.textContent += botao.textContent;
            VA += botao.textContent;
        } 
        else if (botao.classList.contains('op')) {
            if (VA !== "") {
                n.push(Number(VA));
                VA = "";
            }
            display.textContent += "" + botao.textContent + "";
            OA = botao.textContent;
        }
    })
})

limpar.addEventListener('click', function() {

    const texto = display.textContent.trim()
    const ultimoCaractere = texto.slice(-1)

    display.textContent = display.textContent.slice(0, -1)

    if (ultimoCaractere === 'x' || ultimoCaractere === '+' || ultimoCaractere === '-' ||    ultimoCaractere === '÷') {
        OA = ""
    } else {
        VA = VA.slice(0, -1)
    }
})


reset.addEventListener('click', function() {
    display.textContent = ""
    VA = ""
    OA = ""
    n.length = 0
    resultado = 0
})

function res() {
    if (VA !== "") {
        n.push(Number(VA));
        VA = "";
    }

    if (OA === 'x' && n.length > 0) {
        resultado = n.reduce((x, y) => x * y, 1);
        display.textContent = resultado;
        
        VA = String(resultado); 
        OA = "";
        n.length = 0;
    } 

    else if (OA === '+' && n.length > 0) {
        resultado = n.reduce((x, y) => x + y);;
        display.textContent = resultado;
        
        VA = String(resultado); 
        OA = "";
        n.length = 0;
    }

    else if (OA === '-' && n.length > 0) {
        resultado = n.reduce((x, y) => x - y);;
        display.textContent = resultado;
        
        VA = String(resultado); 
        OA = "";
        n.length = 0;
    }

    else if (OA === '÷' && n.length > 0) {
        resultado = n.reduce((x, y) => x / y);;
        display.textContent = resultado;
        
        VA = String(resultado); 
        OA = "";
        n.length = 0;
    }
}


document.getElementById('igual').addEventListener('click', res)