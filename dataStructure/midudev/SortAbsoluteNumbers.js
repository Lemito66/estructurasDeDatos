/* 
Recibes una lista de números. Debes ordenar los números de menor a mayor según su valor absoluto. Eso quiere decir que los números negativos pierden el signo y se ordenan como si fueran positivos.


Por ejemplo, si recibes [5, -10, -2, -25, -7] deberías devolver [-2, 5, -7, -10, -25].


Puedes usar el método Math.abs(num) para obtener el valor absoluto de un número.
 */

function sortAbsoluteNumbers(numbers) {
  // tu código aquí
    return numbers.sort((a, b) => Math.abs(a) - Math.abs(b));
}

console.log(sortAbsoluteNumbers([5, -10, -2, -25, -7]));


const onlyEven = (numbers) => {
    return numbers.filter((number) => number % 2 === 0);
}

const otherArray = (numbers) => {
    return numbers.map((number)=> number * 2);
}


console.log(onlyEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(otherArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
