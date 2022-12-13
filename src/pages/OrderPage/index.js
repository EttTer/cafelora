import "./style.css";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Order } from "./components/Order/index.js";

export const OrderPage = () => {
  const element = document.createElement("div");

  element.classList.add("page");

  element.append(Header({ showMenu: false }), Order({}), Footer());

  return element;
};