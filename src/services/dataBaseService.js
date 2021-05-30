import axios from 'axios';

const API_URL = 'https://api-fake-pilar-tecno.herokuapp.com';
const API_URL_COUNTRIES = `${API_URL}/countries`;
const API_URL_PLACES = `${API_URL}/places`;
const API_URL_ORGANIZATIONS = `${API_URL}/organizations`;
const API_URL_JOBS = `${API_URL}/jobs`;


class DBService {   

    // COUNTRIES
    getAllCountries() {        
        return axios.get(`${API_URL_COUNTRIES}`); 
    }

    getCountryById(id) {    
        return axios.get(`${API_URL_COUNTRIES}/${id}`); 
    }

    deleteCountry(id) {     
        return axios.delete(`${API_URL_COUNTRIES}/${id}`);
    }

    createCountry(country) {
        return axios.post(`${API_URL_COUNTRIES}`, country);
    }

    updateCountry(id, country) {
        return axios.patch(`${API_URL_COUNTRIES}/${id}`, country);
    }

    // PLACES = CITIES
    getAllCities() {        
        return axios.get(`${API_URL_PLACES}?_expand=countrie`); 
    }

    getCityById(id) {    
        return axios.get(`${API_URL_PLACES}/${id}?_expand=countrie`); 
    }

    deleteCity(id) {     
        return axios.delete(`${API_URL_PLACES}/${id}`);   
    }

    createCity(city) {
        return axios.post(`${API_URL_PLACES}`, city);
    }

    updateCity(id, city) {
        return axios.patch(`${API_URL_PLACES}/${id}`, city);
    }

    // ORGANIZATIONS
    getAllOrganizations() {        
        return axios.get(`${API_URL_ORGANIZATIONS}?_expand=place`); 
    }

    getOrganizationById(id) {    
        return axios.get(`${API_URL_ORGANIZATIONS}/${id}?_expand=place`); 
    }

    deleteOrganization(id) {     
        return axios.delete(`${API_URL_ORGANIZATIONS}/${id}`);   
    }

    createOrganization(organization) {
        return axios.post(`${API_URL_ORGANIZATIONS}`, organization);
    }

    updateOrganization(id, organization) {
        return axios.patch(`${API_URL_ORGANIZATIONS}/${id}`, organization);
    }

    // JOBS
    getAllJobs() {        
        return axios.get(`${API_URL_JOBS}?_expand=organization`); 
    }

    getJobById(id) {    
        return axios.get(`${API_URL_JOBS}/${id}?_expand=organization`); 
    }

    deleteJob(id) {     
        return axios.delete(`${API_URL_JOBS}/${id}`);   
    }

    createJob(job) {
        return axios.post(`${API_URL_JOBS}`, job);
    }

    updateJob(id, job) {
        return axios.patch(`${API_URL_JOBS}/${id}`, job);
    }

}

export default new DBService();