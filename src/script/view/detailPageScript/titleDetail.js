import '../../../component/component.js'
import DataSource from '../../data/data-source.js'

const titleDetail = ()=>{
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const id = urlParams.get("id");
    const titleDetailElement = document.querySelector('title-detail')

    const renderResult = results => {
        titleDetailElement.titleDetail = results[0]
    }
    
    const getTitle = async () =>{
        try{
            const result = await DataSource.detailItem(id)
            renderResult(result)

        }catch(failed){
            console.log(failed)
        }
    }

    getTitle()

}

export default titleDetail