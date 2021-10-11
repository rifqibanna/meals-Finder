
class CategoryItem extends HTMLElement{

    connectedCallback(){
        this.render()
    }

    set categoryItem(itemCategory){
        this._categoryItem = itemCategory
        this.render()
    }

    set clickCategory(buttonCategory){
        this._clickCategory = buttonCategory
        this.render()
    }


    render(){

        this.innerHTML = `
 
        <a href="../../../../categoryDetail.html?category=${this._categoryItem.strCategory}&id=${this._categoryItem.idCategory}" class="categoryDetailButton">
        <img src="${this._categoryItem.strCategoryThumb}" alt="" class="discover__img">
        </a>

        <div class="discover-wrapper">
            <div class="discover__data">
            <span class="discover__title">${this._categoryItem.strCategory}</span>
            </div>
        </div>
        `;

        this.querySelector('.categoryDetailButton').addEventListener('click', this._categoryItem)
    }
}

customElements.define('category-item', CategoryItem)