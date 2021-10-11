class ingredientsItem extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    set ingredient (ingredient){
        this._ingredient = ingredient
        this.render()
    }

    render(){

        // let element = "";
        // for (let i = 1; i < 21; i++) {
        //   element += `
        //   <h4>${this._ingredient["strIngredient" + i]} ${this._ingredient["strMeasure" + i]}</h4>`;
        // }

        this.innerHTML = `
        <div class="ingredients_section container">
                <div class="ingredients_title">
                    <h1 class="section__title">Ingredients</h1>
                </div>

                <div class="ingredients_list container">

                    <div class="ingredients_content">
                        <h4>halo</h4>
                    </div>
                    <div class="ingredients_content">
                        <h4>halo</h4>
                    </div>
                    <div class="ingredients_content">
                        <h4>halo</h4>
                    </div>
                    <div class="ingredients_content">
                        <h4>halo</h4>
                    </div>
                    <div class="ingredients_content">
                        <h4>halo</h4>
                    </div>
                    <div class="ingredients_content">
                        <h4>halo</h4>
                    </div>
                    <div class="ingredients_content">
                        <h4>halo</h4>
                    </div>

                </div>
            </div>
        
        `;



    }
}

customElements.define('ingredient-item', ingredientsItem)