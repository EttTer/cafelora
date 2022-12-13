import "./style.css";

export const OrderItem = ({ name, image }) => {
  const element = document.createElement("div");

  element.classList.add("order-item");

  element.innerHTML = `
    <img src=${image} class="order-item__image">
    <div class="order-item__name">
      ${name}
    </div>
  `;

  return element;
};