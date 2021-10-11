import ScrollReveal from "scrollreveal";

class DiscoverItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set discoverItem(itemDiscover) {
    this._discoverItem = itemDiscover;
    this.render();
  }

  render() {
    this.innerHTML = `
            
                    <img src="${this._discoverItem.strMealThumb}" alt="" class="food__img">

                    <div class="food__content">
                        <div class="rating-wrapper">
                            <span class="food__rating">
                            <span class="food__rating-number">4.5</span>
                            <i class="ri-star-line food__rating-icon"></i>
                            </span>
                        </div>
                        
                        <div class="food-wrapper">
                            <div class="food__data">
                                <h3 class="food__title">${this._discoverItem.strMeal}</h3>
                                <span class="food__subtitle">${this._discoverItem.strArea}</span>
                            </div>
                        </div>
                    </div>

                    <button class="button food__button"><a href="../../../detail.html?id=${this._discoverItem.idMeal}">
                        <i class="ri-arrow-right-line food-icon"></i>
                        </a>
                    </button>
        `;

    this.querySelector(".food__button").addEventListener("click", this._discoverItem);


  }
}

customElements.define("discover-item", DiscoverItem);
