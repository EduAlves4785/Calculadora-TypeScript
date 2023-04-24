"use strict";
/*Variáveis que representam números digitados
numero2 é string pois ao digitar números com mais de um dígito ele precisa ser
concatenado ao primeiro dígito ou seja digitou 1 e concaten com o segundo dígito podendo ser qualquer número
*/
let numero1 = 0;
let numero2 = ' ';
let operacao = ' ';
/*Operações
numero1 é convertido para number pois valorString propriamente dito já vem com string
este valor foi atribuido antes do usuário clicar na operação.
*/
const operaPorcento = document.querySelector('#operaResto');
operaPorcento === null || operaPorcento === void 0 ? void 0 : operaPorcento.addEventListener('click', () => {
    if (inputNumero) {
        let valorString = inputNumero.textContent;
        if (operacao == ' ') {
            numero1 = Number(valorString);
            operacao = '%';
            inputNumero.innerText += '%';
        }
    }
});
const operaRaiz = document.querySelector('#operaRoot');
operaRaiz === null || operaRaiz === void 0 ? void 0 : operaRaiz.addEventListener('click', () => {
    if (inputNumero) {
        let valorString = inputNumero.textContent;
        if (operacao == ' ') {
            numero1 = Number(valorString);
            operacao = '√';
            inputNumero.innerText += '√';
        }
    }
});
const operaMult = document.querySelector('#operaMult');
operaMult === null || operaMult === void 0 ? void 0 : operaMult.addEventListener('click', () => {
    if (inputNumero) {
        let valorString = inputNumero.textContent;
        if (operacao == ' ') {
            numero1 = Number(valorString);
            operacao = 'x';
            inputNumero.innerText += 'x';
        }
    }
});
const operaDiv = document.querySelector('#operaDiv');
operaDiv === null || operaDiv === void 0 ? void 0 : operaDiv.addEventListener('click', () => {
    if (inputNumero) {
        let valorString = inputNumero.textContent;
        if (operacao == ' ') {
            numero1 = Number(valorString);
            operacao = '÷';
            inputNumero.innerText += '÷';
        }
    }
});
const operaAdd = document.querySelector('#operaAdd');
operaAdd === null || operaAdd === void 0 ? void 0 : operaAdd.addEventListener('click', () => {
    if (inputNumero) {
        let valorString = inputNumero.textContent;
        if (operacao == ' ') {
            numero1 = Number(valorString);
            operacao = '+';
            inputNumero.innerText += '+';
        }
    }
});
const operaSub = document.querySelector('#operaSub');
operaSub === null || operaSub === void 0 ? void 0 : operaSub.addEventListener('click', () => {
    if (inputNumero) {
        let valorString = inputNumero.textContent;
        if (operacao == ' ') {
            numero1 = Number(valorString);
            operacao = '-';
            inputNumero.innerText += '-';
        }
    }
});
//Fórmulas das operações
const operaIgual = document.querySelector('#igual');
operaIgual === null || operaIgual === void 0 ? void 0 : operaIgual.addEventListener('click', () => {
    /*Result é o resultado da conta
    A variável valor2 é convertida em numero pois a numero2 é string
    */
    let result = 0;
    let valor2 = Number(numero2);
    switch (operacao) {
        case '+':
            result += numero1 + valor2;
            if (inputNumero)
                inputNumero.innerText = result.toString();
            break;
        case '-':
            result += numero1 - valor2;
            if (inputNumero)
                inputNumero.innerText = result.toString();
            break;
        case '÷':
            if (valor2 == 0) {
                if (inputNumero)
                    inputNumero.innerText = "Impossível dividir por zero";
                break;
            }
            result += numero1 / valor2;
            if (inputNumero)
                inputNumero.innerText = result.toString();
            break;
        case 'x':
            result += numero1 * valor2;
            if (inputNumero)
                inputNumero.innerText = result.toString();
            break;
        case '√':
            result += Math.sqrt(numero1);
            if (inputNumero)
                inputNumero.innerText = result.toString();
            break;
        case '%':
            result += (numero1 * valor2) / 100;
            if (inputNumero)
                inputNumero.innerText = result.toString();
            break;
        default:
            break;
    }
});
//Valores digitados que aparecem na tela,ficam nesta variável
const inputNumero = document.querySelector('#numero');
//Botão de limpar
const clearBtn = document.querySelector('#clear');
clearBtn === null || clearBtn === void 0 ? void 0 : clearBtn.addEventListener('click', () => {
    if (inputNumero) {
        inputNumero.innerText = ' ';
        numero1 = 0;
        numero2 = ' ';
        operacao = ' ';
    }
});
/*Cada botão representa um valor
O valor é atribuidoa varíave numero2 caso já tenha digitado a operação
*/
const num0 = document.querySelector('#num0');
num0 === null || num0 === void 0 ? void 0 : num0.addEventListener('click', () => {
    if (inputNumero)
        inputNumero.innerText += 0;
    if (operacao != ' ')
        numero2 += '0';
});
const num1 = document.querySelector('#num1');
num1 === null || num1 === void 0 ? void 0 : num1.addEventListener('click', () => {
    if (inputNumero)
        inputNumero.innerText += 1;
    if (operacao != ' ')
        numero2 += '1';
});
const num2 = document.querySelector('#num2');
num2 === null || num2 === void 0 ? void 0 : num2.addEventListener('click', () => {
    if (inputNumero)
        inputNumero.innerText += 2;
    if (operacao != ' ')
        numero2 += '2';
});
const num3 = document.querySelector('#num3');
num3 === null || num3 === void 0 ? void 0 : num3.addEventListener('click', () => {
    if (inputNumero)
        inputNumero.innerText += 3;
    if (operacao != ' ')
        numero2 += '3';
});
const num4 = document.querySelector('#num4');
num4 === null || num4 === void 0 ? void 0 : num4.addEventListener('click', () => {
    if (inputNumero)
        inputNumero.innerText += 4;
    if (operacao != ' ')
        numero2 += '4';
});
const num5 = document.querySelector('#num5');
num5 === null || num5 === void 0 ? void 0 : num5.addEventListener('click', () => {
    if (inputNumero)
        inputNumero.innerText += 5;
    if (operacao != ' ')
        numero2 += '5';
});
const num6 = document.querySelector('#num6');
num6 === null || num6 === void 0 ? void 0 : num6.addEventListener('click', () => {
    if (inputNumero)
        inputNumero.innerText += 6;
    if (operacao != ' ')
        numero2 += '6';
});
const num7 = document.querySelector('#num7');
num7 === null || num7 === void 0 ? void 0 : num7.addEventListener('click', () => {
    if (inputNumero)
        inputNumero.innerText += 7;
    if (operacao != ' ')
        numero2 += '7';
});
const num8 = document.querySelector('#num8');
num8 === null || num8 === void 0 ? void 0 : num8.addEventListener('click', () => {
    if (inputNumero)
        inputNumero.innerText += 8;
    if (operacao != ' ')
        numero2 += '8';
});
const num9 = document.querySelector('#num9');
num9 === null || num9 === void 0 ? void 0 : num9.addEventListener('click', () => {
    if (inputNumero)
        inputNumero.innerText += 9;
    if (operacao != ' ')
        numero2 += '9';
});
