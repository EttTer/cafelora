import "./style.css";

import {Banner} from "./components/Banner/index.js"

import {Contact} from "./components/Contact/index.js"
import {Footer} from "./components/Footer/index.js"
import {Gallery} from "./components/Gallery/index.js"
import {Header} from "./components/Header/index.js"
import {Menu} from "./components/Menu/index.js"


const layers = [
    {
      color: '#feeeca',
      label: 'mléčná pěna',
    },
    {
      color: '#fed7b0',
      label: 'teplé mléko',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ];

layers.forEach(layer => {console.log(layer);});


const pageElement = document.createElement('div');
pageElement.classList.add('page');
const main = document.createElement('main');
main.append(
  Banner(),
  Menu({}),
  Gallery(),
  Contact(),
);

pageElement.append(
  Header(),
  main,
  Footer(),
);

document.querySelector('#app').append(pageElement);