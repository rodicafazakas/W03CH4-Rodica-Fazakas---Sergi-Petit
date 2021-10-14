import Card from "./Card.js";
import Componente from "./Componente.js";
import SeriesService from "./SeriesService.js";

const urlApi = "http://localhost:3001/series";

import Serie from "./Serie.js"; 
import Page from "./Page.js"

const services = new SeriesService();
const seriesList = services.getSerie(); 
console.log(seriesList);

const app = document.querySelector(".container");

const pendingSeries = seriesList.filter( (serie) => serie.watched===false);
const watchedSeries = seriesList.filter( (serie) => serie.watched===true);

new Page (app, pendingSeries, watchedSeries);