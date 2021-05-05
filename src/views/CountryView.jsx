import React from 'react';
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

  render(){
      return (
            <div className="row">
              
              <div className="col">
              
                <h5>form country</h5>

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