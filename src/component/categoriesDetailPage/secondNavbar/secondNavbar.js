class secondNavbar extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
        
         <div class="navbar-data">
                <h1 class="navbar-title">Meals Finder</h1>
            <div class="navbar-icon">
            <a href="./../../../index.html">
                <i class="ri-home-4-line home-icon"></i>
            </a>
            </div>
        </div>
        
        `;

         function scrollHeader() {
           const header = document.querySelector(".second-navbar");
           // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
           if (this.scrollY >= 80) header.classList.add("scroll-navbar");
           else header.classList.remove("scroll-navbar");
         }
         window.addEventListener("scroll", scrollHeader);
    }
}

customElements.define('second-navbar', secondNavbar)