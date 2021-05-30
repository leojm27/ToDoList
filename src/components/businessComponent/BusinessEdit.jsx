import React from 'react';
import { Link } from 'react-router-dom';
import dataBaseService from '../../services/dataBaseService';

export class BusinessEdit extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               description: this.props.location.state.business.name,
               city: this.props.location.state.business.place.name,
               business: this.props.location.state.business,
               index: this.props.match.params.id,
          }
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
          const name = this.state.description;
          const organization = {
               name
          };

          if (name.length >= 4) {
               this.editBusiness(id, organization);
          } else {
               alert("Debe completar todos los campos!. (nombre minimo 4 caracteres)")
          }
     }

     editBusiness = async (id, business) => {
          await dataBaseService.updateOrganization(id, business)
               .then(
                    response => {
                         this.setState({
                              message: `La Empresa ${business.name} fue Editada correctamente.`,
                         })
                         alert(this.state.message);
                         this.props.history.push('/business');
                    }
               )
               .catch(
                    err => {
                         this.setState({
                              message: `No es posible Editar la Empresa ${business.name}.`,
                         })
                         alert(this.state.message);
                    }
               )
     }

     render() {
          return (
               <>
                    {<form className="row col align-items-start align-self-start" onSubmit={(e) => this.submitForm(e)}>
                         <h5>Editar Empresa</h5>

                         <div className="row">
                              <div className="">
                                   <label className="col-form-label">Nombre</label>
                              </div>

                              <div className="">
                                   <input type="text" name="description" value={this.state.description} className="form-control" onChange={(e) => this.handleForm(e)} />
                              </div>
                         </div>

                         <div className="row">
                              <div>
                                   <label className=" col-form-label">Ciudad</label>
                              </div>
                              <div className="">
                                   <input type="text" disabled name="city" value={this.state.city}
                                        className="form-control"/>
                              </div>
                         </div>

                         <div className="row mt-3">
                              <div>
                                   <button className="btn btn-success" type="submit" >Confirmar</button>
                                   <Link className="btn btn-danger m-2" to="/business">Cancelar</Link>
                              </div>
                         </div>

                    </form>}
               </>
          );

     }

}