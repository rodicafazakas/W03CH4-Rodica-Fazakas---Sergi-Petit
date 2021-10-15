import Componente from "./Componente.js";

class Card {
  element;
  parentElement;
  serie;

  constructor(parentElement, serie) {
    this.element = document.createElement('li');
    this.element.className = 'serie';
    this.parentElement =parentElement;
    this.parentElement.append(this.element);
    this.serie = serie;
    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
      <img
        class="serie__poster"
        src="${this.serie.poster}"
        alt="The Sopranos poster"
      />
      <h4 class="serie__title">${this.serie.name}</h4>
      <p class="serie__info">${this.serie.creator} (${this.serie.year})</p>
      <ul class="score">
        <li class="score__star">
          <i class="icon--score fas fa-star" title="1/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="2/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="3/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="4/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="5/5"></i>
        </li>
      </ul>
      <i class="fas fa-times-circle icon--delete"></i>
    `;
  

    this.parentElement.appendChild(this.element);

    for ( let i = 4; this.serie.score - 1 < i; i--) {
      this.element.querySelectorAll(".score__star")[i].innerHTML = "";
    }  
  }
}

export default Card;
