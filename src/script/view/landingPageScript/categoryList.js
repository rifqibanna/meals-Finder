import '../../../component/component.js'
import DataSource from '../../data/data-source.js'

const categoryList = ()=>{
    const categoriesList = document.querySelector('category-list')
    categoriesList.setAttribute('class', 'swiper-wrapper')
    categoriesList.classList.add("swiper-container", "container");



    const renderResult = (results) => {
        categoriesList.categoryList = results
        console.log('berhasil')
    }

    const fallbackResult = (message) => {
        categoriesList.renderError(message)
    } 

    const getCategories = async () => {
        try{
            const result = await DataSource.mealCategory()
            renderResult(result)

        }catch(failed){
            fallbackResult(failed)
        }
    }

    getCategories()
}

export default categoryList