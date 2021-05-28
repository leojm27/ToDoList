import React from 'react';
import { Link } from 'react-router-dom';
import dataBaseService from '../../services/dataBaseService';

export class CityInfo extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               city: null,
               success: true,
               index: this.props.match.params.id,
          }
     }

     componentDidMount = async () => {
          await dataBaseService.getCityById(this.state.index)
               .then(response => this.setState({
                    city: response.data,
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
                                   <th scope="col">Ciudad</th>
                                   <th scope="col">Pais</th>
                              </tr>
                         </thead>
                         <tbody>
                              {this.state.city != null

                                   ? <tr key={this.state.city.id}>
                                        <th scope="row">{this.state.city.id}</th>
                                        <td>{this.state.city.name}</td>
                                        <td>{this.state.city.countrie.name}</td>
                                   </tr>

                                   :
                                   (!this.state.success)
                                        ? (<tr><td colSpan="3" className="text-center">La Ciudad con ID {this.state.index} no existe.</td></tr>)
                                        : (<tr><td colSpan="3" className="text-center">Cargando resultados...</td></tr>)}

                         </tbody>
                    </table>

                    <div className="row mt-3">
                         <div>
                              <Link className="btn btn-primary m-1" to="/city">Volver</Link>
                         </div>
                    </div>
               </>
          );

     }

}