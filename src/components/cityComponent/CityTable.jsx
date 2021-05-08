import React from 'react';
import { utils } from '../../utils/Utils';

export class CityTable extends React.Component {

constructor(props){
    super(props);
    this.state = {
         offers:[],
         cities: [],
         countries: []
    }
}
     
componentDidMount(){
    console.log("DidMount cityTable");
    //this.props.onUpdate();
    // refresh cities
    //this.refreshCities(); 
}

render(){
          return (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Ciudad</th>
                    <th scope="col">Pais</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>

                { this.props.cities != null 
                
                ? (

                this.props.cities.map((item, index) => {
                let country = utils.getFormCity(item);
                return <tr key={ index }>
                            <th scope="row">{ index + 1 }</th>
                            <td>{ item.description }</td>
                            <td>{ country }</td>
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