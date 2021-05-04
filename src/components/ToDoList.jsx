/* eslint-disable no-unused-expressions */
import React from 'react';
import { ToDoTable } from './ToDoTable';


export class ToDoList extends React.Component {

     constructor(props){
          super(props);
          this.props = props;
          this.state = {
               id_job: "",
               job: "",
               business: "",
               city: "",
               country: "",
               empty: "",
               offers:[]
          }
     }

     componentDidMount(){
          if(localStorage.getItem("offers") != null){
			this.setState({
                    offers: JSON.parse(localStorage.getItem("offers"))
            })
		}
     }
     
     saveData = (offers) =>{ 
          window.localStorage.setItem("offers", JSON.stringify(offers));
     }

     formEmpty = () => {
          this.setState({
               id_job: "",
               job: "",
               business: "",
               city: "",
               country: ""
          }); 
     }

     handleForm = (e) => {
          e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
		});
     }

     submitForm = (e) => {
          e.preventDefault();
          const { job, business, city, country } = this.state;
          let id_job = Math.floor(Math.random() * 999999);
          const offer = {id_job, job, business, city, country};
          let offersNew = [];
     
          if ( job && business && city && country ){

               offersNew = [...this.state.offers, offer];
               this.setState({
                    offers: offersNew,
               });
               window.localStorage.setItem("offers", JSON.stringify(offersNew));
               this.formEmpty();
          }else{
               alert("Debe completar todos los campos!.")
          }


          window.localStorage.setItem("offers", JSON.stringify(offersNew));
          
     }

     deleteElement = (key) => {
          console.log("eliminar: " + key);
          const offersNew = this.state.offers.filter((_, index) => index !== key);
          window.localStorage.setItem("offers", JSON.stringify(offersNew))
          this.setState({
               offers: offersNew
          })
     }

     render(){
          return (
               <>
               <div className="row mt-3">
                  
                    <form className="row col align-items-start align-self-start"  onSubmit={(e) => this.submitForm(e)}>
                         <h5>Complete Datos</h5>

                         <div className=" row">
                              <div className="">
                                   <label className="col-form-label">Puesto de Trabajo</label>
                              </div>
                              
                              <div className="">
                                   <input type="text" name="job" value={ this.state.job } className="form-control" onChange={(e) => this.handleForm(e)}/>
                              </div>
                         </div>

                         <div className="row">
                              <div>
                                   <label className="col-form-label">Empresa</label>
                              </div>
                              <div>
                                   <input type="text" name="business" value={ this.state.business } className="form-control"  onChange={(e) => this.handleForm(e)}/>
                              </div>
                         </div>

                         <div className=" row">
                              <div>
                                   <label className=" col-form-label">Pais</label>
                              </div>
                              <div>
                                   <input type="text" name="country" value={ this.state.country } className="form-control" onChange={(e) => this.handleForm(e)}/>
                              </div>
                         </div>

                         <div className="row">
                              <div>
                                   <label className="col-form-label">Ciudad</label>
                              </div>
                              <div>
                                   <input type="text" name="city" value={ this.state.city } className="form-control"  onChange={(e) => this.handleForm(e)}/>
                              </div>
                         </div>

                         <div className="row mt-3">
                              <div>
                                   <button className="btn btn-primary" type="submit" >Agregar</button>
                              </div>
                         </div>

                    </form>

                    
                    <div className="col">
                         <ToDoTable offers={ this.state.offers }  onDelete={ this.deleteElement }/>
                    </div>
                    

               </div>

               </>
          )
     }

     /*
     
     <div className="row col-6 align-items-end align-self-start">

                         <h5>Posiciones Laborales</h5>
                              { this.state.offers.map((offer, index) => { 

                                   return <div className="card mb-2" key={ index }>
                                             <div className="card-body">
                                                  <h5 className="card-title">{ offer.city }- ({ offer.country })</h5>
                                                  <p className="card-text">{ offer.job } en { offer.business } </p>
                                                  <button onClick={ () => this.deleteElement(index) } 
                                                       className="btn btn-danger btn-sm">Eliminar
                                                  </button>
                                             </div>
                                        </div> 
                                        
                              }) }
                    </div>
                    
     */
}