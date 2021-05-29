import React from 'react';


export class OfferForm extends React.Component {

     constructor(props){
          super(props);
          this.state = {
               business: 0,
               organization: 0,
               description: "",
               position: "",
          }
     }

     formEmpty = () => {
          this.setState({
               organization: 0,
               position: "",
               description: ""
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
          const organizationId = parseInt(this.state.organization);
          const position = this.state.position;
          const description = this.state.description;
          const offer = {
               position, 
               description, 
               organizationId
          };

          if ( description.length >= 6 && position.length >= 6 && organizationId !== 0 ){
          this.props.addOffers(offer);
          this.formEmpty();
          console.log(offer); 

          } else {

               alert("Complete los datos correctamente. (minimo 6 caracteres)") 
               
          }
     }

     render(){
          return (
            <>
                <form className="row col align-items-start align-self-start"  
                         onSubmit={(e) => this.submitForm(e)}>

                         <h5>Ingresar Oferta Laboral</h5>

                         <div className=" row">
                              <div className="">
                                   <label className="col-form-label">Posición Laboral</label>
                              </div>
                              
                              <div className="">
                                   <input type="text" name="position" 
                                        value={ this.state.position } className="form-control" 
                                        onChange={(e) => this.handleForm(e)}/>
                              </div>
                         </div>

                         <div className=" row">
                              <div className="">
                                   <label className="col-form-label">Descripción</label>
                              </div>
                              
                              <div className="">
                                   <input type="text" name="description" 
                                        value={ this.state.description } className="form-control" 
                                        onChange={(e) => this.handleForm(e)}/>
                              </div>
                         </div>

                         <div className="row">
                              <div>
                                   <label className=" col-form-label">Empresa</label>
                              </div>
                              <div>
                                   <select 
                                   name="organization"
                                   value={this.state.organization}
                                   onChange={(e) => {
                                        this.handleForm(e)
                                   }} 
                                   className="form-select">
                                        <option value="0">Seleccionar</option>

                                        { this.props.organizations != null
                                                       
                                        ? (

                                        this.props.organizations.map((item, index) => { 
                                        return <option key={ index } value={ item.id }> 
                                                       { item.name } 
                                             </option>                
                                        })
                                        ) : (null) }

                                   </select>
                              </div>
                         </div>

                         <div className="row mt-3">
                              <div>
                                   <button className="btn btn-primary" type="submit" >Agregar</button>
                              </div>
                         </div>

                    </form>

            </>
          ); 
     }
     
}