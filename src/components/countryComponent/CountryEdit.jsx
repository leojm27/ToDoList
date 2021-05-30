import React from 'react';
import { Link } from 'react-router-dom';
import dataBaseService from '../../services/dataBaseService';

export class CountryEdit extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               success: true,
               description: this.props.location.state.country.name,
               country: this.props.location.state.country,
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
          const name = this.state.description;
          const id = this.state.index;
          const country = {
               name
          };

          if (name.length >= 4) {
               this.editCountry(id, country);
          } else {
               alert("Debe completar el campo nombre. (minimo 4 caracteres).")
          }
     }

     editCountry = async (id, country) => {
          await dataBaseService.updateCountry(id, country)
               .then(
                    response => {
                         this.setState({
                              message: `El País ${country.name} fue Editado correctamente.`,
                         })
                         alert(this.state.message);
                         this.props.history.push('/country');
                    }
               )
               .catch(
                    err => {
                         this.setState({
                              message: `No es posible Editar el País ${country.name}.`,
                         })
                         alert(this.state.message);
                    }
               )
     }

     render() {
          return (
               <>
                    {<form className="row col align-items-start align-self-start" onSubmit={(e) => this.submitForm(e)}>
                         <h5>Editar Pais</h5>

                         <div className="row">
                              <div className="">
                                   <label className="col-form-label">Nombre</label>
                              </div>

                              <div className="">
                                   <input type="text" name="description" value={this.state.description} className="form-control" onChange={(e) => this.handleForm(e)} />
                              </div>
                         </div>

                         <div className="row mt-3">
                              <div className="col">
                                   <button className="btn btn-success" type="submit" >Confirmar</button>
                                   <Link className="btn btn-danger m-2" to="/country">Cancelar</Link>
                              </div>
                         </div>

                    </form>}
               </>
          );

     }

}