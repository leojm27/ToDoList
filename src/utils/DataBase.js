

/*const business = [
    {id_business: 654654, description: "TSoft", id_city: 161616},
    {id_business: 648774, description: "IncluIT", id_city: 787878}];
   
const countries = [
      {id_country: 654654, description: "Argentina"},
      {id_country: 648774, description: "Brasil"},
      {id_country: 445785, description: "España"}];

const cities = [
           {id_city: 787878, description: "La Rioja", id_country: 654654},
           {id_city: 797979, description: "Cordoba", id_country: 654654},
           {id_city: 727272, description: "Neuquen", id_country: 654654},
           {id_city: 767676, description: "Buenos Aires", id_country: 654654},
           {id_city: 161616, description: "San Pablo", id_country: 648774},
           {id_city: 151515, description: "Rio de Janeiro", id_country: 648774},
           {id_city: 131313, description: "Belo Horizonte", id_country: 648774},
           {id_city: 898989, description: "Barcelona", id_country: 445785},
           {id_city: 848484, description: "Madrid", id_country: 445785},
           {id_city: 878787, description: "Mallorca", id_country: 445785},
           {id_city: 838383, description: "La Rioja", id_country: 445785},
           {id_city: 818181, description: "Sevilla", id_country: 445785},];
           
const offers = [
            {id_job: 121212, job: "Dev Jr Python", business: 691740, id_city: 797979, id_country: 654654},
            {id_job: 118118, job: "Dev SemiSenior JS", business: 691740, id_city: 848484, id_country: 445785},
            {id_job: 161616, job: "Dev Senior Java", business: 691740, id_city: 818181, id_country: 445785}];*/

// cargar datos de prueba
//window.localStorage.setItem("business", JSON.stringify(business));
//window.localStorage.setItem("countries", JSON.stringify(countries));
//window.localStorage.setItem("cities", JSON.stringify(cities));
//window.localStorage.setItem("offers", JSON.stringify(offers));



/*
if(localStorage.getItem("offers") != null){
    this.setState({
            offers: JSON.parse(localStorage.getItem("offers"))
    })
}

  if(localStorage.getItem("business") != null){
       this.setState({
            businessAll: JSON.parse(localStorage.getItem("business"))
       })
  };

  if(localStorage.getItem("countries") != null){
       this.setState({
            countries: JSON.parse(localStorage.getItem("countries"))
       })
  }

  if(localStorage.getItem("cities") != null){
       this.setState({
            cities: JSON.parse(localStorage.getItem("cities"))
       })
  }*/

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