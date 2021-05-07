import React from 'react';

export class BusinessForm extends React.Component {

constructor(props){
    super(props);
    this.props = props;
    this.state = {
          countries: [],
          cities: [],
          business: [],
          description: "",
          id_country: 0,
    }
}
     
componentDidMount(){
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
         id_country: 0,
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
    const id_country = e.target.value;
    let array = this.state.cities;
    let citiesNew = array.filter(item => item.id_country == id_country);
    this.setState({
         citiesForCountry: citiesNew,
    });
}

submitForm = (e) => {
    e.preventDefault();
    const id_city = parseInt(this.state.id_city);
    const id_country = parseInt(this.state.id_country);
    const description = this.state.description;
    const id_business = Math.floor(Math.random() * 999999);
    const businessItem = {
         id_business , 
         description,
         id_country,
         id_city 
    };


    if ( description && id_business && id_city !== 0 && id_country != 0 ){
         this.props.onUpdate(businessItem)
         this.formEmpty();
         console.log(businessItem);
    }else{
         alert("Debe completar todos los campos!.")
    }
    
}

render(){
          return (
            <>
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
                                   name="id_country"
                                   value={this.state.id_country}
                                   onChange={(e) => {
                                        this.handleForm(e)
                                        this.getCity(e) // Utilizar Utils
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
            </>
          );
     
}
     
}