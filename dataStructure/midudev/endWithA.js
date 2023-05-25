/* Crear una función que reciba un array de palabras y devuelva true si todas las palabras terminan con la letra "a" y false si al menos una palabra no termina con la letra "a".


Usa el método endsWith() de string para resolverlo. */

function endWithA(words) {
  // tu código aquí
  /* let counter = 0;
    for (const word of words) {
        if (word.endsWith('a')) {
            counter++;
        }
    }
    if (counter === words.length) {
        return true;
    }else{
        return false;
    } */

  return words.every((word) => word.endsWith("a"));
}

console.log(endWithA(["casa", "asa", "taza", "coche"]));
console.log(endWithA(["casa", "asa", "taza"]));

//console.log('asa'.endsWith('a')) // true
