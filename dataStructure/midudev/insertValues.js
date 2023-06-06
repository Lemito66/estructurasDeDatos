const insertValues = (number) => {
  const array = [];
  array.push(number);
  return array;
};
console.log(insertValues(10));

const insertObject = (object) => {
  const values = {};
  if (object in values) {
    values[object] = true;
  } else {
    values[object] = false;
  }
  return values;
};
const names = {
  name: "hola",
  name2: "hola2",
  name3: "hola3",
};
console.log(insertObject("hola"));
