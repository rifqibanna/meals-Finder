class titleCategories extends HTMLElement{
    
    set categoriesTitle (titleCategories){
        this._categoriesTitle = titleCategories
        this.render()
    }

    render(){
        this.innerHTML=
        `
        <h1>${this._categoriesTitle.strCategory}</h1>
        `
    }
}

customElements.define('title-categories', titleCategories)