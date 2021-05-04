import React from 'react';
//import { AlertSuccess } from '../components/AlertSuccess';
import { ToDoTableItems } from '../components/ToDoTableItems';


export class FormBusiness extends React.Component {

constructor(props){
    super(props);
    this.props = props;
    this.state = {
          business:[],
          citiesForCountry:[],
          /*business:[
             {id_business: 654654, description: "TSoft", id_city: 111111},
             {id_business: 648774, description: "IncluIT", id_city: 222222}],*/
          countries:[
               {id_country: 654654, description: "Argentina"},
               {id_country: 648774, description: "Brasil"},
               {id_country: 445785, description: "España"}],

          cities:[
                    {id_city: 787878, description: "La Rioja", id_country: 654654},
                    {id_city: 797979, description: "Cordoba", id_country: 654654},
                    {id_city: 727272, description: "Neuquen", id_country: 654654},
                    {id_city: 767676, description: "Buenos Aires", id_country: 654654},
                    {id_city: 161616, description: "San Pablo", id_country: 648774},
                    {id_city: 151515, description: "Rio de Janeiro", id_country: 648774},
                    {id_city: 131313, description: "Belo Horizonte", id_country: 648774},
                    {id_city: 898989, description: "Barcelona", id_country: 445785},
                    {id_city: 848484, description: "Madrid", id_country: 445785},
                    {id_city: 878787, description: "Mayorca", id_country: 445785},
                    {id_city: 828282, description: "Coruña", id_country: 445785},
                    {id_city: 838383, description: "La Rioja", id_country: 445785},
                    {id_city: 818181, description: "Sevilla", id_country: 445785},],

          id_business: 0,
          description: "",
          id_city: 0,
          message: "message",
          selected: "",
          selectCity: 0,
          selectCountry: 0,
    }
}
     
componentDidMount(){
     if(localStorage.getItem("business") != null){
	     this.setState({
               business: JSON.parse(localStorage.getItem("business"))
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

formEmpty = () => {
     this.setState({
          id_business: 0,
          description: "",
          id_city: 0,
          selectCity: 0,
          selectCountry: 0,
          citiesForCountry:[],
     }); 
}

handleForm = (e) => {
     e.preventDefault();
     this.setState({
          [e.target.name]: e.target.value,
     });
}

getCity = (e) => {
     e.preventDefault();
     const selectCountry = e.target.value;
     let array = this.state.cities;
     let citiesNew = array.filter(item => item.id_country == selectCountry);
     this.setState({
          citiesForCountry: citiesNew,
     });
}

submitForm = (e) => {
     e.preventDefault();
     const { description, id_city } = this.state;
     const id_business = Math.floor(Math.random() * 999999);
     const businessItem = {
          id_business , 
          description, 
          id_city };
     let businessNew = [];


     if ( description && id_business && id_city !== 0 ){

          businessNew = [...this.state.business, businessItem];
          this.setState({
               business: businessNew,
          });
          window.localStorage.setItem("business", JSON.stringify(businessNew));
          this.formEmpty();
          console.log(businessNew);
     }else{
          alert("Debe completar todos los campos!.")
     }
     
}

deleteElement = (key) => {
     console.log("eliminar: " + key);
     const businessNew = this.state.business.filter((_, index) => index !== key);
     window.localStorage.setItem("business", JSON.stringify(businessNew))
     this.setState({
          business: businessNew
     })
}

render(){
          return (
            <>
               <div className="row mt-3">
                  
                    <form className="row col align-items-start align-self-start"  onSubmit={(e) => this.submitForm(e)}>
                       <h5>Empresa</h5>

                       <div className="row">
                            <div className="">
                                 <label className="col-form-label">Nombre</label>
                            </div>
                            
                            <div className="">
                                 <input type="text" name="description" value={ this.state.description } className="form-control" onChange={(e) => this.handleForm(e)}/>
                            </div>
                       </div>

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

                       <div className="row mt-3">
                            <div>
                                 <button className="btn btn-primary" type="submit" >Añadir</button>
                            </div>
                       </div>

                    </form>

                    <div className="col">
                         <ToDoTableItems business={ this.state.business } onDelete={ this.deleteElement} />
                    </div>

             </div>
            </>
          );
     
}
     
}