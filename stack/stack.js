class StackTwo {
  #items = [];

  push(item) {
    this.#items.push(item);
  }
  pop() {
    return this.#items.pop();
  }

  getItems() {
    return structuredClone(this.#items);
  }

  isEmpty() {
    return this.#items.length === 0;
  }
}

const nameStack = new StackTwo();

// Valores del HTML
const inputName = document.getElementById("name");
const divContent = document.getElementById("content");

const addToStack = () => {
  nameStack.push(inputName.value);
  showNames();
  inputName.value = "";
  inputName.focus();
};

const showNames = () => {
  const items = nameStack.getItems();
  divContent.innerHTML = "";
  items.forEach((item) => {
    divContent.innerHTML += `<p>${item}</p>`;
  });
};

const popName = () => {
  if (nameStack.isEmpty()) {
    alert("No hay nombres en la pila");
  } else {
    nameStack.pop();
    showNames();
  }
};
