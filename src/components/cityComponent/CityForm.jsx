import React from 'react';


export class CityForm extends React.Component {

constructor(props){
    super(props);
    this.props = props;
    this.state = {
          countries: [],
          description: "",
          id_city: 0,
          id_country: 0,
    }
}
     
componentDidMount(){
     /*if(localStorage.getItem("business") != null){
	     this.setState({
               business: JSON.parse(localStorage.getItem("business"))
          })
     };*/

     if(localStorage.getItem("countries") != null){
	     this.setState({
               countries: JSON.parse(localStorage.getItem("countries"))
          })
     }

     /*if(localStorage.getItem("cities") != null){
	     this.setState({
               cities: JSON.parse(localStorage.getItem("cities"))
          })
     }*/
}

formEmpty = () => {
     this.setState({
          id_city: 0,
          description: "",
          id_country: 0,
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
    const id_country = parseInt(this.state.id_country);
    const description = this.state.description;
    const id_city = Math.floor(Math.random() * 999999);
    const cityItem = {
            id_city, 
            description, 
            id_country 
    };
    
    let citiesNew = [];

    if ( description && id_country != 0 && id_city !== 0 ){

        citiesNew = [...this.props.cities, cityItem];
        this.props.onUpdate(citiesNew);
        this.formEmpty();
        console.log(citiesNew);
    }else{
        alert("Debe completar todos los campos!.")
    }
     
}

render(){
          return (
            <>
                    <form className="row col align-items-start align-self-start"  onSubmit={(e) => this.submitForm(e)}>
                       <h5>Ciudad</h5>

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