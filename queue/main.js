// Implementación de la cola
// Primero que entra, primero que sale (FIFO)
class Queue {
  #items = [];

  enqueue(item) {
    this.#items.push(item); // enqueue() agrega un elemento al final del array
  }

  dequeue() {
    return this.#items.shift(); // dequeue() elimina el primer elemento del array
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  peek() {
    return this.#items[0]; // Devuelve el primer elemento de la cola
  }

  size() {
    return this.#items.length;
  }

  getItems() {
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

const consumeApi = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const id = data.map((item) => item.id);
  return id;
};

(async () => {
  const result = await consumeApi();
  for (const id of result) {
    queue.enqueue(id); // Agregamos los id al final de la cola
  }
  console.log(queue.getItems()); // [ 2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ..... 100 ]
})();

// Ejemplo con HTML

const queueRequest = new Queue();

const divRequest = document.getElementById("req");
const divResponse = document.getElementById("result");
const url = "https://jsonplaceholder.typicode.com/posts";

let i = 1;

const add = () => {
  queueRequest.enqueue(i++); // Agregamos los id al final de la cola
  //divRequest.innerHTML = queueRequest.getItems();
  showRequest();
};

const request = async () => {
  while (!queueRequest.isEmpty()) {
    const id = queueRequest.dequeue();
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    showRequest();
    divResponse.innerHTML = `<p>${data.id} ${data.title}</p> ${divResponse.innerHTML}`;
  }
};

showRequest = () => {
  const items = queueRequest.getItems();
  if (items.length === 0) {
    divRequest.innerHTML = "Sin Solicitudes";
  }
  divRequest.innerHTML = "";

  items.forEach((item) => {
    divRequest.innerHTML += `${item} |`;
  });
};

const dequeue = () => {
  queueRequest.dequeue();
  showRequest();
};