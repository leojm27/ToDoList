import React from 'react';
import { Redirect } from 'react-router-dom';

export class CityTable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isRedirect: false,
            index: ""
        }
    }

    infoCity = (id) => {
      this.setState({
        isRedirect: true,
        index: id
      })
    }

    render(){
          return (
            <>
              {
                (this.state.isRedirect === true)
                
                ? <Redirect to={`/city/${this.state.index}`} />
                
                : <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Ciudad</th>
                          <th scope="col">Pais</th>
                          <th scope="col">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>

                      { (this.props.cities != null )
                      
                      ? (

                      this.props.cities.map((item, index) => {
                      
                      return <tr key={ index }>
                                  <th scope="row">{ item.id }</th>
                                  <td>{ item.name }</td>
                                  <td>{ (item.countrie.name) ? item.countrie.name : 'Sin asignar' }</td>
                                  <td>
                                    <button type="button" className="btn btn-info btn-sm m-1" onClick={
                                                    () => this.infoCity(item.id)
                                                }>Info</button>
                                    <button type="button" className="btn btn-danger btn-sm m-1" onClick={ () => this.props.onDelete(item.id) }>Eliminar</button>
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