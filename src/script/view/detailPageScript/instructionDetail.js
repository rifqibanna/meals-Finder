import '../../../component/component.js'
import DataSource from '../../data/data-source.js'

const instrucDetail = ()=>{
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const id = urlParams.get("id");
      const instrucDetailElement = document.querySelector("instruc-detail");

      const renderResult = (results) =>{
        instrucDetailElement.instructionDetail = results[0]
      }

      const instructionDetail = async ()=>{
          try{
            const result = await DataSource.detailItem(id)
            renderResult(result)
          }catch(failed){
            console.log(failed)
          }
      }

      instructionDetail()
}

export default instrucDetail

