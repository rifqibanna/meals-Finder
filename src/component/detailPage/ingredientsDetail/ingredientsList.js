import './ingredientsItem.js'

class ingredientsList extends HTMLElement{


    set ingredients(ingredients){
        this._ingredients = ingredients
        this.render()
    }

    render(){
        

        this.innerHTML=``
    }

}

customElements.define('ingredient-list', ingredientsList)