import Card from "./Card.js";
import Componente from "./Componente.js";
import Serie from "./Serie.js"; 
import Page from "./Page.js"

const theSopranos = new Serie("The Sopranos", "David Chase", 1999, 5);

const app = document.querySelector(".container");

new Page (app, [theSopranos]);