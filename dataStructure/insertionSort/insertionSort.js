// Método de Inserción

const insertionSort = (arrayOfNumbers = []) => {
  const length = arrayOfNumbers.length;
  for (let index = 1; index < length; index++) {
    const temp = arrayOfNumbers[index];
    j = index - 1;
    while (j >= 0 && temp < arrayOfNumbers[j]) {
      arrayOfNumbers[j + 1] = arrayOfNumbers[j];
      arrayOfNumbers[j] = temp;
      j -= 1;
    }
  }
  return arrayOfNumbers;
};

console.log(insertionSort([5, 3, 0, 1, 0]));
