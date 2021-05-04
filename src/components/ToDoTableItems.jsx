import React from 'react';

export class ToDoTableItems extends React.Component {

constructor(props){
    super(props);
    this.props = props;
    this.state = {
         offers:[]
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
}

render(){
          return (
            <>
              <table className="table mt-3">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Empresa</th>
                    <th scope="col">Ciudad</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>

                { this.props.business != null
                
                ? (
                  //console.log("business"),

                  this.props.business.map((item, index) => { 
                  return <tr key={ index }>
                            <th scope="row">{ index + 1 }</th>
                            <td>{ item.description }</td>
                            <td>{ item.id_city }</td>
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