// 1
function exibirOla() {
    console.log('Olá, mundo!');
}
exibirOla();

// 2
let nome = 'Rafael';
function exibirOlaNome() {
    console.log(`Olá ${nome}!`);
}
exibirOlaNome();

// 3
let numero = parseInt(Math.random() * 10 + 1);
function calcularDobro(numero) {
    return numero * 2;
}
let resultadoDobro = calcularDobro(numero);
console.log(`O resultado do dobro de ${numero} é ${resultadoDobro}`);

// 4
let n1 = parseInt(Math.random() * 10 + 1);
let n2 = parseInt(Math.random() * 10 + 1);
let n3 = parseInt(Math.random() * 10 + 1);
// console.log(`O primeiro n° é ${n1}, o segundo n° é ${n2} e o terceiro n° é ${n3}.`);
function mediaNumeros(n1, n2, n3) {
    return n1 + n2 + n3 / 3
}
let resultadoMedia = mediaNumeros(n1, n2, n3);
console.log(`O resultado da media dos números ${n1}, ${n2}, ${n3} é ${resultadoMedia}`);

// 5
function encontrarMaiorNumero (n1, n2) {
    return n1 > n2 ? n1 : n2;
}
let maiorNumero = encontrarMaiorNumero(n1, n2);
console.log(`O maior número entre ${n1} e ${n2} é ${maiorNumero}`);

// 6
function dobroNumero(numero) {
    return numero * numero;
}
let resultadoDobroNumero = dobroNumero(numero);
console.log(`O resultado de ${numero} ao quadrado é ${resultadoDobroNumero}`);
