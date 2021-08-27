import accordion from "./modules/accordion";
import cards from "./modules/cards";
import data from "./modules/data";
import form from "./modules/form";
import loader from "./modules/loader";
import modal from "./modules/modal";
import slider from "./modules/slider";
import tabs from "./modules/tabs";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimer = setTimeout(() => openModal(".modal", modalTimer), 5000);

  accordion();
  cards();
  data();
  form(modalTimer);
  loader();
  modal("[data-modal]", ".modal", modalTimer);
  slider();
  tabs();
});

// ``
