// Método Lineal

const linearSearch = (data, arrayOfNumbers) => {
  for (let index = 0; index < arrayOfNumbers.length; index++) {
    if (arrayOfNumbers[index] === data) {
      return index;
    }
  }
  return -1;
};

console.log(linearSearch(9, [5, 9, 6, 3, 2, 1, 0, 6]));
