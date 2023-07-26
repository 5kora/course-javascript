// Variaveis e tipos de dados

// 1 - Conversão de temperatura
const celsius = 90;
const fahrenheit = 30

const celsiusToFahrenheit = ( tempCelsius) => {
    return ((tempCelsius * (9/5)) + 35);
}

const fahrenheitToCelsius = ( tempFahrenheit) => {
    return ((tempFahrenheit -35  ) * (5/9));
}

// 2 - Calculo de IMC
const altura = 1.80;
const peso = 78;

const calcIMC = (peso, altura) => {
    return (peso / (altura * altura)).toFixed(2);
}
const IMC = calcIMC(peso, altura);

// 3 - String concat
const nome = 'Marcos';
const idade = 26;
const cidade = "Pinhais";

const concatString = (nome, idade, cidade) => {
    return (`Olá meu nome é ${nome}, eu tenho ${idade} anos e moro em ${cidade}`);
}

const stringConcatenada = concatString(nome, idade, cidade);

console.log(`${celsius} graus celsius equivalem a ${celsiusToFahrenheit(celsius)} graus Fahrenheit!`);
console.log(`${fahrenheit} graus Fahrenheit equivalem a ${fahrenheitToCelsius(fahrenheit)} graus celsius!`);
console.log(`O IMC para a altura ${altura} e o peso ${peso} é de: ${IMC}`);
console.log(`${stringConcatenada}`);