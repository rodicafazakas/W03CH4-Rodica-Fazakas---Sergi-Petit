//import Componente from "./Componente.js";
import Card from "./Card.js";


class Page {
  parentElement;
  pendingSeries;
  watchedSeries
  
  constructor(parentElement,  pendingSeries, watchedSeries ) {
    //super(parentElement);
    this.parentElement = parentElement;
    this.pendingSeries = pendingSeries;
    this.watchedSeries = watchedSeries;
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
        <section class="series">
          <h2 class="section-title">Series list</h2>
          <i class="icon--add fas fa-plus-circle"></i>
          <section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <p class="info">You have 4 series pending to watch</p>
            <!--<p class="info">Congrats! You've watched all your series</p>-->
            <ul class="series-list">
            </ul>
          </section>
          <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched 4 series</p>
            <!--<p class="info">You already have not watched any serie</p>-->
            <ul class="series-list series-list--watched">
              
            </ul>
          </section>
        </section>
        <section class="ranking">
          <h2 class="section-title">Ranking</h2>
          <ul class="ranking-list">
            <li class="ranking-item">
              <p class="ranking-item__position">Best score</p>
              <h3 class="ranking-item__title">The Sopranos</h3>
              <img
                class="ranking-item__poster"
                src="https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
                alt="The Sopranos poster"
              />
            </li>
            <li class="ranking-item">
              <p class="ranking-item__position">More Emmies</p>
              <h3 class="ranking-item__title">Game of Thrones</h3>
              <img
                class="ranking-item__poster"
                src="https://t1.pixers.pics/img-1fb6f67c/posters-game-of-thrones.jpg?H4sIAAAAAAAAA3VOW27EIAy8DpGS2BAIkBvs394gIjy2afNAQNtVT1_Sqp-VZXs80ngG3o9sggfrj-IT7Ktzm4ewbvXKU_J5_fJkUGOLzVTZjSBWdH74ZNMZSUcH1VLRCsbaUYpm-jRVuJv0Rl5KiXkCyEMf12f9VpfNYPcMDKkEVCC00lpYzh1aN8cuF3M4k1zH8TliH49Hi1c1f0EkYiuvACWtO6mJzupVyGt8NPCP3y-GqoL7DSgCsp-JwNnFzvcbRWS1kbNZuEELHox0izdBeoUYLBVej9qZEMIsFmmWRY7Kec_n_hu83S9APwEAAA=="
                alt="Game of Thrones poster"
              />
            </li>
            <li class="ranking-item">
              <p class="ranking-item__position">Newest</p>
              <h3 class="ranking-item__title">Game of Thrones</h3>
              <img
                class="ranking-item__poster"
                src="https://t1.pixers.pics/img-1fb6f67c/posters-game-of-thrones.jpg?H4sIAAAAAAAAA3VOW27EIAy8DpGS2BAIkBvs394gIjy2afNAQNtVT1_Sqp-VZXs80ngG3o9sggfrj-IT7Ktzm4ewbvXKU_J5_fJkUGOLzVTZjSBWdH74ZNMZSUcH1VLRCsbaUYpm-jRVuJv0Rl5KiXkCyEMf12f9VpfNYPcMDKkEVCC00lpYzh1aN8cuF3M4k1zH8TliH49Hi1c1f0EkYiuvACWtO6mJzupVyGt8NPCP3y-GqoL7DSgCsp-JwNnFzvcbRWS1kbNZuEELHox0izdBeoUYLBVej9qZEMIsFmmWRY7Kec_n_hu83S9APwEAAA=="
                alt="Game of Thrones poster"
              />
            </li>
          </ul>
        </section>
      </main>`; 
    this.parentElement.innerHTML = html;
    const seriesContainer = document.querySelector(".series-list");
    this.pendingSeries.map(
      (card) => new Card(seriesContainer, card)
    );
    const watchedSeriesContainer = document.querySelector(".series-list.series-list--watched");
    this.watchedSeries.map(
      (card) => new Card(watchedSeriesContainer, card)
    );
  }
}

export default Page;