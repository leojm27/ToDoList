/* eslint-disable no-unused-expressions */
import React from 'react';
import { ToDoTable } from './ToDoTable';


export class ToDoList extends React.Component {

     constructor(props){
          super(props);
          this.props = props;
          this.state = {
               id_job: 0,
               job: "",
               business: 0,
               city: "",
               country: "",
               empty: "",
               offers:[],
               businessAll:[],
               countries: [],
               cities: [],
               citiesForCountry: [],
               id_city: 0,
               id_country: 0,
               selectCountry: 0,
               selectBusiness: 0

          }
     }

     componentDidMount(){
          if(localStorage.getItem("offers") != null){
			this.setState({
                    offers: JSON.parse(localStorage.getItem("offers"))
            })
		}

          if(localStorage.getItem("business") != null){
               this.setState({
                    businessAll: JSON.parse(localStorage.getItem("business"))
               })
          };
     
          if(localStorage.getItem("countries") != null){
               this.setState({
                    countries: JSON.parse(localStorage.getItem("countries"))
               })
          }
     
          if(localStorage.getItem("cities") != null){
               this.setState({
                    cities: JSON.parse(localStorage.getItem("cities"))
               })
          }
     }
     
     /*saveData = (offers) =>{ 
          window.localStorage.setItem("offers", JSON.stringify(offers));
     }*/

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

               businnes = this.state.businessAll.find(e => e.id_business == id_business);
               city = this.state.cities.find(e => e.id_city == businnes.id_city);
               country = this.state.countries.find(e => e.id_country == city.id_country);
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
          const { job, business, id_country } = this.state;
          //const businessInt = parseInt(business);
          //id_city = parseInt(id_city);
          //id_country = parseInt(id_country);
          let id_job = Math.floor(Math.random() * 999999);
          const offer = {id_job, job, business, id_city, id_country};
          let offersNew = [];
     
          if ( job && business != 0 && id_city != 0 && id_country != 0 ){

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
               <div className="row">
                  
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

                                        { this.state.businessAll != null
                                                       
                                        ? (

                                        this.state.businessAll.map((item, index) => { 
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

                    
                    <div className="col">
                         <ToDoTable 
                              offers = { this.state.offers } 
                              cities = { this.state.cities } 
                              business = { this.state.businessAll }
                              countries = { this.state.countries } 
                              onDelete = { this.deleteElement }/>
                    </div>
                    

               </div>

               </>
          )
     }



/*

<div className="row">
                              <div>
                                   <label className="col-form-label">Empresa</label>
                              </div>
                              <div>
                                   <input type="text" name="business" 
                                        value={ this.state.business } className="form-control" 
                                        onChange={(e) => this.handleForm(e)}/>
                              </div>
</div>


<div className=" row">
                              <div>
                                   <label className=" col-form-label">Pais</label>
                              </div>
                              <div>
                                   <input type="text" name="country" 
                                        value={ this.state.country } className="form-control" 
                                        onChange={(e) => this.handleForm(e)}/>
                              </div>
</div>


<div className="row">
                              <div>
                                   <label className="col-form-label">Ciudad</label>
                              </div>
                              <div>
                                   <input type="text" name="city" 
                                        value={ this.state.city } className="form-control" 
                                        onChange={(e) => this.handleForm(e)}/>
                              </div>
</div>




#####################################################


<div className="row">
                              <div>
                                   <label className=" col-form-label">Pais</label>
                              </div>
                              <div>
                                   <select 
                                   name="selectCountry"
                                   value={this.state.selectCountry}
                                   onChange={(e) => {
                                        this.handleForm(e)
                                        this.getCity(e)
                                   }} 
                                   className="form-select">
                                        <option value="0">Seleccionar</option>

                                        { this.state.countries != null
                                                       
                                        ? (

                                        this.state.countries.map((item, index) => { 
                                        return <option key={ index } value={ item.id_country }> 
                                                       { item.description } 
                                             </option>                
                                        })
                                        ) : (null) }

                                   </select>
                              </div>
</div>



#####################################################

<div className="row">
                              <div>
                                   <label className=" col-form-label">Ciudad</label>
                              </div>
                              <div>
                                   <select 
                                   name="id_city"
                                   value={this.state.value} 
                                   onChange={(e) => this.handleForm(e)} 
                                   className="form-select">
                                        <option value="0">Seleccionar</option>

                                        { this.state.citiesForCountry != null
                                                       
                                        ? (

                                        this.state.citiesForCountry.map((item, index) => { 
                                        return <option key={ index } value={ item.id_city }> 
                                                       { item.description } 
                                             </option>                
                                        })
                                        ) : (null) }

                                   </select>
                              </div>
</div>

*/

}