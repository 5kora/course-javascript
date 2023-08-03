
//23 - Elementos duplicados
const removeRepeated = (array) =>{
    return Array.from(new Set(array));
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

// Atividade 23
const repeatedArray = ["Dollynho", 8, "Dollynho", "Dollynho", "pato", 8, "ovo", 3, 8, 8, 8, 8, "Dollynho"];
const notRepeatedArray = removeRepeated(repeatedArray)

console.log(`O array original é ${repeatedArray} após o filtro ficou: ${notRepeatedArray}`)