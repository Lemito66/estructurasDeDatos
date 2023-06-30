const frutas = {
    "ESPIROMETRIA CON BRONCODILATADOR 1 VEZ AL DIA": true,
    "PRESION POSITIVA INTERMITENTE-DRENAJE POSTURAL - 1 VEZ AL DIA": false,
    "NEBULIZACION 1 VEZ AL DIA": false
}


const hayAlgunaFruta = (fruta) => Object.values(fruta).some(Boolean);

console.log(hayAlgunaFruta(frutas)); // true

