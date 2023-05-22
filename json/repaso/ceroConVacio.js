const vacio = "";
const cero = 0;

console.log(vacio == cero);
console.log(cero === vacio);

Button.estado === ""
  ? "Sin Revisión"
  : Button.estado === 1
  ? "En Revisión"
  : Button.estado === 0
  ? "Finalizado"
  : "Sin Revisión";

Button.estado === ""
  ? "rgb(38,321,11)"
  : Button.estado === 1
  ? "rgb(231,201,11)"
  : Button.estado === 0
  ? "rgb(231,11,11) "
  : "rgb(168, 190, 214)";

if (Button.estado === "") {
    console.log("Sin Revisión");
} else if (Button.estado === 1) {
    console.log("En Revisión");
}else if (Button.estado === 0) {
    console.log("Finalizado");
}else {
    console.log("Sin Revisión");
}


oncreate: (e) =>{
    //console.log(e);
    Button.obtenerEstado(_i._aData.CD_PRE_MED);
    //console.log(_i._aData);
    /* console.log(Button.estado);
    console.log(Button.data); */
    console.log(Button.data);
}
    

