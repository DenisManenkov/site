import { model } from "./model.js";
import "./styles/main.css";
import { App } from "./classes/app.js";

// const $site = document.querySelector("#site");

new App(model).init();

// model.forEach((block) => {
//   site.insertAdjacentHTML("beforeend", block.toHTML());
// });
