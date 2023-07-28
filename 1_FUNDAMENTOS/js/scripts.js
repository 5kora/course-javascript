// Variaveis e tipos de dados

// 1 - Conversão de temperatura
const celsius = 90;
const fahrenheit = 30

const celsiusToFahrenheit = (tempCelsius) => {
    return ((tempCelsius * (9 / 5)) + 35);
}

const fahrenheitToCelsius = (tempFahrenheit) => {
    return ((tempFahrenheit - 35) * (5 / 9));
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
    return 2 * (largura + comprimento).toFixed(2);
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

// 6 - Faixa etaria
const idade1 = 50;
const idade2 = 5;

const faixaEtaria = (idade) => {
    if (idade >= 0 && idade <= 12) {
        return "criança";
    } else if (idade >= 13 && idade <= 17) {
        return "adolescente";
    } else if (idade >= 18 && idade <= 59) {
        return "adulto"
    } else if (idade >= 60) {
        return "idoso";
    } else {
        return "idade invalida!";
    }
}

const resultadoIdade1 = faixaEtaria(idade1);
const resultadoIdade2 = faixaEtaria(idade2);

// 7 - Comparação de numeros
const comparador1 = 3;
const comparador2 = 9;

const comparador = (comparador1, comparador2) => {
    if (comparador1 < comparador2) {
        return `O numero ${comparador1} é MENOR que o numero ${comparador2}`;
    } else if (comparador1 === comparador2) {
        return `O numero ${comparador1} é IGUAL que o numero ${comparador2}`;
    } else {
        return `O numero ${comparador1} é MAIOR que o numero ${comparador2}`;
    }
}

const resultadoComparador = comparador(comparador1, comparador2);

// 8 - Calculadora com switch

const calculadora = (num1, num2, op) => {
    switch (op) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            return num1 / num2;
    }
}

const resultadoCalculadora1 = calculadora(5, 3, "+");
const resultadoCalculadora2 = calculadora(5, 3, "*");

// 9 - Valor da tarifa

const calcTarifa = (userAge, isStudent) => {
    if (userAge < 6) {
        return 0;
    } else if (userAge > 6 && userAge < 60) {
        return isStudent ? 2.50 * 0.5 : 2.50;
    } else if (userAge >= 60) {
        return isStudent ? 2.50 * 0.5 : 2.50 * (1 - 0.3);
    } else {
        return "Idade invalida!"
    }
}

// 10 - Somatorio 1 a N
const somatioN = (n) => {
    let aux = 1;
    let somatorio = 1;
    while (aux < n) {
        aux++;
        somatorio += aux
    }
    return somatorio;
}

// 11 - Tabuada
const baseTabuada = 3;

const tabuada = (baseTabuada) => {
    let message = `O valor da tabuada de ${baseTabuada} é: \n`

    for (let i = 1; i <= 10; i++) {
        message += ` ${i} X ${baseTabuada} = ${baseTabuada * i}\n`
    }

    return message;
}

// 12 - Numeros primos

const baseNumeroPrimo = 50;

const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= num; i++) {
        if (num % i === 0 && num !==i) {
            return false;
        }
    }

    return true;
}

const primeNumberList = (baseNumeroPrimo) => {
    for(let i = 2; i <= baseNumeroPrimo; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

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

// Atividade 6
console.log(`A idade ${idade1} é considerada: ${resultadoIdade1} \n A idade ${idade2} é considerada: ${resultadoIdade2} `);

// Atividade 7
console.log(`${resultadoComparador}`);

// Atividade 8
console.log(`O resultado de 5 + 3 é ${resultadoCalculadora1} \n O resultado de 5 * 3 é ${resultadoCalculadora2}`);

// Atividade 9
console.log(`O resultado idade = 50 e estudante é ${calcTarifa(50, true)} \n O resultado idade = 60 e não estudante é ${calcTarifa(60, false)} `);

// Atividade 10
console.log(`O somatorio de 3 é: ${somatioN(3)} \n somatorio de 10 é: ${somatioN(10)}`);

// Atividade 11
console.log(`${tabuada(baseTabuada)}`)

// Atividade 12
primeNumberList(baseNumeroPrimo)