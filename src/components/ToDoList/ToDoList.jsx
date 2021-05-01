/* eslint-disable no-unused-expressions */
import React from 'react';


export class ToDoList extends React.Component {

     constructor(props){
          super(props);
          this.props = props;
          this.state = {
               tasks: ['Aprende React', 'Aprender WebPack', 'Aprender Babel' ],
               //inputValue: "",
               job: "",
               business: "",
               city: "",
               country: "",
               empty: "",
               elements:[]
          }
     }

     
     handleForm(e){
          e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
		});
     }

     submitForm(e){
          e.preventDefault();
          const { job, business, city, country } = this.state;
          const element = {job, business, city, country};
     
          if ( job && business && city && country ){
               this.setState({
                    elements: [...this.state.elements, element],
               })
          }else{
               alert("Debe completar todos los campos!.")
          }
          
     }

     deleteElement(key){
          console.log("eliminar: " + key);
          const elementNew = this.state.elements.filter((_, index) => index !== key)
          this.setState({
               elements: elementNew
          })
     }

     render(){
          return (
               <>
               <div className="row">

                    <form className="row col-6 align-items-start align-self-start"  onSubmit={(e) => this.submitForm(e)}>
                         <h5>Complete Datos</h5>

                         <div className=" row">
                              <div className="">
                                   <label className="col-form-label">Puesto de Trabajo</label>
                              </div>
                              
                              <div className="">
                                   <input type="text" name="job" className="form-control" onChange={(e) => this.handleForm(e)}/>
                              </div>
                         </div>

                         <div className="row">
                              <div>
                                   <label className="col-form-label">Empresa</label>
                              </div>
                              <div>
                                   <input type="text" name="business" className="form-control"  onChange={(e) => this.handleForm(e)}/>
                              </div>
                         </div>

                         <div className="row">
                              <div>
                                   <label className="col-form-label">Ciudad</label>
                              </div>
                              <div>
                                   <input type="text" name="city" className="form-control"  onChange={(e) => this.handleForm(e)}/>
                              </div>
                         </div>

                         <div className=" row">
                              <div>
                                   <label className=" col-form-label">Pais</label>
                              </div>
                              <div>
                                   <input type="text" name="country" className="form-control" onChange={(e) => this.handleForm(e)}/>
                              </div>
                         </div>

                         <div className="row mt-3">
                              <div>
                                   <button className="btn btn-primary" type="submit" >Agregar</button>
                              </div>
                         </div>

                    </form>

                    <div className="row col-6 align-items-end align-self-start">

                         <h5>Posiciones Laborales</h5>
                              { this.state.elements.map((element, index) => { 

                                   return <div className="card mb-2" key={ index }>
                                             <div className="card-body">
                                                  <h5 className="card-title">{ element.city } - en { element.country }</h5>
                                                  <p className="card-text">{ element.job } en { element.business } </p>
                                                  <button onClick={ () => this.deleteElement(index) } 
                                                       className="btn btn-danger btn-sm">Eliminar
                                                  </button>
                                             </div>
                                        </div> 
                                        
                              }) }
                    </div>

               </div>

               </>
          )
     }

}