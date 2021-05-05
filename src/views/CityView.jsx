import React from 'react';
import { CityTable } from '../components/cityComponent/CityTable';

export class CityView extends React.Component {
     

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
              
                <h5>form city</h5>

              </div>

              <div className="col">
              
                <CityTable 
                    cities={ (this.state.cities) ? this.state.cities : (null) } 
                    onDelete={ this.deleteElement }  />

              </div>

            </div>
      );
  }
     

}