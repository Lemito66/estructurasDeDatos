const getApi = async (number) => {
    const response = await fetch(
        `http://api.hospitalmetropolitano.org/t/v1/terapia-respiratoria/estados?CD_PRE_MED${number}}`
    );
    const data = await response.json();
    return data;
    }

(async () => {
    const data = await getApi(203786);
    console.log(data.data);
}   
)();