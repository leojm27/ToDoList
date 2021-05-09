import React from 'react';
import { Redirect } from 'react-router-dom';

export class CountryTable extends React.Component {

constructor(props){
    super(props);
    this.state = {
         offers:[],
         cities: [],
         countries: [],
         isRedirect: false,
         index: ""
    }
}
     
componentDidMount(){
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

updateCountryClicked = (id) => {
  //history.push('country/444444')
  this.setState({
    isRedirect: true,
    index: id
  })
}

render(){
          return (
            <>
                {
                (this.state.isRedirect == true)
                
                ? <Redirect to={`/country/${this.state.index}`} />
                
                : <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Pais</th>
                          <th scope="col">Cantidad Ciudades</th>
                          <th scope="col">Acciones</th>
                        </tr>
                      </thead>
                      <tbody> 

                      { this.props.countries != null 
                      
                      ? (this.props.countries.map((item, index) => {
                        return <tr key={ index }>
                                  <th scope="row">{ index + 1 }</th>
                                  <td>{ item.description }</td>
                                  <td> 50 </td> 
                                  <td>
                                    <button type="button" className="btn btn-info btn-sm m-1" 
                                          onClick={
                                              () => this.updateCountryClicked(item.id_country)
                                          }>Info</button>
                                    <button type="button" className="btn btn-danger btn-sm m-1" onClick={ () => this.props.onDelete(index) }>Eliminar</button>
                                  </td>
                              </tr>
                            
                        })
                      ) : (null) }

                      </tbody>
                  </table>
                }
            </>
          );
     
}
     
}