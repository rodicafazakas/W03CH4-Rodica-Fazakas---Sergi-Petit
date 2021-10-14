import Componente from "./Componente.js";

class Card extends Componente {

  constructor(parentElement, {name, creator, year, poster, watched, score, emmies}) {
    super(parentElement);
    this.generateHTML();
    this.card = {name, creator, year, poster, watched, score, emmies} ;
  }

  generateHTML () {
    const html = `<img
                  class="serie__poster"
                  src="https://www.cine.com/media/series/2711.jpg"
                  alt="6 feet under poster"
                />
                <h4 class="serie__title">6 feet under</h4>
                <p class="serie__info">Alan Ball (2001)</p>
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
                <i class="fas fa-times-circle icon--delete"></i>`;
    this.element.innerHTML = html;
  }

}
