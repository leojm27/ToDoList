import React from 'react';
import DataBase from '../../utils/DataBase';
import { utils } from '../../utils/Utils';

export class OfferTable extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.state = {
         offers: [],
         cities: [],
         business: [],
         countries: []
    }
  }
     
componentDidMount(){
    /*if(localStorage.getItem("offers") != null){
			this.setState({
                    offers: JSON.parse(localStorage.getItem("offers"))
            })
		}

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
    }*/
    const ddd = utils

}

/*getOffer = (item) => { 
  let idBusiness = parseInt(item.business);
  let idCity = parseInt(item.id_city);
  let idCountry = parseInt(item.id_country);
  let businness = this.state.business.find(e => e.id_business == idBusiness);
  if(businness == null){
      businness = { description: "Sin asignar" };
  } 
  let city = this.state.cities.find(e => e.id_city == idCity);
  if(city == null){
      city = { description: "Sin asignar" };
  }
  let country = this.state.countries.find(e => e.id_country == idCountry);
  const itemNames = { 
                      businness: businness.description, 
                      city: city.description, 
                      country: country.description 
                    };
  return itemNames;

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
                  //let offer = this.getOffer(item)
                  let offer = utils.getFormOffer(item)
                  return <tr key={ index }>
                            <th scope="row">{ index + 1 }</th>
                            <td>{ item.job }</td>
                            <td>{ offer.businness }</td>
                            <td>{ offer.country }</td>
                            <td>{ offer.city }</td>
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