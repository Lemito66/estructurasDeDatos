const getType = (id) => {
  const data = [];
  const options = { method: "GET" };

  return fetch(`https://pokeapi.co/api/v2/type/${id}`, options)
    .then((response) => response.json())
    .then((response) => {
      data.push(...response.damage_relations.double_damage_from);
      return data;
    })
    .catch((err) => console.error(err));
};

getType(5)
  .then((result) => console.log(result))
  .catch((err) => console.error(err));

getType(6)
  .then((result) => console.log(result))
  .catch((err) => console.error(err));

getType(8)
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
