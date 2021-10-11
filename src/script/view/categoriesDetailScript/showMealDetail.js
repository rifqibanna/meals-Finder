import '../../../component/component.js'
import DataSource from '../../data/data-source.js'

const showMealDetail = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const category = urlParams.get("category");
  const categoriesDetail = document.querySelector("categories-detail");

  const getMealDetail = async () => {
    try {
      const result = await DataSource.detailCategories(category);
      renderResult(result);
    } catch (failed) {
      console.log(failed);
    }
  };

  const renderResult = (results) => {
    categoriesDetail.categoriesDetail = results;
  };

  getMealDetail();
}

export default showMealDetail