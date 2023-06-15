[
  m(
    "div",
    { class: "d-flex justify-content-center" },
    m("h6", "Observación Clínica")
  ),
  m("h6", "Síntomas"),
  m("div", { class: "row justify-content-center" }, [
    m(
      "div",
      { class: "col text-center" },
      m("div", { class: "mb-2" }, [
        m("input", {
          class: "form-check-input",
          type: "checkbox",
          value: "",
          id: "inputDisnea",
          onclick: (event) => {
            isDisneaSelected = event.target.checked;
          },
        }),
        m("label", { class: "form-label", for: "inputPeso" }, "Disnea"),
      ])
    ),
    m(
      "div",
      { class: "col text-center" },
      m("div", { class: "mb-2" }, [
        m("input", {
          class: "form-check-input",
          type: "checkbox",
          value: "",
          id: "inputTos",
          onclick: (event) => {
            isTosSelected = event.target.checked;
          },
        }),
        m("label", { class: "form-label", for: "inputPeso" }, "Tos"),
      ])
    ),
    m(
      "div",
      { class: "col text-center" },
      m("div", { class: "mb-2" }, [
        m("input", {
          class: "form-check-input",
          type: "checkbox",
          value: "",
          id: "inputExpectoacion",
          onclick: (event) => {
            isExpectoracionSelected = event.target.checked;
          },
        }),
        m(
          "label",
          { class: "form-label", for: "inputPeso" },
          "Expectoración"
        ),
      ])
    ),
    m(
      "div",
      { class: "col text-center" },
      m("div", { class: "mb-2" }, [
        m("input", {
          class: "form-check-input",
          type: "checkbox",
          value: "",
          id: "inputDolorToracico",
          onclick: (event) => {
            isDolorToracicoSelected = event.target.checked;
          },
        }),
        m(
          "label",
          { class: "form-label", for: "inputPeso" },
          "Dolor Torácico"
        ),
      ])
    ),
    m(
      "div",
      { class: "col text-center" },
      m("div", { class: "mb-2" }, [
        m("input", {
          class: "form-check-input",
          type: "checkbox",
          value: "",
          id: "inputHemoptisis",
          onclick: (event) => {
            isHemoptisisSelected = event.target.checked;
          },
        }),
        m(
          "label",
          { class: "form-label", for: "inputPeso" },
          "Hemoptisis"
        ),
      ])
    ),
    m(
      "div",
      { class: "col text-center" },
      m("div", { class: "mb-2" }, [
        m("input", {
          class: "form-check-input",
          type: "checkbox",
          value: "",
          id: "inputFiebre",
          onclick: (event) => {
            isFiebreSelected = event.target.checked;
          },
        }),
        m("label", { class: "form-label", for: "inputPeso" }, "Fiebre"),
      ])
    ),
  ]),
  m("h6", "Signos"),
  m("div.row.justify-content-center", [
    m("div.col.text-center", [
      m("div.mb-2", [
        m("input.form-check-input", {
          type: "checkbox",
          value: "",
          id: "inputConsciencia",
          onclick: (event) => {
            isConscienciaSelected = event.target.checked;
          },
        }),
        m("label.form-label", { for: "inputPeso" }, "Consciencia"),
      ]),
    ]),
    m("div.col.text-center", [
      m("div.mb-2", [
        m("input.form-check-input", {
          type: "checkbox",
          value: "",
          id: "inputIntubado",
          onclick: (event) => {
            isIntubadoSelected = event.target.checked;
          },
        }),
        m("label.form-label", { for: "inputPeso" }, "Intubado"),
      ]),
    ]),
    m("div.col.text-center", [
      m("div.mb-2", [
        m("input.form-check-input", {
          type: "checkbox",
          value: "",
          id: "inputEstridor",
          onclick: (event) => {
            isEstridorSelected = event.target.checked;
          },
        }),
        m("label.form-label", { for: "inputPeso" }, "Estridor"),
      ]),
    ]),
    m("div.col.text-center", [
      m("div.mb-2", [
        m("input.form-check-input", {
          type: "checkbox",
          value: "",
          id: "inputSibilancias",
          onclick: (event) => {
            isSibilanciasSelected = event.target.checked;
            console.log(isSibilanciasSelected)
          },
        }),
        m("label.form-label", { for: "inputPeso" }, "Sibilancias"),
      ]),
    ]),
    m("div.col.text-center", [
      m("div.mb-2", [
        m("input.form-check-input", {
          type: "checkbox",
          value: "",
          id: "inputRoncus",
          onclick: (event) => {
            isRoncusSelected = event.target.checked;
          },
        }),
        m("label.form-label", { for: "inputPeso" }, "Roncus"),
      ]),
    ]),
    m("div.col.text-center", [
      m("div.mb-2", [
        m("input.form-check-input", {
          type: "checkbox",
          value: "",
          id: "inputCrepitantes",
          onclick: (event) => {
            isCrepitantesSelected = event.target.checked;
          },
        }),
        m("label.form-label", { for: "inputPeso" }, "Crepitantes"),
      ]),
    ]),
  ]),
  
  m("div.row.justify-content-center", [
    m("div.col.text-center", [
      m("div.mb-2", [
        m("input.form-check-input", {
          type: "checkbox",
          value: "",
          id: "inputLocalizacion",
          onclick: (event) => {
            isLocalizacionSelected = event.target.checked;
          },
        }),
        m("label.form-label", { for: "inputPeso" }, "Localización"),
      ]),
    ]),
    m("div.col.text-center", [
      m("div.mb-2", [
        m("input.form-check-input", {
          type: "checkbox",
          value: "",
          id: "inputCianosis",
          onclick: (event) => {
            isCianosisSelected = event.target.checked;
          },
        }),
        m("label.form-label", { for: "inputPeso" }, "Cianosis"),
      ]),
    ]),
    m("div.col.text-center", [
      m("div.mb-2", [
        m("input.form-check-input", {
          type: "checkbox",
          value: "",
          id: "inputRuidoRespiratorio",
          onclick: (event) => {
            isRuidoRespiratorioSelected = event.target.checked;
          },
        }),
        m("label.form-label", { for: "inputPeso" }, "Ruido Respiratorio"),
      ]),
    ]),
    m("div.col.text-center", [
      m("div.mb-2", [
        m("input.form-check-input", {
          type: "checkbox",
          value: "",
          id: "inputDisminuido",
          onclick: (event) => {
            isDisminuidoSelected = event.target.checked;
          },
        }),
        m("label.form-label", { for: "inputPeso" }, "Disminuido"),
      ]),
    ]),
    m("div.col.text-center", [
      m("div.mb-2", [
        m("input.form-check-input", {
          type: "checkbox",
          value: "",
          id: "inputAbolido",
          onclick: (event) => {
            isAbolidoSelected = event.target.checked;
          },
        }),
        m("label.form-label", { for: "inputPeso" }, "Abolido"),
      ]),
    ]),
    m("div.col.text-center", [
      m("div.mb-2", [
        m("input.form-check-input", {
          type: "checkbox",
          value: "",
          id: "inputSonidoDeLaVoz",
          onclick: (event) => {
            isSonidoDeLaVozSelected = event.target.checked;
          },
        }),
        m("label.form-label", { for: "inputPeso" }, "Sonido de la voz"),
      ]),
    ]),
  ]),
  
  m("div.row.justify-content-center", [
    m("div.col.text-center", [
      m("div.mb-2", [
        m("input.form-check-input", {
          type: "checkbox",
          value: "",
          id: "inputEdema",
          onclick: (event) => {
            isEdemaSelected = event.target.checked;
          },
        }),
        m("label.form-label", { for: "inputPeso" }, "Edema"),
      ]),
    ]),
  ])
  
]