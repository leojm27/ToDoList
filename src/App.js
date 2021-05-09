import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './views/Home';
import { Main } from './views/Main';
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


//function App(){
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


    render(){

      return (
        <>
          <Navbar />
  
          <div className="container">
  
            <Switch>
  
              <Route path="/" exact sensitive component={ Home } />
              <Route path="/jobs" exact sensitive component={ Main } /> 
              <Route path="/jobs/:id" exact sensitive component={ OfferInfo } /> 
              <Route path="/business" exact sensitive component={ BusinessView } />
              <Route path="/business/:id" exact sensitive component={ BusinessInfo } /> 
              <Route path="/country" exact sensitive component={ CountryView } />
              <Route path="/country/:id" exact sensitive component={ CountryInfo } /> 
              <Route path="/city" exact sensitive component={ CityView } />
              <Route path="/city/:id" exact sensitive component={ CityInfo } /> 
  
              <Route component={ NotFoundView } />
  
            </Switch>
  
          </div>
  
        </>
      );

    }
  
}

//export default App;
