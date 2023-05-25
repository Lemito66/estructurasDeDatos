/*
Recibimos una matriz de cadenas de texto. Tenemos que localizar la posición de la palabra "JavaScript" en la matriz y devolver su posición como un array de dos elementos: el índice de la fila y el índice de la columna.
Si no encuentra la palabra debe devolver [-1, -1]. Usa el siguiente código como punto de partida: 
 */

function findJavaScript(matrix) {
  // tu código aquí
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const element = row[j];
      if (element === "JavaScript") {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

const matrix = [
  ["HTML", "CSS", "JavaScript"],
  ["Java", "C++", "Python"],
  ["Ruby", "Go", "Swift"],
];

const position = findJavaScript(matrix);
console.log(position); // -> [0, 2]

const findJavaScript2 = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    fila = matrix[i];
    for (let j = 0; j < fila.length; j++) {
      const palabra = fila[j];
      if (palabra === "JavaScript") {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};

console.log(findJavaScript2(matrix));
