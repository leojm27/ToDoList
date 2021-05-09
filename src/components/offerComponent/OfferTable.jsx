import React from 'react';
import { utils } from '../../utils/Utils';
import { Redirect } from 'react-router-dom';

export class OfferTable extends React.Component {

    constructor(props){
      super(props);
      this.state = {
          isRedirect: false,
          index: ""
      }
    }

  infoBusiness = (id) => {
    this.setState({
      isRedirect: true,
      index: id
    });
  }
     
  render(){
          return (
            <>
              {
                (this.state.isRedirect == true)
                
                ? <Redirect to={`/jobs/${this.state.index}`} />
                
                : <table className="table">
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
                    let offer = utils.getFormOffer(item)
                    return <tr key={ index }>
                              <th scope="row">{ index + 1 }</th>
                              <td>{ item.job }</td>
                              <td>{ offer.business }</td>
                              <td>{ offer.country }</td>
                              <td>{ offer.city }</td>
                              <td>
                                <button type="button" className="btn btn-info btn-sm m-1" 
                                        onClick={ 
                                          () => this.infoBusiness(item.id_job)
                                        }>Info</button>
                                <button type="button" className="btn btn-danger btn-sm m-1" onClick={ () => this.props.onDelete(index) }>Eliminar</button>
                              </td>
                          </tr>
                        
                    }) }

                    </tbody>
                </table>
                }
            </>
          );
     
  }
    
}