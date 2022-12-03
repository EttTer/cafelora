/*import "./style.css";

import { Layer } from "../Layer/index.js";

export const Drink = (props) => {
  const { id, name, ordered, image, layers } = props;
  const { color, label } = layers;

  const element = document.createElement("div");

  element.classList.add("drink");

  element.innerHTML = `    
  <div class="drink__product">
    <div class="drink__cup">
      <img src=${image} />
    </div>
    <div class="drink__info">
      <h3>${name}</h3>
              </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">Objednat</button>
  </div>
`;

  element.querySelector(".drink__info").append(Layer({ color, label }));

  return element;
};*/

import "./style.css";
import "./index.js";

import { Layer } from "./../Layer/index.js";

export const Drink = (props) => {
  const { id, name, ordered, image, layers } = props;

  const element = document.createElement("div");
  element.classList.add("drink");

  element.innerHTML = `
   <div class="drink__product">
     <div class="drink__cup">
       <img src=${image}>
     </div>
     <div class="drink__info">
       <h3>${name}</h3>
     </div>
   </div>
   <div class="drink__controls">
     <button class="order-btn">
       Objednat
     </button>
   </div>
`;
element
    .querySelector(".drink__info")
    .append(
      ...layers.map((layer) =>
        Layer({ color: layer.color, label: layer.label })
      )
    );

  return element;
 
};

/* Layer({ color: layer.color, label: layer.label })
)
);*/