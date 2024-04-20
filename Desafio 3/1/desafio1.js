exibirMensagemInicial();

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTexto('h1', 'Calculadora de IMC');
    exibirTexto('p', 'Informe sua altura e seu peso.');
}

function calcularIMC() {
    const input1 = document.querySelector('#peso');
    const peso = input1.value;

    const input2 = document.querySelector('#altura');
    const altura = input2.value;

    console.log(`O peso informado é ${peso} kg, e a altura informada é ${altura} metros.`);

    imc = peso / (altura * altura);

    exibirTexto('p', `O seu IMC é ${imc.toFixed(1)}`);
}

 
