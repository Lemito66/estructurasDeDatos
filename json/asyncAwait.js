/* ( async function(){
    const dataResult = await fetch("https://jsonplaceholder.typicode.com/users"); // Siempre debo tener asyn y await para que funcione
    const dataJson = await dataResult.json();
    console.log(dataJson);
})(); */

const namesApi = async () => {
  try {
    const dataResult = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ); // Siempre debo tener asyn y await para que funcione
    const dataJson = await dataResult.json();
    const onlyNames = dataJson.map((user) => `Nombre: ${user.name}`);
    return await onlyNames;
  } catch (error) {
    console.log(error);
  }
};

/* (async () => {
  const result = await namesApi();
  for (const name of result) {
    console.log(name);
  }
})();

(async () => {
  try {
    const dataResult = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const dataJson = await dataResult.json();
    const onlyUsername = dataJson.map((user) => `Username: ${user.username}`);
    for (const username of onlyUsername) {
      console.log(username);
    }
  } catch (error) {
    console.log(error);
  }
})(); */


const apiDjango = async () => {
  
  try {
    const url = await fetch("http://127.0.0.1:8000/tasks/api/v1/tasks/");
    const data = await url.json();
    return await data;
  } catch (error) {
    console.log(error)
  }
};

(async () => {
  const result = await apiDjango();
  const onlyId = result.map(({ id }) => `Id: ${ id }`);
  for (const id of onlyId) {
    console.log(id);
  }
})();
