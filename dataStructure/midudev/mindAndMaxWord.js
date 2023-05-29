/*
En una biblioteca queremos saber qué libro es el que menos páginas tiene y el que más páginas. Por suerte, no hay dos libros con el mismo número de páginas.


Necesitamos que la función reciba un array de números, sin ordenar, y que devuelva un array de dos posiciones con el índice del libro con menos páginas y el índice del libro con más páginas. 
*/

function minAndMaxWord(words) {
  // tu código aquí
  let min = words[0];
  let max = words[0];
  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i] > max) {
      max = words[i];
      maxIndex = i;
    } else if (words[i] < min) {
      min = words[i];
      minIndex = i;
    }
  }
  return [minIndex, maxIndex];
}

console.log(minAndMaxWord([5, 2, 0, 10, 6]));