import React from 'react';

export class ToDoTable extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.state = {
         offers:[]
    }
  }
     
componentDidMount(){
    if(localStorage.getItem("offers") != null){
			this.setState({
                    offers: JSON.parse(localStorage.getItem("offers"))
            })
		}

    //console.log("que ondaa Offers");
    //console.log(this.state.offers);
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
              <table className="table mt-3">
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


                  { this.props.offers.map((offer, index) => { 

                  return <tr key={ index }>
                            <th scope="row">{ index + 1 }</th>
                            <td>{ offer.job }</td>
                            <td>{ offer.business }</td>
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