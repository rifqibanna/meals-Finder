class titleDetails extends HTMLElement{
    connectedCallback(){
        if(this._detail === undefined){
            this.renderLoading()
        }
    }

    renderLoading(){
        this.innerHTML=`<p>Loading</p>`
    }

    set titleDetail(detailTitle){
        this._titleDetail = (detailTitle)
        this.render()
    }

    

    render(){
        this.innerHTML = `
        
        <div class="detail_data container grid">
            <h1 class="food_title">${this._titleDetail.strMeal}</h1>
            <span class="food_subtitle">${this._titleDetail.strArea} Food</span>
        </div>

        `;
    }

}

customElements.define('title-detail', titleDetails)