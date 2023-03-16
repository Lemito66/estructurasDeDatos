const numbers = [1, 2, 3, 4, 5];

// forma estructurada

const sumatoriaEstructurada = (collection) => {
    let sum = 0;
    for (let i = 0; i < collection.length; i++) {
        sum += collection[i];
    }
    return sum;
};

console.log(sumatoriaEstructurada(numbers));

// Usando reduce

const sumatoriaReduce = (collection) => {
    return collection.reduce((sum, number) => sum + number, 0); // Hace un recorrido y luego realice la operacion, empieza en 0
};

console.log(sumatoriaReduce(numbers));