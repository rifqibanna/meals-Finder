import "./random_item.js";

class MealRandom extends HTMLElement {

  set randomMeal(RandomMeal) {
    this._randomMeal = RandomMeal;
    this.render();
  }

  render() {
    this.innerHTML = ``;

    this._randomMeal.forEach((randomItem) => {
      const mealItemElement = document.createElement("random-item");
      mealItemElement.randomItem = randomItem;
      this.classList.add('container')
      this.appendChild(mealItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = `
        <style>



            placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        
        </>
        `;
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define("random-list", MealRandom);
