import Componente from "./Componente";
import Card from "./Card.js";


class Page extends Componente {
  series;

  constructor(parentElement, { series }) {
    super(parentElement, "container");
    this.series = series;
    this.generateHTML();
  }
    
   generateHTML() {
    const html = ` 
      <header class="main-header">
        <h1 class="main-title">My Series</h1>
      </header>
      <main class="main">
        <section class="form">
          <form>
            <div class="form-block">
              <label for="title">Title:</label>
              <input type="text" id="title" />
            </div>
            <div class="form-block">
              <label for="creator">Creator:</label>
              <input type="text" id="creator" />
            </div>
            <div class="form-block">
              <label for="image">Image URL:</label>
              <input type="url" id="image" />
            </div>
            <div class="form-block">
              <label for="emmies">Emmies:</label>
              <input type="number" id="emmies" />
            </div>
            <div class="form-block">
              <button type="submit">Create</button>
            </div>
          </form>
        </section>
        <section class="series"> </section>
      </main>`; 
    this.element.innerHTML = html;
    /*const seriesContainer = document.querySelector(".series");
    this.series.map(
      (card) => new Gentleman(seriesContainer, card)
    );*/
  }
}

export default Page;