import React from 'react';
import { ToDoTableItems } from '../components/ToDoTableItems';


export class FormBusiness extends React.Component {

constructor(props){
    super(props);
    this.props = props;
    this.state = {
          business:[],
          /*business:[
             {id_business: 654654, description: "TSoft", id_city: 111111},
             {id_business: 648774, description: "IncluIT", id_city: 222222}],*/
          
          id_business: "",
          description: "",
          id_city: ""
    }
}
     
componentDidMount(){
     if(localStorage.getItem("business") != null){
	     this.setState({
               business: JSON.parse(localStorage.getItem("business"))
          })
     }
}

handleForm = (e) => {
     e.preventDefault();
     this.setState({
          [e.target.name]: e.target.value,
     });
}

submitForm = (e) => {
     e.preventDefault();
     const { description } = this.state;
     let id_business = Math.floor(Math.random() * 999999);
     const businessItem = {id_business , description, id_city: 123456};
     let businessNew = [];

     console.log("desc" + description);
     console.log("id"+id_business);

     if ( description && id_business ){

          businessNew = [...this.state.business, businessItem];
          this.setState({
               business: businessNew,
          });
          window.localStorage.setItem("business", JSON.stringify(businessNew));
          //this.formEmpty();
          console.log(businessNew);
     }else{
          alert("Debe completar todos los campos!.")
     }


     //window.localStorage.setItem("business", JSON.stringify(offersNew));
     
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
                       <h5>Complete Datos de Pais</h5>

                       <div className=" row">
                            <div className="">
                                 <label className="col-form-label">Nombre</label>
                            </div>
                            
                            <div className="">
                                 <input type="text" name="description" value={ this.state.description } className="form-control" onChange={(e) => this.handleForm(e)}/>
                            </div>
                       </div>

                       <div className=" row">
                            <div>
                                 <label className=" col-form-label">Pais</label>
                            </div>
                            <div>
                                 <input type="text" className="form-control" onChange={(e) => this.handleForm(e)} />
                            </div>
                       </div>

                       <div className=" row">
                            <div>
                                 <label className=" col-form-label">Ciudad</label>
                            </div>
                            <div>
                                 <input type="text" name="id_city" value={ this.state.id_city } className="form-control" onChange={(e) => this.handleForm(e)} />
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