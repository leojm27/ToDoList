import React from 'react';

export class BusinessForm extends React.Component {

     constructor(props){
          super(props);
          this.state = {
                    citiesByCountry: [],
                    description: "",
                    id_country: 0,
                    id_city: 0
          }
     }

     formEmpty = () => {
     this.setState({
          id_business: 0,
          description: "",
          id_city: 0,
          id_country: 0,
          citiesByCountry:[],
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
          const id_country = parseInt(e.target.value);
          this.setState({
                    citiesByCountry: this.props.cities.filter(item => item.id_country == id_country)
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

          let businessNew = [];

          if ( description && id_business && id_city !== 0 && id_country != 0 ){

                    businessNew = [...this.props.business, businessItem];
                    this.props.addBusiness(businessNew);
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
                                             this.getCity(e)
                                        }} 
                                        className="form-select">
                                             <option value="0">Seleccionar</option>

                                             { this.props.countries != null
                                                            
                                             ? (

                                             this.props.countries.map((item, index) => { 
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
                                   value={ this.state.value } 
                                   onChange={ (e) => this.handleForm(e) } 
                                   className="form-select">
                                   <option value="0">Seleccionar</option>

                                   { this.state.citiesByCountry != null
                                                            
                                   ? (

                                        this.state.citiesByCountry.map((item, index) => { 
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