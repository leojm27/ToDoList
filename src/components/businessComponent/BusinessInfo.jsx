import React from 'react';
import { Link } from 'react-router-dom'
import DataBase from '../../utils/DataBase';

export class BusinessInfo extends React.Component {

constructor(props){
    super(props);
    this.state = {
         description: "",
         countries: DataBase.retrieveCountries(),
         index: this.props.match.params.id,
    }
}

render(){

     let item = this.state.countries.find(e => e.id_country == this.state.index);

     return (
          <>
          
          
          </>
     );
     
}
     
}