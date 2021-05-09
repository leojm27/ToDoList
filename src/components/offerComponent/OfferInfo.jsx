import React from 'react';
import { Link } from 'react-router-dom'
import DataBase from '../../utils/DataBase';
import { utils } from '../../utils/Utils';

export class OfferInfo extends React.Component {

     constructor(props){
          super(props);
          this.state = {
               description: "",
               offers: DataBase.retrieveOffers(),
               index: this.props.match.params.id,
          }
     }

     render(){ 
          let item = this.state.offers.find(e => e.id_job == this.state.index);
          let offer = utils.getFormOffer(item);

          return (
               <>
               <table className="table">
                    <thead>
                         <tr>
                         <th scope="col">#</th>
                         <th scope="col">Descripcion</th>
                         <th scope="col">Empresa</th>
                         <th scope="col">Pais</th>
                         <th scope="col">Ciudad</th>
                         </tr>
                    </thead>
                    <tbody> 

                    { item != null 
                         
                    ? <tr key={ this.state.index }>
                              <th scope="row">{ this.state.index }</th>
                              <td>{ item.job }</td>
                              <td>{ offer.business }</td>
                              <td>{ offer.country }</td>
                              <td>{ offer.city }</td>
                         </tr>
                                   
                    : (null) }

                    </tbody>
               </table>


               { (item == null) ? <h5 className="text-center">La Oferta Laboral de Id { this.state.index } no existe.</h5> : (null) }
               
               <div className="row mt-3">
                    <div>
                         <Link className="btn btn-primary m-1" to="/jobs">Volver</Link>
                    </div>
               </div>
               
               </>
          );
          
     }
     
}