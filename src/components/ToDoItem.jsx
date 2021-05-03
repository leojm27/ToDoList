import React from 'react';


export class ToDoItem extends React.Component {
     

     render(){
          return (
               <>

               <h6>todo Item</h6>
               <form className="row col-6 align-items-start align-self-start"  onSubmit={(e) => this.submitForm(e)}>
                         <h5>Complete Datos ITEMS</h5>

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

               </>
          )
     }
     

}