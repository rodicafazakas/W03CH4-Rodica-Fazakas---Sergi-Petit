

class SeriesService {
  urlApi = "http://localhost:3001/series";


  async getSerie() {
    const response = await fetch(this.urlApi);
    const serie = await response.json();
    return serie;
  }

   async updateSerie(id, serie) {
    fetch(`${this.urlAPI}${id}`, {
      method: "PUT",
      body: JSON.stringify(serie),
      header: {
        "Content-Type": "application/json",
      },
    });
  }

  async createSerie(serie) {
    const response = fetch(this.urlApi, {
      method: "POST",
      body: JSON.stringify(gentleman),
      headers: {
        "Content-Type" : "application/json"
      },
    });
     const newSerie = await response.json();
    return newSerie;
  }
  
   async deleteSerie(id) {
    const response = await fetch(`${this.urlApi}${id}`, {
      method: "DELETE",
    })
    if ( response.ok) {
      return true;
    }
    throw new Error("Can't delete this serie !")
  }

}

export default SeriesService