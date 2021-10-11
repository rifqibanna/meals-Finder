import "./meals-item.js";

class MealList extends HTMLElement {


  set meals(meals) {
    this._meals = meals;
    this.render();
  }

  render() {


    this.innerHTML = `
    <style>
    

    </style>
    `;

    this._meals.forEach((meal) => {
      const mealItemElement = document.createElement("meal-item");
      mealItemElement.meal = meal;
      this.classList.add('meal-liste', 'container')
      this.appendChild(mealItemElement)
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

customElements.define("meal-list", MealList);
