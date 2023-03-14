let array = [1, 2, 3, 4, 5];

const showArray = (array) => {
    /* array.forEach((element) => {
        console.log(element);
    }); */
    /* for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
        
    } */
    for (const element of array) {
        console.log(element);
    }
};

//showArray(array);

array.push(6);
showArray(array);