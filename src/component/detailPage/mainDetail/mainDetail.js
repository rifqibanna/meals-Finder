
class mainDetail extends HTMLElement {
  connectedCallback() {
    if (this._detail === undefined) {
      this.renderLoading();
    }
  }

  renderLoading() {
    this.innerHTML = `
      <p>Loading</p>
    `;
  }

  set mainDetail(detailmain){
      this._mainDetail = detailmain
      this.render()
  }

  render(){
      this.innerHTML = `
      <div class="detail_bg">
            <img src="${this._mainDetail.strMealThumb}" alt="" class="section-img">
        </div>

        <div class="detail_section container grid">
            <a href="${this._mainDetail.strYoutube}" target="_blank" class="detail_play">
               <i class="ri-play-fill play-icon"></i>
            </a>
        </div>

        
      `;
  }
}

customElements.define('main-detail', mainDetail)