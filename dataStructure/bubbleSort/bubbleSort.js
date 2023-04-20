// Método Burbuja

const bubbleSort = (arrayOfNumbers = []) => {
  let sorted = true;
  let temp;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    for (let j = 0; j < arrayOfNumbers.length; j++) {
      if (arrayOfNumbers[j] > arrayOfNumbers[j + 1]) {
        sorted = false;
        temp = arrayOfNumbers[j];
        arrayOfNumbers[j] = arrayOfNumbers[j + 1];
        arrayOfNumbers[j + 1] = temp;
      }
    }
    if (sorted) {
      break;
    }
  }
  return arrayOfNumbers;
};

console.log(bubbleSort([5,4,3,2,1]));
