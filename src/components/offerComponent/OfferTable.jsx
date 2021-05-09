import React from 'react';
import DataBase from '../../utils/DataBase';
import { utils } from '../../utils/Utils';

export class OfferTable extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.state = {
         offers: [],
         cities: [],
         business: [],
         countries: []
    }
  }
     
  render(){
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
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>

                  { this.props.offers.map((item, index) => { 
                  //let offer = this.getOffer(item)
                  let offer = utils.getFormOffer(item)
                  return <tr key={ index }>
                            <th scope="row">{ index + 1 }</th>
                            <td>{ item.job }</td>
                            <td>{ offer.businness }</td>
                            <td>{ offer.country }</td>
                            <td>{ offer.city }</td>
                            <td>
                              <button type="button" className="btn btn-info btn-sm m-1">Info</button>
                              <button type="button" className="btn btn-danger btn-sm m-1" onClick={ () => this.props.onDelete(index) }>Eliminar</button>
                            </td>
                        </tr>
                      
                  }) }

                </tbody>
              </table>
            </>
          );
     
  }
     
}