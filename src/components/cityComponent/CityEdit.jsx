import React from 'react';
import { Link } from 'react-router-dom';
import dataBaseService from '../../services/dataBaseService';

export class CityEdit extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               success: false,
               countries: [],
               description: '',
               id_country: 0,
               city: null,
               index: this.props.match.params.id,
          }
     }

     componentDidMount = async () => {
          await dataBaseService.getAllCountries()
               .then(response => this.setState({
                    countries: response.data,
               }))
               .catch(err => console.log(err))

          await dataBaseService.getCityById(this.state.index)
               .then(response => this.setState({
                    city: response.data,
                    description: response.data.name,
                    id_country: response.data.countrieId,
                    success: true,
               }))
               .catch(() => this.setState({
                    success: true,
               }))
     }

     handleForm = (e) => {
          e.preventDefault();
          this.setState({
               [e.target.name]: e.target.value,
          });
     }
 
     submitForm = (e) => {
          e.preventDefault();
          const name = this.state.description;
          const countrieId = this.state.id_country;
          const id = this.state.index;
          const city = {
               name,
               countrieId
          };

          if (name.length >= 4 && countrieId !== 0) {
               this.editCity(id, city);
          } else {
               alert("Debe completar el campo nombre. (minimo 4 caracteres).")
          }
     }

     editCity = async (id, city) => {
          await dataBaseService.updateCity(id, city)
               .then(
                    response => {
                         this.setState({
                              message: `La Ciudad ${city.name} fue Editada correctamente.`,
                         })
                         alert(this.state.message);
                         this.props.history.push('/city');
                    }
               )
               .catch(
                    err => {
                         this.setState({
                              message: `No es posible Editar la Ciudad ${city.name}.`,
                         })
                         alert(this.state.message);
                    }
               )
     }

     render() {
          return (
               <>
                    {(this.state.city !== null)
                         ? (<form className="row col align-items-start align-self-start"
                              onSubmit={(e) => this.submitForm(e)}>
                              <h5>Editar Ciudad</h5>

                              <div className="row">
                                   <div className="">
                                        <label className="col-form-label">Nombre</label>
                                   </div>

                                   <div className="">
                                        <input type="text" name="description" value={this.state.description}
                                             className="form-control" onChange={(e) => this.handleForm(e)} />
                                   </div>
                              </div>

                              <div className="row">
                                   <div>
                                        <label className=" col-form-label">Pais</label>
                                   </div>
                                   <div>
                                        <select
                                             name="id_country"
                                             value={this.state.id_country}
                                             onChange={(e) => {
                                                  this.handleForm(e)
                                             }}
                                             className="form-select">
                                             <option value="0">Seleccionar</option>

                                             {this.state.countries != null
                                                  ? (
                                                       this.state.countries.map((item, index) => {
                                                            return <option key={index} value={item.id}>
                                                                 {item.name}
                                                            </option>
                                                       })
                                                  ) : (null)}
                                        </select>
                                   </div>
                              </div>

                              <div className="row mt-3">
                                   <div>
                                        <button className="btn btn-success" type="submit" >Confirmar</button>
                                        <Link className="btn btn-danger m-2" to="/city">Cancelar</Link>
                                   </div>
                              </div>

                         </form>)
                         : (!this.state.success)
                              ? (<>
                                   <div className="row mt-3">
                                        <h5>Cargando resultados...</h5>
                                   </div>
                              </>)
                              : (<>
                                   <div className="row mt-3">
                                        <h5>La Ciudad seleccionado con ID {this.state.index} no existe.</h5>
                                   </div>
                                   <div className="row mt-3">
                                        <div className="col">
                                             <Link className="btn btn-primary m-2" to="/city">Volver</Link>
                                        </div>
                                   </div>
                              </>)

                    }
               </>
          );

     }

}