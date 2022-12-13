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

  let buttonText = "";
  let buttonClass = "";
  if (ordered) {
    buttonText = "Zrušit";
    buttonClass = "order-btn--ordered";
  } else {
    buttonText = "Objednat";
    buttonClass = "";
  }

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
     <button class="order-btn ${buttonClass}">${buttonText}</button>
   </div>
`;
element
    .querySelector(".drink__info")
    .append(
      ...layers.map((layer) =>
        Layer({ color: layer.color, label: layer.label })
      )
    );


element.querySelector(".order-btn").addEventListener("click",()=>{


    fetch(`https://apps.kodim.cz/daweb/cafelora/api/me/drinks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Email ettlerova@centrum.cz`,
      },
      body: JSON.stringify({ ordered: !ordered}),
    })
      .then((response) => response.json())
      .then((data) => element.replaceWith(Drink(data.results)));
  });


  return element;
 
};

/* Layer({ color: layer.color, label: layer.label })
)
);*/