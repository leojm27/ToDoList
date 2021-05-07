import React from 'react';
import { utils } from '../../utils/Utils';

export class BusinessTable extends React.Component {

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

render(){
          return (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Empresa</th>
                    <th scope="col">Pais</th>
                    <th scope="col">Ciudad</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>

                { this.props.business != null 
                
                ? (

                  this.props.business.map((item, index) => {
                  const element = utils.getFormBusiness(item);
                  return <tr key={ index }>
                            <th scope="row">{ index + 1 }</th>
                            <td>{ item.description }</td>
                            <td>{ element.country }</td>
                            <td>{ element.city }</td>
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