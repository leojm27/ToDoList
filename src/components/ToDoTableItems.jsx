import React from 'react';

export class ToDoTableItems extends React.Component {

constructor(props){
    super(props);
    this.state = {
         offers:[],
         cities: [],
         countries: []
    }
}
     
componentDidMount(){
     /*if(localStorage.getItem("business") != null){
			this.setState({
                    business: JSON.parse(localStorage.getItem("business"))
            })
     }*/
     if(localStorage.getItem("cities") != null){
      this.setState({
              cities: JSON.parse(localStorage.getItem("cities"))
         })
    }

    if(localStorage.getItem("countries") != null){
      this.setState({
              countries: JSON.parse(localStorage.getItem("countries"))
         })
    }
}

getLocation = (id_city) => {
  let location, city, country;
  city = this.state.cities.find(e => e.id_city == id_city);
  country = this.state.countries.find(e => e.id_country == city.id_country);


  if(city == null){

      return location = { city: "Sin asignar", country: "-" };

  } else if(country == null){

    return location = { city: city.description, country: "Sin asignar" };

  } else { 

    return location = { city: city.description, country: country.description };

  }

}

render(){
          return (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Empresa</th>
                    <th scope="col">Ubicacion</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>

                { this.props.business != null 
                
                ? (

                  this.props.business.map((item, index) => { 
                  const location = this.getLocation(item.id_city)
                  //const city = this.state.cities.find(e => e.id_city == item.id_city)
                  //const country = this.state.countries.find(e => e.id_country == city.id_country)
                  return <tr key={ index }>
                            <th scope="row">{ index + 1 }</th>
                            <td>{ item.description }</td>
                            <td>{ location.city }  ({ location.country })</td>
                            <td>
                              <button type="button" className="btn btn-primary btn-sm m-1">Editar</button>
                              <button type="button" className="btn btn-danger btn-sm m-1" onClick={ () => this.props.onDelete(index) }>Eliminar</button>
                            </td>
                        </tr>
                      
                  })
                ) : (null) }

                </tbody>
              </table>
            </>
          );
     
}
     
}