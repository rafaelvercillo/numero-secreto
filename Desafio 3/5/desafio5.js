function calcularPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    console.log(`Área da sala: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro.toFixed(2)} metros`);
}

let raio = 4;
calcularPerimetroSalaCircular(raio);
