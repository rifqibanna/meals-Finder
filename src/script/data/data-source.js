class DataSource {
  // START LANDING PAGE DATA SOURCE
  static searchClub(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`maaf team ${keyword} tidak tersedia`);
        }
      });
  }

  static randomMeal() {
    return fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject("maaf keyword tidak ditemukan");
        }
      });
  }

  static mealCategory() {
    return fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.categories) {
          return Promise.resolve(responseJson.categories);
        } else {
          return Promise.reject();
        }
      });
  }

  static discoverFood() {
    return fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject("maaf keyword tidak ditemukan");
        }
      });
  }

  // END LANDING PAGE DATA SOURCE

  // START DETAIL PAGE DATA SOURCE

  static detailItem(id) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`data tidak ditemukan`);
        }
      });
  }

  // END DETAIL PAGE DATA SOURCE



  // START CATEGORIES DETAIL PAGE DATA SOURCE

  static detailCategories(categoriesKey) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoriesKey}`)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
        if(responseJson.meals){
            return Promise.resolve(responseJson.meals)
        }else {
            return Promise.reject('data tidak ditemukan')
        }
    });
  }

  // END CATEGORIES DETAIL PAGE DATA SOURCE
}



export default DataSource;



