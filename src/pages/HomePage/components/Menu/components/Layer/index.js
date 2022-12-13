import "./style.css";

export const Layer = ({ color, label }) => {
  const element = document.createElement("div");

  element.classList.add("layer");

  element.innerHTML = `<div class="layer__color" style="background-color: ${color}"></div>
<div class="layer__label">${label}</div>`;

  return element;
};

/*
import "./../../style.css";
import "./../../index.css";

export const Layer = ({ color, label }) => {
  const element = document.createElement("div");
  element.classList.add("layer");

  element.innerHTML = `
        <div class="layer__color" style="background-color: ${color}"></div>
        <div class="layer__label">${label}</div>
    `;

  return element;
};*/