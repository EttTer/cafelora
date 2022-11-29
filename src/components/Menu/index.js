import "./style.css";

import { Layer } from "./components/Layer/index.js";

export const Menu = () => {
  const element = document.createElement("section");

  element.classList.add("menu");

  element.innerHTML = `  <div class="container" id="menu">
  <h2>Naše nabídka</h2>
  <p class="menu-intro">
    Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
  </p>
  <div class="drinks-list">
  </div>
  <div class="order-detail">
    <a href="/objednavka">Detail objednávky</a>
  </div>
</div>`;

  return element;
};