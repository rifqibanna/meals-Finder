import ScrollReveal from "scrollreveal";

class categoryDetail extends HTMLElement {
  set categoryDetail(categoryDetail) {
    this._categoryDetail = categoryDetail;
    this.render();
  }

  render() {
    this.innerHTML = `
         <div class="categories-content">
            <img class="categories-image" src="${this._categoryDetail.strMealThumb}" alt="">
            <div class="categories-data">
                <p class="category-name">${this._categoryDetail.strMeal}</p>
                <a href="../../detail.html?id=${this._categoryDetail.idMeal}" class="category-button">Detail</a>
            </div>
        </div>


        `;

    this.querySelector(".category-button").addEventListener("click", this._categoryDetail);

    const sr = ScrollReveal({
      distance: "60px",
      duration: 2800,
      //   reset: true,
    });

    sr.reveal(`.categories-content`, {
      origin: "left",
      interval: 200,
    });
  }
}

customElements.define("category-detail", categoryDetail);
