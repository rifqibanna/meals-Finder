class instructionDetail extends HTMLElement {
  connectedCallback() {
    if (this._detail === undefined) {
      this.renderLoading();
    }
  }

  renderLoading() {
    this.innerHTML = `

    `;
  }

  set instructionDetail(detailInstruction) {
    this._instructionDetail = detailInstruction;
    this.render();
  }

  

  render() {


    this.innerHTML = `
        <div class="description_section container">
            <div class="ingredients_title">
                <h2 class="section__title">How To Cook?</h2>
            </div>

            <div class="description_container">
                <div class="description_content">
                    <p class="description_text">${this._instructionDetail.strInstructions}</p>
                </div>
            </div>
        </div>
        `;
  }

}


customElements.define('instruc-detail', instructionDetail)