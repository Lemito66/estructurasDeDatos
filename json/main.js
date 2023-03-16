//setTimeout(()=>console.log('Hola hola'), 6000); // Se ejecuta en 6 segundos

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Se ejecuta la promesa');
        reject("Error mi rey"); // Se ejecuta el catch
        resolve("pato"); // Se ejecuta el then
    }, 3000);
});

myPromise
    .then(data => console.log(`Se ejecuta la promesa ${data}`)) // Se ejecuta cuando invoco a resolve
    .catch(error => console.log(`Se ejecuta el error ${error}`)); // Se ejecuta cuando invoco a reject