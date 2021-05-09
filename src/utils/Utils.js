const { default: DataBase } = require("./DataBase");

const getFormBusiness = (item) => {
    const cities = DataBase.retrieveCities();
    const countries = DataBase.retrieveCountries();
    const businesses = DataBase.retrieveBusiness();
    let businesForm, cityDesc, countryDesc, businessDesc;
        
    let city = cities.find(e => e.id_city == item.id_city);
    let country = countries.find(e => e.id_country == item.id_country);
    let business = businesses.find(e => e.id_business == item.business);

    if(city == null){ cityDesc = 'Sin asignar' } else { cityDesc = city.description };
    if(country == null){ countryDesc = 'Sin asignar' } else { countryDesc = country.description };
    if(business == null){ businessDesc = 'Sin asignar' } else { businessDesc = business.description };

    businesForm = { 
        city: cityDesc, 
        country: countryDesc,
        business: businessDesc};

    return businesForm;
};


const getFormCity = (item) => {
    const countries = DataBase.retrieveCountries();
    let countryDesc;
    let country = countries.find(e => e.id_country == item.id_country);
    if(country == null){ countryDesc = 'Sin asignar' }else{ countryDesc = country.description };

    return countryDesc;
};


const getFormOffer = (item) => { 
    const cities = DataBase.retrieveCities();
    const countries = DataBase.retrieveCountries();
    const businesses = DataBase.retrieveBusiness();
    let offerForm, cityDesc, countryDesc, businessDesc;
        
    let city = cities.find(e => e.id_city == item.id_city);
    let country = countries.find(e => e.id_country == item.id_country);
    let business = businesses.find(e => e.id_business == item.business);

    if(city == null){ cityDesc = 'Sin asignar' }else{ cityDesc = city.description };
    if(country == null){ countryDesc = 'Sin asignar' }else{ countryDesc = country.description };
    if(business == null){ businessDesc = 'Sin asignar' }else{ businessDesc = business.description };

    offerForm = { 
        city: cityDesc, 
        country: countryDesc,
        business: businessDesc
    };

    return offerForm;
};


const getQuantityCities = (id) => { 
    const cities = DataBase.retrieveCities();
    const q = cities.filter(item => item.id_country == id);
    return q.length;
}

const getBusinessLocation = (id_business) => {
    const cities = DataBase.retrieveCities();
    const countries = DataBase.retrieveCountries();
    const businesses = DataBase.retrieveBusiness();

    let business, city, country, cityDesc, countryDesc, id_country, id_city;
    business = businesses.find(e => e.id_business == id_business);

    if(business != null){
        city = cities.find(e => e.id_city == business.id_city);
        country = countries.find(e => e.id_country == business.id_country);

        if(city != null){ 
            cityDesc = city.description;
            id_city = parseInt(city.id_city);
        }else{ 
            cityDesc = 'Sin asignar';
            id_city = 0;
        };

        if(country != null){ 
            countryDesc = country.description 
            id_country = parseInt(country.id_country); 
        }else{ 
            countryDesc = 'Sin asignar';
            id_country = 0; 
        };
        
    } else { 
            cityDesc = "";
            id_city = 0;
            countryDesc = "";
            id_country = 0;
    }

    return business = {
        cityDesc,
        id_city,
        countryDesc,
        id_country
    };

}


exports.utils = {
    getFormCity,
    getFormOffer,
    getQuantityCities,
    getFormBusiness,
    getBusinessLocation
};
