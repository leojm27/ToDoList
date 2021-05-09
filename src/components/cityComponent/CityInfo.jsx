import React from 'react';
import { Link } from 'react-router-dom';
import DataBase from '../../utils/DataBase';
import { utils } from '../../utils/Utils';

export class CityInfo extends React.Component {

     constructor(props){
     super(props);
     this.state = {
          description: "",
          cities: DataBase.retrieveCities(),
          index: this.props.match.params.id,
     }
     }

     render(){
          let item = this.state.cities.find(e => e.id_city == this.state.index);
          let country = utils.getFormCity(item);

          return (
               <>
               <table className="table">
                    <thead>
                         <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Ciudad</th>
                              <th scope="col">Pais</th>
                         </tr>
                    </thead>
                    <tbody>
                         { item != null 
                              
                         ? <tr key={ item.id_city }>
                              <th scope="row">{ item.id_city }</th>
                              <td>{ item.description }</td>
                              <td>{ country }</td>
                         </tr>
                                        
                         : (null) }
                              
                    </tbody>
               </table>

               { (item == null) ? <h5 className="text-center">La Ciudad de Id { this.state.index } no existe.</h5> : (null) }
               
               <div className="row mt-3">
                    <div>
                         <Link className="btn btn-primary m-1" to="/city">Volver</Link>
                    </div>
               </div>
               </>
          );
          
     }
     
}