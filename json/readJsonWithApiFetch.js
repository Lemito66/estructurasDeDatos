// Letendo nuestro archivo json con el api fetch


fetch("people.json")
    .then((data) => data.json())
    .then((json) => {
        const people = json;
        console.log(people.name);
        for (const skill of people.skills) {
            console.log(`Habilidades: ${skill.toUpperCase()}`);
        }
})
