import React from 'react';
import { Link } from 'react-router-dom'
import DataBase from '../../utils/DataBase';
import { utils } from '../../utils/Utils';

export class BusinessInfo extends React.Component {

     constructor(props){
     super(props);
     this.state = {
          description: "",
          business: DataBase.retrieveBusiness(),
          index: this.props.match.params.id,
     }
     }

     render(){

          let item = this.state.business.find(e => e.id_business == this.state.index);
          let business = utils.getFormBusiness(item);

          return (
               <>
               <table className="table">
                    <thead>
                    <tr>
                         <th scope="col">ID</th>
                         <th scope="col">Empresa</th>
                         <th scope="col">Pais</th>
                         <th scope="col">Ciudad</th>
                    </tr>
                    </thead>
                    <tbody>

                    { (item != null)
                    
                    ? ( <tr key={ this.state.index }>
                              <th scope="row">{ item.id_business }</th>
                              <td>{ item.description }</td>
                              <td>{ business.country }</td>
                              <td>{ business.city }</td>
                         </tr>
                    ) : (null) }

                    </tbody>
               </table>


               { (item == null) ? <h5 className="text-center">La Empresa de Id { this.state.index } no existe.</h5> : (null) }

               <div className="row mt-3">
                    <div>
                         <Link className="btn btn-primary m-1" to="/business">Volver</Link>
                    </div>
               </div>
               
               </>
          );
          
     }
     
}