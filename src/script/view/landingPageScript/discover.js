import "../../../component/component.js";
import DataSource from "../../data/data-source.js";

const discover = () => {
  const discoverList = document.querySelector("discover-list");

  const renderResult = (results) => {
    discoverList.discoverList = results;
    console.log("yeay");
  };

  const fallbackResult = (message) => {
    discoverList.renderError(message);
  };

  const getDiscover = async () => {
    try {
      const result = await DataSource.discoverFood();
      renderResult(result);
    } catch (failed) {
      fallbackResult(failed);
    }
  };

  getDiscover();
};

export default discover;
