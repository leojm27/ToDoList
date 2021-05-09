import React from 'react';
import { utils } from '../../utils/Utils';
import { Redirect } from 'react-router-dom';

export class BusinessTable extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          isRedirect: false,
          index: ""
      }
  }

  infoBusiness = (id) => {
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
                  
                  ? <Redirect to={`/business/${this.state.index}`} />
                  
                  : <table className="table">
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
                                      <button type="button" className="btn btn-info btn-sm m-1" 
                                            onClick={ () => this.infoBusiness(item.id_business) }>Info</button>
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