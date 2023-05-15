

const getTasks = async () => {
    try {
        const URL = await fetch("http://127.0.0.1:8000/tasks/api/v1/tasks/");
        const response = await URL.json();
        return await response;
    } catch (error) {
        console.log(error)
    }
}

(async () => {
    const result = await getTasks();
    const onlyId = result.map(({ id }) => `Id: ${ id }`);
    for (const id of onlyId) {
        console.log(id);
    }
}
)();
