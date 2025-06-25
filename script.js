const capitalInicial = Number(prompt("Digite o capital inicial: "));
const periodo = Number(prompt("Digite o periodo em meses: "));

const taxaDeJuros = 0.05;
const capitalComposto = capitalInicial * Math.pow(1 + taxaDeJuros, periodo);

console.log(capitalComposto);  