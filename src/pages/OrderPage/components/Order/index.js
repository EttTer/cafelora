
import "./style.css";

import { OrderItem } from "../OrderItem/index.js";

export const Order = ({ items }) => {
  const element = document.createElement("main");

  element.classList.add("order");

  element.innerHTML = `      
    <div class="order__content container">
      <h1>Vaše objedávnka</h1>
      <p class="empty-order empty-order--hide">Zatím nemáte nic objednáno</p>
      <div class="order__items">
                   </div>
              </div>
  `;

  if (items === undefined) {
    fetch(
      `https://apps.kodim.cz/daweb/cafelora/api/me/drinks
    `,
      {
        method: "GET",
        headers: {
          Authorization: `Email ettlerova@centrum.cz`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        element.replaceWith(Order({ items: data.results }));
      });
    return element;
  }

  if (items.filter((item) => item.ordered === true).length === 0) {
    console.log("Prázdná objednávka");
    element.querySelector(".empty-order").classList.remove("empty-order--hide");
  }

  element
    .querySelector(".order__items")
    .append(
      ...items
        .filter((item) => item.ordered === true)
        .map((item) => OrderItem({ name: item.name, image: item.image }))
    );

  return element;
};