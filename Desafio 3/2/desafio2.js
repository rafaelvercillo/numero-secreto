function calculadorFatorial(numero) {
    if (numero == 0 || numero == 1) {
        return 1;
    }

    let fatorial = 1;
    
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}

const input = document.querySelector('#num');
const numero = input.value;

// let numero = 2;
let resultado = calculadorFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);