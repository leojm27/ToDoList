import React from 'react';
import { Redirect } from 'react-router-dom';
import { utils } from '../../utils/Utils';

export class CountryTable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isRedirect: false,
            index: ""
        }
    }

    infoCountry = (id) => {
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
                        const q = utils.getQuantityCities(item.id_country);
                        return <tr key={ index }>
                                  <th scope="row">{ index + 1 }</th>
                                  <td>{ item.description }</td>
                                  <td>{ q }</td> 
                                  <td>
                                    <button type="button" className="btn btn-info btn-sm m-1" 
                                          onClick={
                                              () => this.infoCountry(item.id_country)
                                          }>Info</button>
                                    <button type="button" className="btn btn-danger btn-sm m-1" 
                                          onClick={ 
                                            () => this.props.onDelete(index) 
                                          }>Eliminar</button>
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