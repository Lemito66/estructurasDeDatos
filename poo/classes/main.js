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

// Herencia

class Student extends People {

    // Se puede reutilizar funcionalidades con la herencia

    constructor(name, lastname, career){
        super(name, lastname); // super hace referencia a la clase padre
        this.career = career;
    }

    hi(){
        // Esto es una sobrecarga de metodos o tambien se le conoce como polimorfismo
        return `${super.hi()} and my career is ${this.career}`;
    }

    carerrDetails(){
        return `My career is ${this.career}`;
    }

}

// Objeto hijo
const student = new Student("Emill", "Logroño", "Sistem Engineer");
console.log(student.hi());
console.log(student.carerrDetails());