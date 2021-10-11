import './titleCategories.js'

class titleCategoriesList extends HTMLElement {

  set categoriesTitles(titlesCategories) {
    this._categoriesTitles = titlesCategories;
    this.render();
  }

  render() {
    this.innerHTML = ``;

    this._categoriesTitles.forEach((meal) => {
      const titleItem = document.createElement("title-categories");
      titleItem.categoriesTitle = meal;
      this.appendChild(titleItem);
    });
  }
}

customElements.define("title-list", titleCategoriesList);
