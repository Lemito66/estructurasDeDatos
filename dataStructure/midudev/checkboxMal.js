m("div", { class: "row d-flex justify-content-center" }, [
  m(
    "div",
    { class: "col text-center" },
    m("div", { class: "mb-4" }, [
      m("input", {
        class: "form-check-input",
        type: "checkbox",
        value: "${inputDrenajePostural}",
        id: "inputDrenajePostural",
        onclick: function (event) {
          isDrenajePosturalSelected = event.target.checked;
        },
      }),
      m("label", { class: "form-label", for: "inputPeso" }, "Drenaje Postural"),
    ])
  ),
  m(
    "div",
    { class: "col text-center" },
    m("div", { class: "mb-4" }, [
      m("input", {
        class: "form-check-input",
        type: "checkbox",
        value: "${inputPercursiones}",
        id: "inputPercursiones",
        onclick: function (event) {
          isPercusionesSelected = event.target.checked;
        },
      }),
      m("label", { class: "form-label", for: "inputPeso" }, "Percursiones"),
    ])
  ),
  m(
    "div",
    { class: "col text-center" },
    m("div", { class: "mb-4" }, [
      m("input", {
        class: "form-check-input",
        type: "checkbox",
        value: "${inputVibraciones}",
        id: "inputVibraciones",
        onclick: function (event) {
          isVibracionesSelected = event.target.checked;
        },
      }),
      m("label", { class: "form-label", for: "inputPeso" }, "Vibraciones"),
    ])
  ),
  m(
    "div",
    { class: "col text-center" },
    m("div", { class: "mb-4" }, [
      m("input", {
        class: "form-check-input",
        type: "checkbox",
        value: "${inputTosEfectiva}",
        id: "inputTosEfectiva",
        onclick: function (event) {
          isTosEfectivaSelected = event.target.checked;
        },
      }),
      m("label", { class: "form-label", for: "inputPeso" }, "Tos Efectiva"),
    ])
  ),
  m(
    "div",
    { class: "col text-center" },
    m("div", { class: "mb-4" }, [
      m("input", {
        class: "form-check-input",
        type: "checkbox",
        value: "${inputAsistenteTos}",
        id: "inputAsistenteTos",
        onclick: function (event) {
          isAsistenteDeTosSelected = event.target.checked;
        },
      }),
      m("label", { class: "form-label", for: "inputPeso" }, "Asistente de Tos"),
    ])
  ),
  m(
    "div",
    { class: "col text-center" },
    m("div", { class: "mb-4" }, [
      m("input", {
        class: "form-check-input",
        type: "checkbox",
        value: "${inputChalecoVibroprecutor}",
        id: "inputChalecoVibroprecutor",
        onclick: function (event) {
          isChalecoVibroprecutor = event.target.checked;
        },
      }),
      m(
        "label",
        { class: "form-label", for: "inputPeso" },
        "Chaleco Vibroprecutor"
      ),
    ])
  ),
]);
