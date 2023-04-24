const selectionSort = (arrayOfNumbers = []) => {
  for (let index = 0; index < arrayOfNumbers.length; index++) {
    let minimum = index;
    for (let j = index + 1; j < arrayOfNumbers.length; j++) {
      if (arrayOfNumbers[j] < arrayOfNumbers[minimum]) {
        minimum = j;
      }
    }
    let temp = arrayOfNumbers[index];
    arrayOfNumbers[index] = arrayOfNumbers[minimum];
    arrayOfNumbers[minimum] = temp;
  }
  return arrayOfNumbers;
};

console.log(selectionSort([-1, 5, 6, 7, 1, -2, -50]));
