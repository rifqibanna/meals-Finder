import {bgImg} from '../../../img/img.js'
import ScrollReveal from "scrollreveal";


class Home extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    set clickEvent(event){
        this._clickEvent = event
        this.render()
    }

    get value (){
        return this.querySelector('.search_input').value
    }

    render(){
        this.innerHTML = `
        <section class="home" id="home">
            <div class="home_img-bg">
                <img src="${bgImg}" alt="" class="home_bg">
            </div>

            <div class="home_container container grid">
                <div class="home_data">
                    <h1 class="home_data-title">Let's Cook</h1>
                    <span class="home_data-subtitle">Find The Best Recepies Here</span>
                </div>
            </div>

            <div class="search_container container grid">
                <div id="search-form" class="search-form">
                    <input type="text" placeholder="type your food" class="search_input">
                    <button class="search_button"><i class="ri-search-line search_icon"></i></button>
                </div>
            </div>
        </section>
        `;

        this.querySelector('.search_button').addEventListener('click', this._clickEvent)


        const sr = ScrollReveal({
          distance: "60px",
          duration: 2800,
        //   reset: true,
        });



        sr.reveal(`.home_data, .search-form`, {
          origin: "top",
          interval: 100,
        });



       

    }
}

customElements.define('home-section', Home)