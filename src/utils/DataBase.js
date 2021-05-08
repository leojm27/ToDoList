
class DataBaseService {   

    retrieveCities() {
        if(localStorage.getItem("cities") != null){
            let response =  JSON.parse(localStorage.getItem("cities"))
            return response;
        } else {
            return []; 
        }  
    }

    retrieveCountries() {
        if(localStorage.getItem("countries") != null){
            let response =  JSON.parse(localStorage.getItem("countries"))
            return response;
        } else {
            return []; 
        }  
    }

    retrieveBusiness() {
        if(localStorage.getItem("business") != null){
            let response =  JSON.parse(localStorage.getItem("business"))
            return response;
        } else {
            return []; 
        }  
    }

    retrieveOffers() {
        if(localStorage.getItem("offers") != null){
            let response =  JSON.parse(localStorage.getItem("offers"))
            return response;
        } else {
            return []; 
        }  
    }

}

export default new DataBaseService();