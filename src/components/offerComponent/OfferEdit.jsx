import React from 'react';
import { Link } from 'react-router-dom';
import dataBaseService from '../../services/dataBaseService';

export class OfferEdit extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               success: false,
               description: '',
               position: '',
               offer: null,
               index: this.props.match.params.id,
          }
     }

     componentDidMount = async () => {
          await dataBaseService.getJobById(this.state.index)
               .then(response => this.setState({
                    offer: response.data,
                    description: response.data.description,
                    position: response.data.position,
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
          const id = this.state.index;
          const description = this.state.description;
          const offer = {
               description
          };

          if (description.length >= 6) {
               this.editOffer(id, offer);
          } else {
               alert("Complete los datos correctamente. (minimo 6 caracteres)")
          }
     }

     editOffer = async (id, offer) => {
          await dataBaseService.updateJob(id, offer)
               .then(
                    response => {
                         this.setState({
                              message: `La Oferta Laboral ${this.state.position} fue Editada correctamente.`,
                         })
                         alert(this.state.message);
                         this.props.history.push('/jobs');
                    }
               )
               .catch(
                    err => {
                         this.setState({
                              message: `No es posible Editar la Oferta Laboral ${this.state.position}.`,
                         })
                         alert(this.state.message);
                    }
               )
     }

     render() {
          return (
               <>
                    {(this.state.offer !== null)
                         ? (<form className="row col align-items-start align-self-start"
                              onSubmit={(e) => this.submitForm(e)}>

                              <h5>Ingresar Oferta Laboral</h5>

                              <div className=" row">
                                   <div className="">
                                        <label className="col-form-label">Posición Laboral</label>
                                   </div>

                                   <div className="">
                                        <input type="text" name="position" disabled
                                             value={this.state.position} className="form-control"
                                             onChange={(e) => this.handleForm(e)} />
                                   </div>
                              </div>

                              <div className=" row">
                                   <div className="">
                                        <label className="col-form-label">Descripción</label>
                                   </div>

                                   <div className="">
                                        <input type="text" name="description"
                                             value={this.state.description} className="form-control"
                                             onChange={(e) => this.handleForm(e)} />
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
                                        <h5>La Oferta Laboral seleccionado con ID {this.state.index} no existe.</h5>
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