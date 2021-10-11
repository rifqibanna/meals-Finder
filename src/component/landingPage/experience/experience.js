import {experience1, experience2} from '../../../img/img.js'


class Experience extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
        
        <div class="experience__container container grid">
        <div>
            <h1 class="section__title">Get a Various Foods from <br> all over The World</h1>
                <div class="experience__content grid">
                    <div class="experience__data">
                        <h2 class="experience__number">200+</h2>
                        <span class="experience__description">Foods</span>
                    </div>
                    <div class="experience__data">
                        <h2 class="experience__number">15+</h2>
                        <span class="experience__description">Countries</span>
                    </div>
                    <div class="experience__data">
                        <h2 class="experience__number">17</h2>
                        <span class="experience__description">Food Categories</span>
                    </div>
                </div>
        </div>
                <div class="experience__img grid">
                    <div class="experience__overlay">
                        <img src="${experience1}" alt="" class="experience__img-one">
                    </div>
                    <div class="experience__overlay">
                        <img src="${experience2}" alt="" class="experience__img-two">
                    </div>
                </div>
            </div>
        
        `;
    }
}

customElements.define('experience-section', Experience)