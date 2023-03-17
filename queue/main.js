// Implementación de la cola
// Primero que entra, primero que sale (FIFO)
class Queue {

    #items = [];

    enqueue(item){
        this.#items.push(item); // enqueue() agrega un elemento al final del array
    }

    dequeue(){
        return this.#items.shift(); // dequeue() elimina el primer elemento del array
    }

    isEmpty(){
        return this.#items.length === 0;
    }

    peek(){
        return this.#items[0]; // Devuelve el primer elemento de la cola
    }

    size(){
        return this.#items.length;
    }

    getItems(){

        return structuredClone(this.#items); // getItems() devuelve una copia del array
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek()); // 1
console.log(queue.getItems()); // [ 1, 2, 3]
queue.dequeue(); // 1
console.log(queue.getItems()); // [ 2, 3 ]
