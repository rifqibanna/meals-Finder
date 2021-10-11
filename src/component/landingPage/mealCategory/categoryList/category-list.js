import './category-item.js'

class CategoryList extends HTMLElement {

  set categoryList(listCategory) {
    this._categoryList = listCategory;
    this.render();
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

  render() {
    this.innerHTML = ``;

    this._categoryList.forEach(category => {
      const categoryElement = document.createElement("category-item");
      categoryElement.setAttribute('class', 'discover__card')
      categoryElement.classList.add('swiper-slide')
      categoryElement.categoryItem = category;
      this.appendChild(categoryElement);
    });
  }
}

customElements.define('category-list', CategoryList)