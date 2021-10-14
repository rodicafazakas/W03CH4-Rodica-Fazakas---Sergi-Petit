import Card from "./Card.js";
import Componente from "./Componente.js";
import SeriesService from "./SeriesService.js";

 const urlApi = "http://localhost:3001/series";

import Serie from "./Serie.js"; 
import Page from "./Page.js"

const services = new SeriesService
console.log(services.getSerie())

const theSopranos = new Serie("The Sopranos", "David Chase", 1999, 5);

const app = document.querySelector(".container");

new Page (app, [theSopranos]);