const cargarFechaActual = () => {
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mesNormal = fechaActual.getMonth() + 1;
    const mes = mesNormal < 10 ? `0${mesNormal}` : mesNormal;
    const anio = fechaActual.getFullYear();
    const hora = fechaActual.getHours();
    const minutosNormal = fechaActual.getMinutes();
    const minutos = minutosNormal < 10 ? `0${minutosNormal}` : minutosNormal;

    const fechaFormateada = `${dia}-${mes}-${anio} ${hora}:${minutos}`;
    return fechaFormateada;
    //console.log(FormularioDeRegistro.fechaActual);
}

console.log(cargarFechaActual());

const cargarHoraActual =  () => {
    const fechaActual = new Date();
    const hora = fechaActual.getHours();
    const minutosNormal = fechaActual.getMinutes();
    const minutos = minutosNormal < 10 ? `0${minutosNormal}` : minutosNormal;

    const horaFormateada = `${hora}:${minutos}`;
    return horaFormateada;
    //console.log(FormularioDeRegistro.horaActual);
}

console.log(cargarHoraActual());