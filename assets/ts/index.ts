/*Variáveis que representam números digitados
numero2 é string pois ao digitar números com mais de um dígito ele precisa ser
concatenado ao primeiro dígito ou seja digitou 1 e concaten com o segundo dígito podendo ser qualquer número
*/
let numero1:number=0
let numero2: string=' '
let operacao:string=' '

/*Operações
numero1 é convertido para number pois valorString propriamente dito já vem com string
este valor foi atribuido antes do usuário clicar na operação.
*/
const operaPorcento: HTMLButtonElement | null = document.querySelector('#operaResto');
operaPorcento?.addEventListener('click',()=>{
    if(inputNumero){
        let valorString:string | null=inputNumero.textContent
        if(operacao==' '){
            numero1=Number(valorString)
            operacao='%'
            inputNumero.innerText+='%'
        }
    }  
})

const operaRaiz: HTMLButtonElement | null = document.querySelector('#operaRoot');
operaRaiz?.addEventListener('click',()=>{
    if(inputNumero){
        let valorString:string | null=inputNumero.textContent
        if(operacao==' '){
            numero1=Number(valorString)
            operacao='√'
            inputNumero.innerText+='√'
        }
    }  
})

const operaMult: HTMLButtonElement | null = document.querySelector('#operaMult');
operaMult?.addEventListener('click',()=>{
    if(inputNumero){
        let valorString:string | null=inputNumero.textContent
        if(operacao==' '){
            numero1=Number(valorString)
            operacao='x'
            inputNumero.innerText+='x'
        }
    }  
})

const operaDiv: HTMLButtonElement | null = document.querySelector('#operaDiv');
operaDiv?.addEventListener('click',()=>{
    if(inputNumero){
        let valorString:string | null=inputNumero.textContent
        if(operacao==' '){
            numero1=Number(valorString)
            operacao='÷'
            inputNumero.innerText+='÷'
        }
    }  
})

const operaAdd: HTMLButtonElement | null = document.querySelector('#operaAdd');
operaAdd?.addEventListener('click',()=>{
    if(inputNumero){
        let valorString:string | null=inputNumero.textContent
        if(operacao==' '){
            numero1=Number(valorString)
            operacao='+'
            inputNumero.innerText+='+'
        }
    }  
})

const operaSub: HTMLButtonElement | null = document.querySelector('#operaSub');
operaSub?.addEventListener('click',()=>{
    if(inputNumero){
        let valorString:string | null=inputNumero.textContent
        if(operacao==' '){
            numero1=Number(valorString)
            operacao='-'
            inputNumero.innerText+='-'
        }
    }  
})

//Fórmulas das operações
const operaIgual: HTMLButtonElement | null = document.querySelector('#igual');
operaIgual?.addEventListener('click',()=>{
    /*Result é o resultado da conta
    A variável valor2 é convertida em numero pois a numero2 é string
    */
    let result:number=0
    let valor2:number=Number(numero2)
    switch (operacao) {
        case '+':
            result+=numero1+valor2
            if(inputNumero)inputNumero.innerText=result.toString()
            break;
        case '-':
            result+=numero1-valor2
            if(inputNumero)inputNumero.innerText=result.toString()
            break;     
        case '÷':
            if(valor2==0){
                if(inputNumero)inputNumero.innerText="Impossível dividir por zero"
                break
            }
            result+=numero1/valor2
            if(inputNumero)inputNumero.innerText=result.toString()
            break;
        case 'x':
            result+=numero1*valor2
            if(inputNumero)inputNumero.innerText=result.toString()
            break;  
        case '√':
            result+=Math.sqrt(numero1)
            if(inputNumero)inputNumero.innerText=result.toString()
            break;
        case '%':
            result+=(numero1*valor2)/100
            if(inputNumero)inputNumero.innerText=result.toString()
            break;         
        default:
            break;
    }
})

//Valores digitados que aparecem na tela,ficam nesta variável
const inputNumero:HTMLParagraphElement | null =document.querySelector('#numero')

//Botão de limpar
const clearBtn:HTMLButtonElement | null = document.querySelector('#clear')
clearBtn?.addEventListener('click',()=>{
    if(inputNumero){
        inputNumero.innerText=' '
        numero1=0
        numero2=' '
        operacao=' '
    }
})

/*Cada botão representa um valor
O valor é atribuidoa varíave numero2 caso já tenha digitado a operação
*/
const num0: HTMLButtonElement | null = document.querySelector('#num0');
num0?.addEventListener('click',()=>{
    if(inputNumero)inputNumero.innerText+=0
    if(operacao!=' ')numero2+='0'
})

const num1: HTMLButtonElement | null = document.querySelector('#num1');
num1?.addEventListener('click',()=>{
    if(inputNumero)inputNumero.innerText+=1
    if(operacao!=' ')numero2+='1'
})

const num2: HTMLButtonElement | null = document.querySelector('#num2');
num2?.addEventListener('click',()=>{
    if(inputNumero)inputNumero.innerText+=2
    if(operacao!=' ')numero2+='2'
})

const num3: HTMLButtonElement | null = document.querySelector('#num3');
num3?.addEventListener('click',()=>{
    if(inputNumero)inputNumero.innerText+=3
    if(operacao!=' ')numero2+='3'
})

const num4: HTMLButtonElement | null = document.querySelector('#num4');
num4?.addEventListener('click',()=>{
    if(inputNumero)inputNumero.innerText+=4
    if(operacao!=' ')numero2+='4'
})

const num5: HTMLButtonElement | null = document.querySelector('#num5');
num5?.addEventListener('click',()=>{
    if(inputNumero)inputNumero.innerText+=5
    if(operacao!=' ')numero2+='5'
})

const num6: HTMLButtonElement | null = document.querySelector('#num6');
num6?.addEventListener('click',()=>{
    if(inputNumero)inputNumero.innerText+=6
    if(operacao!=' ')numero2+='6'
})

const num7: HTMLButtonElement | null = document.querySelector('#num7');
num7?.addEventListener('click',()=>{
    if(inputNumero)inputNumero.innerText+=7
    if(operacao!=' ')numero2+='7'
})

const num8: HTMLButtonElement | null = document.querySelector('#num8');
num8?.addEventListener('click',()=>{
    if(inputNumero)inputNumero.innerText+=8
    if(operacao!=' ')numero2+='8'
})

const num9: HTMLButtonElement | null = document.querySelector('#num9');
num9?.addEventListener('click',()=>{
    if(inputNumero)inputNumero.innerText+=9
    if(operacao!=' ')numero2+='9'
})
