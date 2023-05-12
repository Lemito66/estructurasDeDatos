const getAPI = async (number) => {
  const response = await fetch(
    `https://api.hospitalmetropolitano.org/t/v1/tr/formularios/sv?PARAM=PRESC&&CD_ATENDIMENTO=${number}`
  );
  const data = await response.json();
  return data;
};

(async () => {
  const data = await getAPI(38042);
  console.log(data.data.map(({CODIGO, FECHA}) => `${CODIGO} ${FECHA}`));
})();
