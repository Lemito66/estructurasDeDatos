const numbers = [1, 2, 3, 4, 5];

// En map se retorna un nuevo array
const sumNumber = (collection, num) => {
    return collection.map((number) => number + num);
};

console.log(sumNumber(numbers, 2));
console.log(numbers)