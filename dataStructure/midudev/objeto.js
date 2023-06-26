/* const PRESCRIPCION:{
    "ESPIROMETRIA SIMPLE 1 VEZ AL DIA":true,
    "SUCCION 1 VEZ AL DIA":true,
    "PRESION POSITIVA INTERMITENTE 1 VEZ AL DIA":false
    }

    
const "PRESCRIPCION":{
     [
      {"nombre" : "ESPIROMETRIA SIMPLE 1 VEZ AL DIA", "seleccionado" : "true"},
      {"nombre" : "SUCCION 1 VEZ AL DIA", "seleccionado" : "true"},
      {"nombre" : "PRESION POSITIVA INTERMITENTE 1 VEZ AL DIA", "seleccionado" : "false"}
     ]
    } */

const example = {
  PRESCRIPCION: {
    items: [
      { nombre: "ESPIROMETRIA SIMPLE 1 VEZ AL DIA", seleccionado: true },
      { nombre: "SUCCION 1 VEZ AL DIA", seleccionado: true },
      {
        nombre: "PRESION POSITIVA INTERMITENTE 1 VEZ AL DIA",
        seleccionado: false,
      },
    ],
  },
};

example.PRESCRIPCION.items.forEach(({ nombre, seleccionado }) => {
  //console.log(nombre, seleccionado);
});

exampleTwo = {
  PRESCRIPCION: {
    items: [],
  },
};

exampleTwo.PRESCRIPCION.items.push({
  nombre: "ESPIROMETRIA SIMPLE 1 VEZ AL DIA",
  seleccionado: true,
});

let ChangeObject = {
  "ESPIROMETRIA CON BRONCODILATADOR 1 VEZ AL DIA": false,
  "ESPIROMETRIA SIMPLE 1 VEZ AL DIA": true,
  "LAVADO NASAL 2 VECES AL DIA": true,
};

const change = (prescripcionAntes) => {
  const newObject = {
    PRESCRIPCIONANTES: prescripcionAntes,
    DATOS: [],
  };
  Object.entries(prescripcionAntes).forEach(([nombre, seleccionado]) => {
    if (seleccionado === true) {
      newObject.DATOS.push({
        nombre,
        seleccionado,
      });
    }
  });
  return newObject;
};

console.log(change(ChangeObject));
