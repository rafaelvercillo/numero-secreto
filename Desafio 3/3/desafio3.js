function converterDolar(valorEmDolar) {
    let cotacoaDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacoaDolar;
    return valorEmReais.toFixed(2);

}

let valorEmDolar = 50;
let valorEmReais = converterDolar(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);
