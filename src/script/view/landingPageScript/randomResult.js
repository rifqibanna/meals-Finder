import "../../../component/component.js";
import DataSource from "../../data/data-source.js";

const randomResult = () => {
  let randomButton = document.querySelector("random-button");
  let randomList = document.querySelector("random-list");

  const onRandomButtonClicked = async () => {
    try {
      const result = await DataSource.randomMeal();
      renderResult(result);
    } catch (failed) {
      fallbackResult(failed);
    }
  };

  const renderResult = (results) => {
    randomList.randomMeal = results;
  };

  const fallbackResult = (message) => {
    randomList.renderError(message);
  };

  randomButton.clickRandom = onRandomButtonClicked;
};

export default randomResult;
