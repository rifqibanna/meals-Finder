import './discoverItem.js'
import ScrollReveal from "scrollreveal";



class DiscoverList extends HTMLElement {
  set discoverList(listDiscover) {
    this._discoverList = listDiscover;
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
      this.innerHTML=``

      this.classList.add('discover__container', 'container', 'grid');
      this._discoverList.slice(19,25).forEach(discover => {
          const discoverElement = document.createElement('discover-item')
          discoverElement.classList.add('food__card')
          discoverElement.discoverItem = discover
          this.appendChild(discoverElement)
      })

          const sr = ScrollReveal({
            distance: "60px",
            duration: 2800,
            //   reset: true,
          });

          sr.reveal(`.food__card`, {
            origin: "top",
            interval: 100,
          });
  }
}

customElements.define('discover-list', DiscoverList)