
//23 - Elementos duplicados
const removeRepeated = (array) =>{
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
    let sum = 0
    array.forEach(element => {
        return sum +=element;
    });
    return (sum / array.length).toFixed(2);
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

// Atividade 23
const repeatedArray = ["Dollynho", 8, "Dollynho", "Dollynho", "pato", 8, "ovo", 3, 8, 8, 8, 8, "Dollynho"];
const notRepeatedArray = removeRepeated(repeatedArray)

console.log(`O array original é ${repeatedArray} após o filtro ficou: ${notRepeatedArray}`)

// Atividade 24
const array1 = [1,2,3];
const array2 = [4,5,6];

console.log(`O array 1 é ${array1}, o array 2 é ${array2} após o concat ficou: ${concatArrays(array1, array2)}`)

// Atividade 25
const intersectionArray1 = [1,2,3,4,5];
const intersectionArray2 = [4,5,6];
const intersectionResult = intersectionArrays(intersectionArray1, intersectionArray2)
console.log(`O array 1 é ${intersectionArray1}, o array 2 é ${intersectionArray2} a interseção entre eles é: ${intersectionResult}`)

// Atividade 26
const averageArray = [10,0,10];

console.log(`O array 1 é ${averageArray}, a média dos itens dele é: ${arrayAverage(averageArray)}`)