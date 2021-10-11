class Header extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    render(){
      this.innerHTML = `
            <nav class="nav container">
            <a href="" class="nav_logo">Meals Finder</a>

            <div class="nav_menu">
                <ul class="nav_list">
                    <li class="nav_item">
                        <a href="#homeSection" class="nav_link">Home</a>
                    </li>
                    <li class="nav_item">
                        <a href="#experinceSection" class="nav_link">About</a>
                    </li>
                    <li class="nav_item">
                        <a href="#randomExperience" class="nav_link">Random Food</a>
                    </li>
                    <li class="nav_item">
                        <a href="" class="nav_link">Food Categories</a>
                    </li>
                </ul>

                <i class="ri-close-line nav_close"></i>
            </div>

            <div class="nav_toggle">
                <i class="ri-menu-3-line"></i>
            </div>
        </nav>
        `;

      /*==================== SHOW MENU ====================*/
      const navMenu = document.querySelector(".nav_menu"),
        navToggle = document.querySelector(".nav_toggle"),
        navClose = document.querySelector(".nav_close");

      /*===== MENU SHOW =====*/
      /* Validate if constant exists */
      if (navToggle) {
        navToggle.addEventListener("click", () => {
          navMenu.classList.add("show-menu");
        });
      }

      /*===== MENU HIDDEN =====*/
      /* Validate if constant exists */
      if (navClose) {
        navClose.addEventListener("click", () => {
          navMenu.classList.remove("show-menu");
        });
      }


      /*==================== CHANGE BACKGROUND HEADER ====================*/
      function scrollHeader() {
        const header = document.getElementById("header");
        // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
        if (this.scrollY >= 100) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
      }
      window.addEventListener("scroll", scrollHeader);
    }
}

customElements.define('app-bar', Header)