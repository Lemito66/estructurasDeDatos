const numbers = [1, 2, 3, 4,5,6,7,8];

console.log(numbers.filter((pairs)=> pairs % 2 === 0));

console.log(numbers.filter((moreOfThree)=> moreOfThree > 3));


// Encontrar los nombres que empiezan con la letra "a"

const nombres = ['Ana', 'Juan', 'Pedro', 'Antonio', 'Alberto', 'Andrea', 'Sofia', 'Alicia'];

const finLetterA  = (collection, letter) => {
    const upperLetter = letter.toUpperCase();
    return collection.filter((name) => name[0].toUpperCase() === upperLetter);
};

const finalLetterA = (collection, letter) => {
    const upperLetter = letter.toUpperCase();
    return collection.filter((name) => name[name.length - 1].toUpperCase() === upperLetter);
};

console.log(finLetterA(nombres, 'a'));

console.log(finalLetterA(nombres, 'a'));