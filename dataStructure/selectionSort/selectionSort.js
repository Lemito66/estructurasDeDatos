// Método de Selección

const selectionSort = (arrayOfNumbers = []) => {
  const length = arrayOfNumbers.length;
  for (let index = 0; index < length; index++) {
    let min = index;
    for (let j = index + 1; j < length; j++) {
      if (arrayOfNumbers[j] < arrayOfNumbers[min]) {
        min = j;
      }
    }
    const temp = arrayOfNumbers[index];
    arrayOfNumbers[index] = arrayOfNumbers[min];
    arrayOfNumbers[min] = temp;
  }
  return arrayOfNumbers;
};

console.log(selectionSort([8, 10, 6, 7, 5]));
console.log(selectionSort([5, 2, 8, 3, 1]));
