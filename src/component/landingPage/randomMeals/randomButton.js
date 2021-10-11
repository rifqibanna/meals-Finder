class randomButton extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    set clickRandom(random){
        this._clickRandom = random
        this.render()
    }

    render(){
        this.innerHTML = `
        
        <style>
        
        </style>

        <div class="random-meal container">
            <h2 class="section__title">Find your random food here</h2>
            <button class="random_button">Get a Meal</button>
        </div>
        
        `;

        this.querySelector('.random_button').addEventListener('click', this._clickRandom)
    }
}

customElements.define('random-button', randomButton)