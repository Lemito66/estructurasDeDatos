// Implementación de pila
// Último que entra, primero que sale (LIFO)

class Stack {

    #items = []; // #items es una propiedad privada

    push(item){
        this.#items.push(item); // push() agrega un elemento al final del array
    }

    pop(){
        return this.#items.pop(); // pop() elimina el último elemento del array
    }

    peek(){
        return this.#items[this.#items.length - 1]; // peek() devuelve el último elemento del array
    }

    size(){
        return this.#items.length; // size() devuelve el tamaño del array
    }

    isEmpty(){
        return this.#items.length === 0; // isEmpty() devuelve true si el array está vacío
    }

    getItems() {
        return structuredClone(this.#items); // getItems() devuelve una copia del array
    }

}
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); // 3

console.log(stack); // Stack { #items: [ 1, 2 ] }
console.log(stack.peek()); // 2
console.log(stack.size()); // 2
console.log(stack.isEmpty()); // false

const items = stack.getItems()
items.push('Lemito66')
console.log(items); // [ 1, 2 ]

// Ejemplo con Html
const inputName = document.getElementById('name');
const divContent = document.getElementById('content');

const stackName = new Stack();

const addToStack = () =>{

    stackName.push(inputName.value); // Agregamos el valor del input al stack
    showNames(); // Mostramos los elementos del stack
    inputName.value = ''; // Limpiamos el input
    inputName.focus(); // Ponemos el foco en el input
};

const showNames = () => {
    const items = stackName.getItems(); // Obtenemos una copia del stack
    divContent.innerHTML = ''; // Limpiamos el div
    items.forEach((item) => {
        divContent.innerHTML += `<p>${item}</p>`; // Agregamos los elementos del stack al div
    });
}

const popName = () => {
    stackName.pop(); // Eliminamos el último elemento del stack
    showNames(); // Mostramos los elementos del stack
}








