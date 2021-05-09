import React from 'react';
import { Link } from 'react-router-dom'
import DataBase from '../../utils/DataBase';
import { utils } from '../../utils/Utils';

export class CountryInfo extends React.Component {

constructor(props){
    super(props);
    this.state = {
         description: "",
         countries: DataBase.retrieveCountries(),
         index: this.props.match.params.id,
    }
}

     render(){

          const item = this.state.countries.find(e => e.id_country == this.state.index);
          const q = utils.getQuantityCities(item.id_country);

          return (
               <>
               <table className="table">
                    <thead>
                         <tr>
                              <th scope="col">#</th>
                              <th scope="col">Pais</th>
                              <th scope="col">Cantidad Ciudades</th>
                         </tr>
                    </thead>
                    <tbody> 

                         { item != null 
                         
                         ? <tr key={ this.state.index }>
                              <th scope="row">{ item.id_country}</th>
                              <td>{ item.description }</td>
                              <td>{ q }</td>  
                         </tr>
                                   
                         : (null) }

                    </tbody>
               </table>


               { (item == null) ? <h5 className="text-center">El Pais de Id { this.state.index } no existe.</h5> : (null) }
               
               <div className="row mt-3">
                    <div>
                         <Link className="btn btn-primary m-1" to="/country">Volver</Link>
                    </div>
               </div>
               
               </>
          );
     
     }
     
}