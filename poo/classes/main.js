const juan = new Object(); // Creando un objeto
juan.name = "Juan"; // Agregando propiedades
juan.lastname = "Perez";

console.log(juan);

// clase 

class People {

    constructor(name, lastname){
        this.name = name; // this hace referencia al objeto
        this.lastname = lastname;
    }

    hi(){
        return `Hi, my name is ${this.name} ${this.lastname}`;
    }

    fullName(){
        return `${this.name} ${this.lastname}`;
    }
}

const emill = new People("Emill", "Logroño"); // Creando un objeto

console.log(emill);

console.log(emill.hi());

console.log(emill.fullName());