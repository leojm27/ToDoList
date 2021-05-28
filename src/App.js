import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './views/Home';
import { NotFoundView } from './views/NotFoundView';
import { Route, Switch } from 'react-router-dom';
import { BusinessView } from './views/BusinessView';
import { CountryView } from './views/CountryView';
import { CityView } from './views/CityView';
import DataBase from './utils/DataBase';
import { CountryInfo } from './components/countryComponent/CountryInfo';
import { BusinessInfo } from './components/businessComponent/BusinessInfo';
import { OfferInfo } from './components/offerComponent/OfferInfo';
import { CityInfo } from './components/cityComponent/CityInfo';
import { OfferView } from './views/OfferView';
import dataBaseService from './services/dataBaseService';


export class App extends React.Component {

  constructor() {
    super();
    this.state = {
      //countries: DataBase.retrieveCountries(),
      countries: [],
      //cities: DataBase.retrieveCities(),
      cities: [],
      business: DataBase.retrieveBusiness(),
      offers: DataBase.retrieveOffers()
    }
  }


  componentDidMount = () => {

    /*await dataBaseService.getAllCountries()
      .then(response => this.setState({
        countries: response.data
      }))
      .catch(err => console.log(err))

    await dataBaseService.getAllCountries()
      .then(response => this.setState({
        countries: response.data
      }))
      .catch(err => console.log(err))*/



  }
  // country
  /*deleteCountry = (key) => {
    const countriesNew = this.state.countries.filter((_, index) => index !== key);
    window.localStorage.setItem("countries", JSON.stringify(countriesNew));
    this.setState({
      countries: countriesNew
    });
  }*/

  /*deleteCountry = async (key) => {

    await dataBaseService.deleteCountry(key)
      .then(() => this.setState({
        message: `Se elimino correctamente el País con ID ${key}.`
      }))
      .catch(() => this.setState({
        message: `No se pudo eliminar el País con ID ${key}.`

      }))

    return this.state.message;

  }*/



  /*addCountry = (countriesNew) => {
    this.setState({
      countries: countriesNew,
    });
    window.localStorage.setItem("countries", JSON.stringify(countriesNew));
  }*/


  // city
  /*deleteCity = (key) => {
    const citiesNew = this.state.cities.filter((_, index) => index !== key);
    window.localStorage.setItem("cities", JSON.stringify(citiesNew));
    this.setState({
      cities: citiesNew
    });
  }*/

  /*addCity = (citiesNew) => {
    this.setState({
      cities: citiesNew,
    });
    window.localStorage.setItem("cities", JSON.stringify(citiesNew));
  }*/


  // business
  /*deleteBusiness = (key) => {
    const businessNew = this.state.business.filter((_, index) => index !== key);
    window.localStorage.setItem("business", JSON.stringify(businessNew));
    this.setState({
      business: businessNew
    });
  }*/

  /*addBusiness = (businessNew) => {
    this.setState({
      business: businessNew,
    });
    window.localStorage.setItem("business", JSON.stringify(businessNew));
  }*/


  // offer
  /*deleteOffers = (key) => {
    const offersNew = this.state.offers.filter((_, index) => index !== key);
    window.localStorage.setItem("offers", JSON.stringify(offersNew));
    this.setState({
      offers: offersNew
    });
  }*/

  /*addOffers = (offersNew) => {
    this.setState({
      offers: offersNew,
    });
    window.localStorage.setItem("offers", JSON.stringify(offersNew));
  }*/




  render() {

    return (
      <>
        <Navbar />

        <div className="container">

          <Switch>

            <Route path="/" exact sensitive component={Home} />
            <Route path="/jobs" exact sensitive render={() =>
              <OfferView 
                //offers={this.state.offers}
                //cities={this.state.cities}
                //countries={this.state.countries}
                //business={this.state.business}
                //onDelete={this.deleteOffers}
                //addOffers={this.addOffers} 
                />} />
            <Route path="/jobs/:id" exact sensitive component={OfferInfo} />
            <Route path="/business" exact sensitive component={BusinessView} />
            <Route path="/business/:id" exact sensitive component={BusinessInfo} />
            <Route path="/country" exact sensitive component={CountryView} />
            <Route path="/country/:id" exact sensitive component={CountryInfo} />
            <Route path="/city" exact sensitive component={CityView} />
            <Route path="/city/:id" exact sensitive component={CityInfo} />

            <Route component={NotFoundView} />

          </Switch>

        </div>

      </>
    );

  }

}

//export default App;
