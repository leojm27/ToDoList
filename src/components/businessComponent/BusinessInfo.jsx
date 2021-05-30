import React from 'react';
import { Link } from 'react-router-dom'
import dataBaseService from '../../services/dataBaseService';

export class BusinessInfo extends React.Component {

     constructor(props) {
          super(props); 
          this.state = {
               description: "",
               organizations: null,
               success: true,
               index: this.props.match.params.id,
          }
     }

     componentDidMount = async () => {
          await dataBaseService.getOrganizationById(this.state.index)
               .then(response => this.setState({
                    organizations: response.data,

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
                                   <th scope="col">ID</th>
                                   <th scope="col">Empresa</th>
                                   <th scope="col">Ciudad</th>
                              </tr>
                         </thead>
                         <tbody>

                              {(this.state.organizations != null)

                                   ? (<tr key={this.state.index}>
                                        <th scope="row">{this.state.organizations.id}</th>
                                        <td>{this.state.organizations.name}</td>
                                        <td>{this.state.organizations.place.name}</td>
                                   </tr>
                                   )
 
                                   : (!this.state.success)
                                        ? (<tr><td colSpan="3" className="text-center">La Empresa con ID {this.state.index} no existe.</td></tr>)
                                        : (<tr><td colSpan="3" className="text-center">Cargando resultados...</td></tr>)}

                         </tbody>
                    </table>

                    <div className="row mt-3">
                         <div>
                              <Link className="btn btn-primary m-1" to="/business">Volver</Link>
                         </div>
                    </div>

               </>
          );

     }

}