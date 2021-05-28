import dataBaseService from "../services/dataBaseService";

class DBCountries {

    getAllCountries = async () => {
        await dataBaseService.getAllCountries()
            .then(response => this.setState({
                countries: response.data
            }))
            .catch(err => console.log(err))
    }

    


}

export default new DBCountries();