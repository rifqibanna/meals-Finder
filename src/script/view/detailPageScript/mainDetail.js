import '../../../component/component.js'
import DataSource from '../../data/data-source.js';

const mainDetail = async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  const mainDetailElement = document.querySelector("main-detail");

  const renderResult = (results) => {
    mainDetailElement.mainDetail = results[0];
  };

  const getDetail = async () => {
    try {
      const result = await DataSource.detailItem(id);
      renderResult(result);
    } catch (error) {
      console.log(error);
    }
  };

  await getDetail();
};

export default mainDetail