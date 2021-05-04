

class DataBaseService {   

    retrieveCities() {
        let cities = [];      
        return cities =  JSON.parse(localStorage.getItem("cities")); 
    }

    retrieveCountries() {
        let countries = [];      
        return countries =  JSON.parse(localStorage.getItem("countries")); 
    }

    retrieveBusiness() {
        let business = [];      
        return business =  JSON.parse(localStorage.getItem("business")); 
    }

    retrieveOffers() {
        let offers = [];      
        return offers =  JSON.parse(localStorage.getItem("offers")); 
    }

}

export default new DataBaseService();