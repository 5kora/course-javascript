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

// 4 - Calculo de área e perimetro
const comprimento = 10;
const largura = 5;

const areaRetangulo = (comprimento, largura) => {
    return (comprimento * largura).toFixed(2);
}

const resultadoAreaRetangulo = areaRetangulo(comprimento, largura);

const perimetroRetangulo = (comprimento, largura) => {
    return  2 * (largura + comprimento).toFixed(2);
}

const resultadoPerimetroRetangulo = perimetroRetangulo(comprimento, largura);

// 5 - Verificação de divisibilidade
const numeroA = 10;
const numeroB = 2;
const numeroC = 3;

const verificaDivisibilidade = (numeroA, numeroB) => {
    return numeroA % numeroB === 0;
}

const resultadoAB = verificaDivisibilidade(numeroA, numeroB);
const resultadoAC = verificaDivisibilidade(numeroA, numeroC);

// Atividade 1
console.log(`${celsius} graus celsius equivalem a ${celsiusToFahrenheit(celsius)} graus Fahrenheit! \n ${fahrenheit} graus Fahrenheit equivalem a ${fahrenheitToCelsius(fahrenheit)} graus celsius!`);


// Atividade 2
console.log(`O IMC para a altura ${altura} e o peso ${peso} é de: ${IMC}`);

// Atividade 3
console.log(`${stringConcatenada}`);

// Atividade 4
console.log(`o valor da area do retangulo é: ${resultadoAreaRetangulo} e o primetro do retangulo é: o valor da area do retangulo é: ${resultadoPerimetroRetangulo}`);

// Atividade 5
console.log(`${numeroA} / ${numeroB} é divisivel?  ${resultadoAB ? "Sim!" : "Não!"} ja o ${numeroA} / ${numeroC} é divisivel?  ${resultadoAC ? "Sim!" : "Não!"}`);
