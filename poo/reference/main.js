// valores primitivos
// string, number, bigint, boolean, undefined, null, symbol

let number = 4;

const edit = (number, value) => {
    number = value;
    console.log('El valor interno es: ', number);
}
edit(number, 5);
console.log(number);