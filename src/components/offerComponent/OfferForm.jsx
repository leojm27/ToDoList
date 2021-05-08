import React from 'react';
import { utils } from '../../utils/Utils';


export class OfferForm extends React.Component {

constructor(props){
    super(props);
    this.props = props;
    this.state = {
        description: "",
        id_job: 0,
        job: "",
        business: 0,
        city: "",
        country: "",
        id_city: 0,
        id_country: 0
    }
}

formEmpty = () => {
    this.setState({
         id_job: 0,
         job: "",
         business: 0,
         city: "",
         country: "",
         id_city: 0,
         id_country: 0,
    }); 
}

handleForm = (e) => {
     e.preventDefault();
     this.setState({
          [e.target.name]: e.target.value,
     });
}

getLocation = (e) => {
     const id_business = parseInt(e.target.value);
     const business =  utils.getBusinessLocation(id_business);

     this.setState({
          city: business.cityDesc,
          country: business.countryDesc ,
          id_city: business.id_city ,
          id_country: business.id_country ,
     });

}

submitForm = (e) => {
     e.preventDefault();
     const id_city = parseInt(this.state.id_city);
     const id_country = parseInt(this.state.id_country);
     const business = parseInt(this.state.business);
     const city = this.state.city;
     const country = this.state.country;
     const job = this.state.job;
     const id_job = Math.floor(Math.random() * 999999);

     const offer = {id_job, job, business, id_city, id_country};
     let offersNew = [];

     if ( job && business != 0 && id_city != 0 && id_country != 0 ){
         offersNew = [...this.props.offers, offer];
         this.props.onUpdate(offersNew);
         this.formEmpty();
         console.log(offer);
         //window.localStorage.setItem("offers", JSON.stringify(offersNew));
     } else if(country == 'Sin asignar' || city == 'Sin asignar') { 
          alert("Los datos de la Empresa estan incompletos. No es posible generar una Oferta Laboral."); 
     } else {
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
                                   <label className="col-form-label">Puesto de Trabajo</label>
                              </div>
                              
                              <div className="">
                                   <input type="text" name="job" 
                                        value={ this.state.job } className="form-control" 
                                        onChange={(e) => this.handleForm(e)}/>
                              </div>
                         </div>

                         <div className="row">
                              <div>
                                   <label className=" col-form-label">Empresa</label>
                              </div>
                              <div>
                                   <select 
                                   name="business"
                                   value={this.state.business}
                                   onChange={(e) => {
                                        this.handleForm(e)
                                        this.getLocation(e) // utils
                                   }} 
                                   className="form-select">
                                        <option value="0">Seleccionar</option>

                                        { this.props.businessAll != null
                                                       
                                        ? (

                                        this.props.businessAll.map((item, index) => { 
                                        return <option key={ index } value={ item.id_business }> 
                                                       { item.description } 
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