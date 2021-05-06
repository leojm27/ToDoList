import React from 'react';


export class OfferForm extends React.Component {

constructor(props){
    super(props);
    this.props = props;
    this.state = {
        cities: [],
        description: "",
        id_job: 0,
        job: "",
        business: 0,
        city: "",
        country: "",
        empty: "",
        offers:[],
        businessAll:[],
        countries: [],
        citiesForCountry: [],
        id_city: 0,
        id_country: 0,
        selectCountry: 0,
        selectBusiness: 0
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
    const id_business = e.target.value;
    let businnes, city, country;
    
    if(parseInt(id_business) !== 0) {

         businnes = this.props.businessAll.find(e => e.id_business == id_business);
         city = this.props.cities.find(e => e.id_city == businnes.id_city);
         country = this.props.countries.find(e => e.id_country == city.id_country);
         const id_city = parseInt(city.id_city);
         const id_country = parseInt(country.id_country);

         this.setState({
              city: city.description,
              country: country.description,
              id_city: id_city,
              id_country: id_country,
         });
         
    } else {
         this.setState({
              city: "",
              country: "",
              id_city: 0,
              id_country: 0,
         });
    }
}

submitForm = (e) => {
    e.preventDefault();
    const id_city = parseInt(this.state.id_city);
    const id_country = parseInt(this.state.id_country);
    const business = parseInt(this.state.business);
    const job = this.state.job;
    const id_job = Math.floor(Math.random() * 999999);

    const offer = {id_job, job, business, id_city, id_country};
    let offersNew = [];

    if ( job && business != 0 && id_city != 0 && id_country != 0 ){
         offersNew = [...this.props.offers, offer];
         this.props.onUpdate(offersNew);
         this.formEmpty();
         console.log(offersNew);
    }else{
         alert("Debe completar todos los campos!.")
    }

    window.localStorage.setItem("offers", JSON.stringify(offersNew));
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
                                        this.getLocation(e)
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