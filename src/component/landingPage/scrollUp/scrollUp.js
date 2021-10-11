class scrollUp extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    render(){
      this.innerHTML = `
        <a href="#" class="scrollUp" id="scroll-up">
            <i class="ri-arrow-up-line scroll-icon"></i>
        </a>
    `;

      /*==================== SHOW SCROLL UP ====================*/
      function scrollUp() {
        const scrollUp = document.getElementById("scroll-up");
        // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
      }
      window.addEventListener("scroll", scrollUp);
    }
}

customElements.define('scroll-up', scrollUp)