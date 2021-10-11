import '../../../component/component.js'
import DataSource from '../../data/data-source.js'


const ingredientsDetail = ()=>{
     const queryString = window.location.search;
     const urlParams = new URLSearchParams(queryString);
     const id = urlParams.get("id");
     const ingredientDetailElement = document.querySelector("ingredient-list")

     const renderResult = (results)=>{
        ingredientDetailElement.ingredient = results[0]
     }

     const getIngredient = async ()=> {
         try{

            const result = await DataSource.detailItem(id)
            renderResult(result)

         }catch(failed){
            console.log(failed)
         }
     } 

     getIngredient()
}

export default ingredientsDetail