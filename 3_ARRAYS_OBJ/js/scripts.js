
//23 - Elementos duplicados
const removeRepeated = (array) => {
    return Array.from(new Set(array));
}

// 24 - Concat Arrays
const concatArrays = (array1, array2) => {
    return array1.concat(array2);
}

// 25 - Interseção
const intersectionArrays = (array1, array2) => {
    return array1.filter((item) => {
        return array2.includes(item);
    })
}

// 26 - Media dos elementos

const arrayAverage = (array) => {
    let sum = array.reduce((acumulador, value) => acumulador + value, 0);
    return (sum / array.length).toFixed(2);
}

//27 - Calcular a soma de propriedades
const objetExample = {
    a: 10,
    b: 20,
    c: 30
}

const sumProperties = (obj) => {
    let sum = 0;

    for (const prop in obj) {
        if (obj.hasOwnProperty(prop) && typeof obj[prop] === "number") {
            sum += obj[prop];
        }
    }

    return sum;
}

//28 - Filtrando propriedades
const completeObj = {
    nome: 'Dollynho',
    idade: 36,
    profissao: "refrigerante",
    sabor: 'Guarana',
    top: 'nao'
}

const filterArray = ["nome", "profissao", "sabor"];

const filterProperties = (filterArray, obj) => {
    let newObject = {};

    filterArray.forEach(prop => {
        if(obj.hasOwnProperty(prop)){
            newObject[prop] = obj[prop];
        }
        return 
    });

    return newObject;
}

//29 - Concatenando objetos

const concatProperties = (obj1, obj2) => {

    return Object.assign({},obj1,obj2);;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------

// Atividade 23
const repeatedArray = ["Dollynho", 8, "Dollynho", "Dollynho", "pato", 8, "ovo", 3, 8, 8, 8, 8, "Dollynho"];
const notRepeatedArray = removeRepeated(repeatedArray)

console.log(`O array original é ${repeatedArray} após o filtro ficou: ${notRepeatedArray}`)

// Atividade 24
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log(`O array 1 é ${array1}, o array 2 é ${array2} após o concat ficou: ${concatArrays(array1, array2)}`)

// Atividade 25
const intersectionArray1 = [1, 2, 3, 4, 5];
const intersectionArray2 = [4, 5, 6];
const intersectionResult = intersectionArrays(intersectionArray1, intersectionArray2)
console.log(`O array 1 é ${intersectionArray1}, o array 2 é ${intersectionArray2} a interseção entre eles é: ${intersectionResult}`)

// Atividade 26
const averageArray = [10, 0, 10];

console.log(`O array 1 é ${averageArray}, a média dos itens dele é: ${arrayAverage(averageArray)}`)

// Atividade 27
console.log(`O objeto é ${objetExample}, a soma das props é: ${sumProperties(objetExample)}`)

// Atividade 28
const objtFiltrado = filterProperties(filterArray, completeObj)
console.log(`O objeto filtrado é:\n`)
console.log(objtFiltrado)

// Atividade 29
const concatObject = concatProperties(objetExample, completeObj)
console.log(`O objeto concatenado é:\n`)
console.log(concatObject)