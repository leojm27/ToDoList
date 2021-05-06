import React from 'react';
import { CountryForm } from '../components/countryComponent/CountryForm';
import { CountryTable } from '../components/countryComponent/CountryTable';


export class CountryView extends React.Component {
     

  constructor(props){
    super(props);
    this.props = props;
    this.state = {
          business:[],
          citiesForCountry:[],
          cities: [],
          countries: [],
          id_business: 0,
          description: "",
          id_city: 0,
          message: "message",
          selected: "",
          selectCity: 0,
          selectCountry: 0,
    }
  }
     
  componentDidMount(){
     if(localStorage.getItem("business") != null){
	     this.setState({
               business: JSON.parse(localStorage.getItem("business"))
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
     }
  }

  updateContries = (countriesNew) => {
    this.setState({
      countries: countriesNew,
    });
    window.localStorage.setItem("countries", JSON.stringify(countriesNew));
  }

  deleteElement = (key) => {
    const countriesNew = this.state.countries.filter((_, index) => index !== key);
    window.localStorage.setItem("countries", JSON.stringify(countriesNew))
    this.setState({
      countries: countriesNew
    })
  }

  render(){
      return (
            <div className="row">
              
              <div className="col">
              
                <CountryForm 
                    countries={ (this.state.countries) ? this.state.countries : (null) } 
                    onUpdate={ this.updateContries }/>

              </div>

              <div className="col">
              
                <CountryTable 
                    countries={ (this.state.countries) ? this.state.countries : (null) } 
                    onDelete={ this.deleteElement }  />

              </div>

            </div>
      );
  }
     

}