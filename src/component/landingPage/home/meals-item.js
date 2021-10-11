class MealItem extends HTMLElement {

  connectedCallback() {
    this.render();
  }

  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.innerHTML = `

        <style>
    
        </style>


        <div class="meal_content">
                    <img class="meal_img" src="${this._meal.strMealThumb}" alt="Fan Art">
                    <div class="meal_data">
                        <h2>${this._meal.strMeal}</h2>
                        <button class="button_meal"><a href="../../../detail.html?id=${this._meal.idMeal}">Detail</a></button>
                    </div>
                </div>
        `
        this.querySelector(".button_meal").addEventListener("click", this._meal);
        
        ;
  }
}

customElements.define("meal-item", MealItem);
