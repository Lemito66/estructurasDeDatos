const terapias = {
    "ESPIROMETRIA SIMPLE 1 VEZ AL DIA": false,
    "LAVADO NASAL 1 VEZ AL DIA": false,
    "NEBULIZACION 1 VEZ AL DIA": true
}

// How to iterate over an object
for (const key in terapias) {
    if (terapias[key] === true) {
        console.log(key, terapias[key]);
    } /* else {
        console.log(key, terapias[key]);
    } */
    //console.log(key, terapias[key])
}
