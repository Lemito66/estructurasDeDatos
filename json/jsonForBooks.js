const readJson = async () => {
    const response = await fetch("books.json");
    const data = await response.json();
    return data;
};

(async () => {
    const data = await readJson();
    console.log(data);
})();


