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


export class App extends React.Component{

    constructor(){
      super();
      this.state = {
        countries: DataBase.retrieveCountries(),
        cities: DataBase.retrieveCities(),
        business: DataBase.retrieveBusiness(),
        offers: DataBase.retrieveOffers()  
      }
    }


    // country
    deleteCountry = (key) => {
      const countriesNew = this.state.countries.filter((_, index) => index !== key);
      window.localStorage.setItem("countries", JSON.stringify(countriesNew));
      this.setState({
        countries: countriesNew
      });
    }

    addCountry = (countriesNew) => {
      this.setState({
        countries: countriesNew,
      });
      window.localStorage.setItem("countries", JSON.stringify(countriesNew));
    }


    // city
    deleteCity = (key) => {
      const citiesNew = this.state.cities.filter((_, index) => index !== key);
      window.localStorage.setItem("cities", JSON.stringify(citiesNew));
      this.setState({
        cities: citiesNew
      });
    }

    addCity = (citiesNew) => {
      this.setState({
        cities: citiesNew,
      });
      window.localStorage.setItem("cities", JSON.stringify(citiesNew));
    }


    // business
    deleteBusiness = (key) => {
      const businessNew = this.state.business.filter((_, index) => index !== key);
      window.localStorage.setItem("business", JSON.stringify(businessNew));
      this.setState({
        business: businessNew
      });
    }

    addBusiness = (businessNew) => {
      this.setState({
        business: businessNew,
      });
      window.localStorage.setItem("business", JSON.stringify(businessNew));
    }


    // offer
    deleteOffers = (key) => {
      const offersNew = this.state.offers.filter((_, index) => index !== key);
      window.localStorage.setItem("offers", JSON.stringify(offersNew));
      this.setState({
        offers: offersNew
      });
    }

    addOffers = (offersNew) => {
      this.setState({
        offers: offersNew,
      });
      window.localStorage.setItem("offers", JSON.stringify(offersNew));
    }

    
    render(){

      return (
        <>
          <Navbar />
  
          <div className="container">
  
            <Switch>
  
              <Route path="/" exact sensitive component={ Home } />
              <Route path="/jobs" exact sensitive render={() => 
                    <OfferView  offers = { this.state.offers }
                                cities = { this.state.cities }
                                countries = { this.state.countries }
                                business = { this.state.business }
                                onDelete = { this.deleteOffers } 
                                addOffers = { this.addOffers }/> } /> 
              <Route path="/jobs/:id" exact sensitive component={ OfferInfo } /> 
              <Route path="/business" exact sensitive render={() => 
                    <BusinessView cities = { this.state.cities }
                                  countries = { this.state.countries }
                                  business = { this.state.business }
                                  onDelete = { this.deleteBusiness } 
                                  addBusiness = { this.addBusiness }/> } />
              <Route path="/business/:id" exact sensitive component={ BusinessInfo } /> 

              <Route path="/country" exact  sensitive render={() => 
                    <CountryView  countries = { this.state.countries }
                                  onDelete = { this.deleteCountry } 
                                  addCountry = { this.addCountry }/> }/>
              <Route path="/country/:id" exact sensitive component={ CountryInfo } /> 
              <Route path="/city" exact sensitive render={() => 
                    <CityView cities = { this.state.cities }
                              countries = { this.state.countries }
                              onDelete = { this.deleteCity } 
                              addCity = { this.addCity }/> } /> 
              <Route path="/city/:id" exact sensitive component={ CityInfo } /> 
  
              <Route component={ NotFoundView } />
  
            </Switch>
  
          </div>
  
        </>
      );

    }
  
}

//export default App;
