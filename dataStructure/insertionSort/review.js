const insertionSort = (arrayOfNumbers) => {
  for (let index = 1; index < arrayOfNumbers.length; index++) {
    let temp = arrayOfNumbers[index];
    let j = index - 1;
    while (j >= 0 && temp < arrayOfNumbers[j]) {
      arrayOfNumbers[j + 1] = arrayOfNumbers[j];
      arrayOfNumbers[j] = temp;
      j -= 1;
    }
  }
  return arrayOfNumbers;
};

console.log(insertionSort([-1,-50,50,10,100]));
