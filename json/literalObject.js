// Objetos literales

const sale = {
  customer: "Emill Logroño",
  total: 2500,
  items: [
    {
      name: "Monitor",
      price: 500,
    },
    {
      name: "Teclado",
      price: 100,
    },
    {
      name: "Mouse",
      price: 50,
    },
  ],
  showItems() {
    /* this.items.forEach((item) => {
      console.log(`Item: ${item.name}`);
    }); */
    for (let itemNumber = 0; itemNumber < this.items.length; itemNumber++) {
        console.log(`Item ${itemNumber+1}: ${this.items[itemNumber].name}`)
    }
  },
  showInfo() {
    console.log("La información de la venta es:");
    console.log(`Cliente: ${this.customer}, Total: ${this.total}`); // this hace referencia al objeto literal
    this.showItems();
  }
};

sale.showInfo();