import React from 'react';
import { CountryForm } from '../components/countryComponent/CountryForm';
import { CountryTable } from '../components/countryComponent/CountryTable';


export class CountryView extends React.Component {
     
  constructor(props){
    super(props); 
    this.props = props;
    this.state = {

    }
  }

  render(){
      return (
            <div className="row">
              
              <div className="col">
                <CountryForm 
                    countries={ (this.props.countries) ? this.props.countries : (null) }
                    addCountry = { this.props.addCountry }/>
              </div>

              <div className="col">
                <CountryTable 
                    countries={ (this.props.countries) ? this.props.countries : (null) } 
                    onDelete={ this.props.onDelete }/>
              </div>

            </div>
      );
  }
     

}