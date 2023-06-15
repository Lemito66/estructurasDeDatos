m("div", { class: "row justify-content-center" }, [
  m(
    "div",
    { class: "col text-center" },
    m("div", { class: "mb-2" }, [
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
      m("label", { class: "form-label", for: "inputPeso" }, "Expectoración"),
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
      m("label", { class: "form-label", for: "inputPeso" }, "Dolor Torácico"),
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
      m("label", { class: "form-label", for: "inputPeso" }, "Hemoptisis"),
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
]);
