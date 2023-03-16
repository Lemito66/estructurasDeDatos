const names = ["John", "Paul", "George", "Ringo"];

// Modo Estructurado

const removeName = (collection, name) => {
  const result = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] !== name) {
      result.push(collection[i]);
    }
  }
  return result;
};

console.log(removeName(names, "Paul"));


// Usando funciones existentes

const removeNameWithFunction = (collection, name) => {
    return collection.filter((item) => item !== name); // Retorna un nuevo que sea diferente al nombre que yo ingrese como parametro
};

console.log(removeNameWithFunction(names, "Paul"));