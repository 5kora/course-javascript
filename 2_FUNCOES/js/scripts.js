// 15 - Par ou Impar

const evenOrOdd = (num) => {
    if (num % 2 === 0) {
        return `O numero ${num} é par!`
    } else {
        return `O numero ${num} é impar!`
    }
}

//16 - Fatorial

const calcFactorial = (num) => {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * calcFactorial(num - 1)
    }
}

//17 - Min e max

const maxValue = (num1, num2) => {
    if (num1 > num2) {
        return `O maior valor entre ${num1} e ${num2} é: ${num1}`;
    } else {
        return `O maior valor entre ${num1} e ${num2} é: ${num2}`;
    }
}

const minValue = (num1, num2) => {
    if (num1 > num2) {
        return `O menor valor entre ${num1} e ${num2} é: ${num2}`;
    } else {
        return `O menor valor entre ${num1} e ${num2} é: ${num1}`;
    }
}

// 18 - inversão de string

const stringRevert = (string) => {
    return string.split("").reverse().join("");
}

// 19 - Contagem de vogais

const vowelCounter = (string) => {
    let vowel = "AEIOU";
    let stringSplitted = string.toUpperCase().split("");
    let counter = 0;
    stringSplitted.forEach(letter => {
        if (vowel.includes(letter)) {
            counter++;
        }
    });

    return `A palavra ${string} contem ${counter} vogais`;
}

// 20 - Palindromo

const isPalindrome = (string) => {
    let stringReverse = string.split("").reverse().join("");
    return string.toUpperCase() === stringReverse.toUpperCase();
}

// 21 - Array de numeros aleatorios
const randomArray = (arraySize, min, max) => {
    return Array.from({ length: arraySize }, () => Math.floor(Math.random() * (max - min) + min))
}

const returnRandomArray = randomArray(10, 6, 23);

// 22 - Elemento mais frequente
const mostFrequent = (array) => {
    return array.sort((a, b) =>
        array.filter(x => x === a).length
        - array.filter(x => x === b).length).pop()
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

// Atividade 15
console.log(evenOrOdd(4));
console.log(evenOrOdd(9));

// Atividade 16
console.log(calcFactorial(4));
console.log(calcFactorial(3));

// Atividade 17
console.log(maxValue(4, 8));
console.log(minValue(4, 8));

// Atividade 18
console.log(stringRevert("Dollynho"));

// Atividade 19
console.log(vowelCounter("Dollynho"));

// Atividade 20
console.log(isPalindrome("Ana"));
console.log(isPalindrome("Mao"));
console.log(isPalindrome("Roma é Amor"));

// Atividade 21
console.log(`O vetor é: ${returnRandomArray}`);

// Atividade 22
const arrayExample = ["Dollynho", 8, "Dollynho", "Dollynho", "pato", 8, "ovo", 3, 8, 8, 8, 8, "Dollynho"];
const mostFrequentElement = mostFrequent(arrayExample)

console.log(`O elemento mais presente do vetor ${arrayExample} é: ${mostFrequentElement}`)
