import React from 'react';
import { Link } from 'react-router-dom'
import dataBaseService from '../../services/dataBaseService';

export class OfferInfo extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               description: "",
               offer: null,
               success: true,
               index: this.props.match.params.id,
          }
     }

     componentDidMount = async () => {
          await dataBaseService.getJobById(this.state.index)
               .then(response => this.setState({
                    offer: response.data,
               })) 
               .catch(() => this.setState({
                    success: false,
               }))
     }

     render() {

          return (
               <>
                    <table className="table">
                         <thead>
                              <tr>
                                   <th scope="col">#</th>
                                   <th scope="col">Posición Laboral</th>
                                   <th scope="col">Descripción</th>
                                   <th scope="col">Empresa</th>
                              </tr>
                         </thead>
                         <tbody>
                              { (this.state.offer != null)

                                   ?( <tr key={this.state.index}>
                                        <th scope="row">{this.state.index}</th>
                                        <td>{this.state.offer.position}</td>
                                        <td>{this.state.offer.description}</td>
                                        <td>{(this.state.offer.organization != null) ? this.state.offer.organization.name : 'Sin asignar'}</td>
                                   </tr>)

                                   : (!this.state.success)
                                        ? (<tr><td colSpan="4" className="text-center">La Oferta Laboral con ID {this.state.index} no existe.</td></tr>)
                                        : (<tr><td colSpan="4" className="text-center">Cargando resultados...</td></tr>)
                                        
                              }
                         </tbody>
                    </table>

                    <div className="row mt-3">
                         <div>
                              <Link className="btn btn-primary m-1" to="/jobs">Volver</Link>
                         </div>
                    </div>

               </>
          );

     }

}