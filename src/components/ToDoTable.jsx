import React from 'react';
import DataBase from '../services/DataBase';

export class ToDoTable extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.state = {
         offers: [],
         cities: []
    }
  }
     
componentDidMount(){
    //const cities = DataBase.retrieveAllCities();
    //console.log(cities);
    if(localStorage.getItem("offers") != null){
			this.setState({
                    offers: JSON.parse(localStorage.getItem("offers"))
            })
		}
}

getOffer = (item) => {
  //console.log(item);
  console.log("prueba");
  let id = parseInt(item.id_business);
  console.log(this.props.business);
  let businnes = this.props.business.find(e => e.id_business == id);
  console.log(businnes);
  //let city = this.props.cities.find(e => e.id_city == businnes.id_city);
  //let country = this.props.countries.find(e => e.id_country == city.id_country);
  //item.id_business = businnes.description;
  //item.id_city = city.description;
  //item.id_country = country.description; 
  return item;
  //console.log(this.props.cities);
  //businnes = this.state.businessAll.find(e => e.id_business == id_business);
  //city = this.state.cities.find(e => e.id_city == businnes.id_city);
  //country = this.state.countries.find(e => e.id_country == city.id_country);

}


/*deleteElement = (key) => {
    console.log("eliminar: " + key);
    const offersNew = this.state.offers.filter((_, index) => index !== key);
    window.localStorage.setItem("offers", JSON.stringify(offersNew))
    this.setState({
         offers: offersNew
    })
}*/

  render(){
          return (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Empresa</th>
                    <th scope="col">Pais</th>
                    <th scope="col">Ciudad</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>


                  { this.props.offers.map((item, index) => { 
                  let offer = this.getOffer(item)
                  return <tr key={ index }>
                            <th scope="row">{ index + 1 }</th>
                            <td>{ item.job }</td>
                            <td>{ item.business }</td>
                            <td>{ item.id_country }</td>
                            <td>{ item.id_city }</td>
                            <td>
                              <button type="button" className="btn btn-primary btn-sm m-1">Editar</button>
                              <button type="button" className="btn btn-danger btn-sm m-1" onClick={ () => this.props.onDelete(index) }>Eliminar</button>
                            </td>
                        </tr>

                        
                      
                  }) }

                </tbody>
              </table>
            </>
          );
     
  }
     
}