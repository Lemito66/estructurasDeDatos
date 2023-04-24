const bubbleSort = (arrayOfNumbers = []) => {
  for (let index = 0; index < arrayOfNumbers.length; index++) {
    let sorted = true;
    for (let j = 0; j < arrayOfNumbers.length -1; j++) {
      if (arrayOfNumbers[j] > arrayOfNumbers[j + 1]) {
        sorted = false;
        let temp = arrayOfNumbers[j];
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

console.log(bubbleSort([5,9,10,3,-1]))
