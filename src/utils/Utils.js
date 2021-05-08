const { default: DataBase } = require("./DataBase");

const cities = DataBase.retrieveCities();
const countries = DataBase.retrieveCountries();
const offers = DataBase.retrieveOffers();
const businesses = DataBase.retrieveBusiness();


const getFormBusiness = (item) => {
    let businesForm, cityDesc, countryDesc, businessDesc;
        
    let city = cities.find(e => e.id_city == item.id_city);
    let country = countries.find(e => e.id_country == item.id_country);
    let business = businesses.find(e => e.id_business == item.business);

    if(city == null){ cityDesc = 'Sin asignar' }else{ cityDesc = city.description };
    if(country == null){ countryDesc = 'Sin asignar' }else{ countryDesc = country.description };
    if(business == null){ businessDesc = 'Sin asignar' }else{ businessDesc = business.description };

    businesForm = { 
        city: cityDesc, 
        country: countryDesc,
        business: businessDesc};

    return businesForm;
};


const getFormCity = (item) => {
    let cityForm, countryDesc;
    let country = countries.find(e => e.id_country == item.id_country);
    if(country == null){ countryDesc = 'Sin asignar' }else{ countryDesc = country.description };
    cityForm = countryDesc;

    return cityForm;
};


const getFormOffer = (item) => {
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


const getCities = (id_country) => {
    let citiesByCountry = cities.filter(item => item.id_country == id_country);
    return citiesByCountry;
};

const getBusinessLocation = (id_business) => {
    let business, city, country, cityDesc, countryDesc, businessDesc, id_country, id_city;
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
    getCities,
    getFormCity,
    getFormOffer,
    getFormBusiness,
    getBusinessLocation
};

/*
offers:

[
    {
        "id_job":275731,
        "job":"Dev PHP y Jquery",
        "business":692867,
        "id_city":723064,
        "id_country":705154
    }
]


countries:

[
    {
        "description":"Mendoza",
        "id_country":201918
    }
]

business:

[
    {
        "id_business":659156,
        "description":"IncluIT",
        "id_country":82202,
        "id_city":217321
    }
]

cities:

[
    {
        "id_city":830298,
        "description":"Mendoza",
        "id_country":201918
    }
]


*/