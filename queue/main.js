// Implementación de la cola
// Primero que entra, primero que sale (FIFO)
class Queue {

    #items = [];

    isEmpty(){
        return this.#items.length === 0;
    }

    peek(){
        return this.#items[0]; // Devuelve el primer elemento de la cola
    }
}