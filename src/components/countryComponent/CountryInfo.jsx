import React from 'react';
import { Link } from 'react-router-dom'
import dataBaseService from '../../services/dataBaseService';

export class CountryInfo extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               success: true,
               country: null,
               index: this.props.match.params.id,
          }
     }

     componentDidMount = async () => {
          await dataBaseService.getCountryById(this.state.index)
               .then(response => this.setState({
                    country: response.data,
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
                                   <th scope="col">Pais</th>
                              </tr>
                         </thead>
                         <tbody>
                              { (this.state.country != null)

                                   ? <tr key={this.state.index}>
                                        <th scope="row">{this.state.country.id}</th>
                                        <td>{this.state.country.name}</td>
                                   </tr> 

                                   :(!this.state.success)
                                        ? (<tr><td colSpan="2" className="text-center">El Pais con ID {this.state.index} no existe.</td></tr>)
                                        : (<tr><td colSpan="2" className="text-center">Cargando resultados...</td></tr>)

                              }
                         </tbody>
                    </table>

                    <div className="row mt-3">
                         <div>
                              <Link className="btn btn-primary m-1" to="/country">Volver</Link>
                         </div>
                    </div>

               </>
          );

     }

}