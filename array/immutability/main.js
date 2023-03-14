const numbers = [1, 2, 3, 4, 5];
const numbers2 = [1,2,3,4,5];

// Modifica el original
const mulMutable = (collection, num) => {
    for (let i = 0; i < collection.length; i++) {
        collection[i] *= num;
    }
    return collection;
}

// No modifica el original
const mulImmutable = (collection, num) => {
    const newCollection = [];
    for (let i = 0; i < collection.length; i++) {
        newCollection.push(collection[i] * num);
    }
    return newCollection;
};

console.log(mulMutable(numbers, 2));
console.log(mulImmutable(numbers, 2));

class Beer {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

}

// Modifica el  objeto original

const toUpperMutable = (beer) => {
    beer.name = beer.name.toUpperCase();
    return beer;
};

const toUpperInmutable = (beer) => {

    const newBeer = structuredClone(beer); // Clona el objeto
    newBeer.name = newBeer.name.toUpperCase();
    return newBeer;
};


const beer = new Beer('Corona', 10); 
const newBeer = toUpperInmutable(beer); // Aqui se crea un nuevo objeto y no se modifica el original

//const newBeer = toUpperMutable(beer); // Aqui se modifica el objeto original y no se crea un nuevo objeto

console.log(newBeer);
console.log(beer);


