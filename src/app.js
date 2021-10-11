import './component/component.js'
import "remixicon/fonts/remixicon.css";
import './script/js/swiper.js'
import './styles/style.css'
import main from './script/view/landingPageScript/main';
import randomResult from "./script/view/landingPageScript/randomResult.js";
import categoryList from "./script/view/landingPageScript/categoryList.js";
import discover from "./script/view/landingPageScript/discover.js";
import ScrollReveal from "scrollreveal";


document.addEventListener("DOMContentLoaded", main);
document.addEventListener("DOMContentLoaded", randomResult);
document.addEventListener("DOMContentLoaded", categoryList);
document.addEventListener("DOMContentLoaded", discover);


const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
//   reset: true,
})

sr.reveal(`.experience-section, .random-experience `, {
  origin: "top",
  interval: 100,
})

