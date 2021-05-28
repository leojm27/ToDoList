import axios from 'axios';


const DATA_BASE_URL = 'https://api-fake-pilar-tecno.herokuapp.com';
//const COUNTRIES_URL =  `${DATA_BASE_URL}/countries`;
//const COUNTRIES_URL =  `${COURSE_API_URL}/instructors/${INSTRUCTOR}`;

class DBService {   

    // countries
    getAllCountries() {        
        return axios.get(`${DATA_BASE_URL}/countries`); 
    }

    getCountryById(id) {    
        return axios.get(`${DATA_BASE_URL}/countries/${id}`); 
    }

    deleteCountry(id) {     
        return axios.delete(`${DATA_BASE_URL}/countries/${id}`);
    }

    createCountry(country) {
        return axios.post(`${DATA_BASE_URL}/countries`, country);
    }

    // FALTA ACTUALIZAR COUNTRY

    // PLACES
    getAllCities() {        
        return axios.get(`${DATA_BASE_URL}/places?_expand=countrie`); 
    }

    getCityById(id) {    
        return axios.get(`${DATA_BASE_URL}/places/${id}?_expand=countrie`); 
    }

    deleteCity(id) {     
        return axios.delete(`${DATA_BASE_URL}/places/${id}`);   
    }

    createCity(city) {
        return axios.post(`${DATA_BASE_URL}/places`, city);
    }

    // ORGANIZATIONS
    getAllOrganizations() {        
        return axios.get(`${DATA_BASE_URL}/organizations?_expand=place`); 
    }

    getOrganizationById(id) {    
        return axios.get(`${DATA_BASE_URL}/organizations/${id}?_expand=place`); 
    }

    deleteOrganization(id) {     
        return axios.delete(`${DATA_BASE_URL}/organizations/${id}`);   
    }

    createOrganization(organization) {
        return axios.post(`${DATA_BASE_URL}/organizations`, organization);
    }

    // JOBS
    getAllJobs() {        
        return axios.get(`${DATA_BASE_URL}/jobs?_expand=organization`); 
    }

    getJobById(id) {    
        return axios.get(`${DATA_BASE_URL}/jobs/${id}?_expand=organization`); 
    }

    deleteJob(id) {     
        return axios.delete(`${DATA_BASE_URL}/jobs/${id}`);   
    }

    createJob(job) {
        return axios.post(`${DATA_BASE_URL}/jobs`, job);
    }



    

}

export default new DBService();