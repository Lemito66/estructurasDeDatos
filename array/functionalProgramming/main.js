// función primera clase

function hi() {
    console.log("Hola")
}

// función guardada en variable
const h = hi;

// ejecución de la función
h();

function sum(a, b) {
    return a + b;
}

const result = sum(2, 3);
console.log(sum(2,3))


//Función con orden superior.
function some(fn){
    console.log('Antes');
    fn();

    console.log('Después');
}
some(h);




