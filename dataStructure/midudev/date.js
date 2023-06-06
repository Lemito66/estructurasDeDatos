
const cargarFechaActual = () => {
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();

    const fechaFormateada = `${dia}-${mes}-${anio} ${hora}:${minutos}:${segundos}`;
    return fechaFormateada;
    //console.log(FormularioDeRegistro.fechaActual);
}

console.log(cargarFechaActual());


