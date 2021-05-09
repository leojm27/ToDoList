import React from 'react';
import { CityForm } from '../components/cityComponent/CityForm';
import { CityTable } from '../components/cityComponent/CityTable';

export class CityView extends React.Component {

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
              
                  <CityForm 
                      cities={ this.props.cities }
                      countries={ this.props.countries }
                      addCity = { this.props.addCity }/>
              </div>

              <div className="col">
                  <CityTable 
                      cities={ this.props.cities } 
                      countries={ this.props.countries }
                      onDelete={ this.props.onDelete } />
              </div>

            </div>
      );
  }
     

}