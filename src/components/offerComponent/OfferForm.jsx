import React from 'react';
import { utils } from '../../utils/Utils';


export class OfferForm extends React.Component {

     constructor(props){
          super(props);
          this.state = {
               id_job: 0,
               business: 0,
               organization: 0,
               id_city: 0,
               id_country: 0,
               description: "",
               position: "",
               job: "",
               city: "",
               country: ""
          }
     }

     formEmpty = () => {
          this.setState({
               id_job: 0,
               organization: 0,
               id_city: 0,
               id_country: 0,
               position: "",
               job: "",
               city: "",
               country: "",
               description: ""
          }); 
     }

     handleForm = (e) => {
          e.preventDefault();
          this.setState({
               [e.target.name]: e.target.value,
          });
     }

     getLocation = (e) => {
          console.log("location");
          /*const id_business = parseInt(e.target.value);
          const business =  utils.getBusinessLocation(id_business);

          this.setState({
               city: business.cityDesc,
               country: business.countryDesc ,
               id_city: business.id_city ,
               id_country: business.id_country ,
          });*/
     }

     submitForm = (e) => {
          e.preventDefault();
          const id_city = parseInt(this.state.id_city);
          const id_country = parseInt(this.state.id_country);
          const organizationId = parseInt(this.state.organization);
          const position = this.state.position;
          const description = this.state.description;
          //const city = this.state.city;
          //const country = this.state.country;
          //const job = this.state.job;
          //const id_job = Math.floor(Math.random() * 999999);

          const offer = {
               position, 
               description, 
               organizationId
          };

          //let offersNew = [];

          if ( description && position && organizationId != 0 ){

          //offersNew = [...this.props.offers, offer];
          this.props.addOffers(offer);
          this.formEmpty();
          console.log(offer); 

          } /*else if(country == 'Sin asignar' || city == 'Sin asignar') { 

               alert("Los datos de la Empresa son incompletos. No es posible generar una Oferta Laboral."); 

          } */else {

               alert("Complete los datos correctamente!") 
               
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
                                        this.getLocation(e)
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

                         <div className=" row">
                              <div>
                                   <label className=" col-form-label">Pais</label>
                              </div>
                              <div>
                                   <input type="text" disabled name="country" 
                                        value={ this.state.country } className="form-control" 
                                        onChange={(e) => this.handleForm(e)}/>
                              </div>
                         </div>


                         <div className="row">
                              <div>
                                   <label className="col-form-label">Ciudad</label>
                              </div>
                              <div>
                                   <input type="text" disabled name="city" 
                                        value={ this.state.city } className="form-control" 
                                        onChange={(e) => this.handleForm(e)}/>
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