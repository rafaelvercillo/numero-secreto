let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function verificarCliqueConsole() {
    console.log('O botão foi clicado');
}

function botaoAlert() {
    alert('Eu amo JS');
}
 function botaoPrompt() {
    let cidade = prompt('Diga o nome de uma cidade');
    alert(`Estive em ${cidade} e lembrei de você`);
 }

 function botaoSoma() {
    var numero1 = parseInt(prompt('Digite um número :'));
    var numero2 = parseInt(prompt('Digite outro número :'));
    let soma = numero1 + numero2
    alert(`${numero1} + ${numero2} = ${soma}`)

    // console.log(numero1, numero2);
 }