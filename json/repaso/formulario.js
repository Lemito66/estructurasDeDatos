const formulario = {
    CD_FORMULARIO: 17,
    FRECUENCIA_CARDIACA: `'${vnode.dom["inputFrecuenciaCardiaca"].value}'`,
    FRECUENCIA_RESPIRATORIA: `'${vnode.dom["inputFrecuenciaRespiratoria"].value}'`,
    PESO: `'${vnode.dom["inputPeso"].value}'`,
    ESCALA_DOLOR: `'${vnode.dom["inputEscalaDolor"].value}'`,
    CD_ATENDIMENTO: `${Pedido.data.AT_MV}`,
    USUARIO: `'${vnode.dom["inputUsuario"].value}'`,
    // ----------------------------------
    CD_PRE_MED: valorPrescripcion(),
    CD_SECUENCIAL: `${vnode.dom["inputCod"].value}`, 
    FECHA_REGISTRO: `to_date('${vnode.dom["inputFecha"].value}','DD-MM-YY')`,
    HORA_REGISTRO: `'${vnode.dom["inputHora"].value}'`,
    FRECUENCIA_DIARIA: `'${
      vnode.dom["inputFrecuenciaAlDia"].options[
        vnode.dom["inputFrecuenciaAlDia"].selectedIndex
      ].text
    }'`,

    TERAPIA_AEROSOL: `'${
      vnode.dom["inputTerapiaAerosolMedicina"].options[
        vnode.dom["inputTerapiaAerosolMedicina"].selectedIndex
      ].text
    }'`,
    DOSIS_TERAPIA_AEROSOL: `'${
      vnode.dom["inputDosisTerapiaAerosol"].options[
        vnode.dom["inputDosisTerapiaAerosol"].selectedIndex
      ].text
    }'`,
    HIGIENE_BRONCO_PULMONA: `'${
      vnode.dom["inputHigieneBroncoPulmonar"].options[
        vnode.dom["inputHigieneBroncoPulmonar"].selectedIndex
      ].text
    }'`,
    TERAPIA_EXPANSIVA: `'${
      vnode.dom["inputTerapiaExpansiva"].options[
        vnode.dom["inputTerapiaExpansiva"].selectedIndex
      ].text
    }'`,
    CANTIDAD_TERAPIA_EXPANSIVA: `'${vnode.dom["inputTerapiaExpansiva2"].value}'`,
    OXIGENO_TERAPIA: `'${
      vnode.dom["Oxinoterapia"].options[
        vnode.dom["Oxinoterapia"].selectedIndex
      ].text
    }'`,
    CANTIDAD_OXIGENO_TERAPIA: `'${vnode.dom["inputOxinoterapia2"].value}'`,
    MONITOREO_TERAPIA: `'${
      vnode.dom["inputMonitoreoPrevio"].options[
        vnode.dom["inputMonitoreoPrevio"].selectedIndex
      ].text
    }'`,
    CANTIDAD_MONITOREO_TERAPIA: `'${vnode.dom["inputMonitoreoPrevio2"].value}'`,
    //SUCCION_TERAPIA: `'${vnode.dom["inputSuccion"].value}'`,
    SUCCION_TERAPIA: `'${
      vnode.dom["inputSuccion"].options[
        vnode.dom["inputSuccion"].selectedIndex
      ].text
    }'`,
    ESPUTO: isEsputoSelected ? "'true'" : "'false'",
    PANEL_VIRAL: isPanelViralSelected ? "'true'" : "'false'",
    OBSERVACION_CLINICA: `'${vnode.dom["textAreaObservacionClinica"].value}'`,
    CRITERIO_CLINICO: `'${vnode.dom["textAreaCriterio"].value}'`,
    MONITOREO_TERAPIA_POSTERIOR: `'${
      vnode.dom["inputMonitoreoPosterior"].options[
        vnode.dom["inputMonitoreoPosterior"].selectedIndex
      ].text
    }'`,
    CANTIDAD_MONITOREO_TERAPIA_POS: `'${vnode.dom["inputMonitoreoPosterior2"].value}'`,
  };


