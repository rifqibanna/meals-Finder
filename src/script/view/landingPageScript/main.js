import "../../../component/component.js";
import DataSource from "../../data/data-source.js";

const main = () => {
  let searchElement = document.querySelector("home-section");
  let clubListElement = document.querySelector("meal-List");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchClub(searchElement.value);
      renderResult(result);
    } catch (failed) {
      fallbackResult(failed);
    }
  };

  const renderResult = (results) => {
    clubListElement.meals = results;
  };

  const fallbackResult = (message) => {
    clubListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
