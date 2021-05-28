import React from 'react';
import { Redirect } from 'react-router-dom';

export class OfferTable extends React.Component {

  constructor(props) {
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
    });
  }

  render() {
    return (
      <>
        {
          (this.state.isRedirect == true)

            ? <Redirect to={`/jobs/${this.state.index}`} />

            : <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Posición</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Empresa</th>
                  <th scope="col">Ciudad</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {this.props.offers != null

                  ? (

                    this.props.offers.map((item, index) => {

                      let city = null;
                      if (item.organization != null) {
                        city = this.props.cities.filter(e => e.id == item.organization.placeId);
                      }
                      return <tr key={index}>
                        <th scope="row">{item.id}</th>
                        <td>{ item.position} </td>
                        <td>{ item.description} </td>
                        <td>{ (item.organization != null) ? item.organization.name : 'Sin asignar'} </td>
                        <td>{ (city != null) ? city[0].name : 'Sin asignar'} </td>
                        <td>
                          <button type="button" className="btn btn-info btn-sm m-1"
                            onClick={
                              () => this.infoBusiness(item.id)
                            }>Info</button>
                          <button type="button" className="btn btn-danger btn-sm m-1" onClick={() => this.props.onDelete(item.id)}>Eliminar</button>
                        </td>
                      </tr>

                    })
                  ) : (null)
                }

              </tbody>
            </table>
        }
      </>
    );

  }

}