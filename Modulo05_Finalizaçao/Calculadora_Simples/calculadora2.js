// feito por mim e um pouco de IA
const display = document.getElementById('resultado')
const limpar = document.getElementById('limpar')
const reset = document.getElementById('reset')
const botoes = document.querySelectorAll('.num, .op')
let y = ''
let x = ''
let op = ''
let resultado = 0

botoes.forEach(function(botao) {
    botao.addEventListener('click', function() {
        if (botao.classList.contains('num') && x == '') {
            display.textContent += botao.textContent;
            x += botao.textContent;
        } else if (botao.classList.contains('num') && y == ''){
            display.textContent += botao.textContent;
            y += botao.textContent;
        }
        else if (botao.classList.contains('op')) {
            display.textContent += botao.textContent;
            op = botao.textContent;
        }
    })
})

reset.addEventListener('click', function() {
    display.textContent = ""
    resultado = ''
    x = ""
    y = ""
})

function res() {
    if (op === '+') {
        resultado = Number(x) + Number(y)
        display.textContent = resultado;
        x = ''
        y = ''
    } else if (op === '-') {
        resultado = Number(x) - Number(y)
        display.textContent = resultado;
        x = ''
        y = ''
    } else if (op === 'x') {
        resultado = Number(x) * Number(y)
        display.textContent = resultado;
        x = ''
        y = ''
    } else if (op === '÷') {
        resultado = Number(x) / Number(y)
        display.textContent = resultado;
        x = ''
        y = ''
    }
}