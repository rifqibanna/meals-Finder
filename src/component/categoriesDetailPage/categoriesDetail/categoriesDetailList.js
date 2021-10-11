
import './categoriesDetailItem.js'

class categoriesDetail extends HTMLElement{

    set categoriesDetail(categoriesDetail){
        this._categoriesDetail = categoriesDetail
        this.render()
    }

    render(){
        this._categoriesDetail.forEach(meal => {
            this.classList.add("categoriesCard", "container", "grid");
            const itemCategory = document.createElement('category-detail')
            itemCategory.categoryDetail = meal
            this.appendChild(itemCategory)
        })
    }
}

customElements.define('categories-detail', categoriesDetail)