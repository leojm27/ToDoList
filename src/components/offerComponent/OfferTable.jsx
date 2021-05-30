import React from 'react';
import { Redirect } from 'react-router-dom';

export class OfferTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false,
      edit: false,
      index: ""
    }
  }

  infoBusiness = (id) => {
    this.setState({
      isRedirect: true,
      edit: false,
      index: id
    });
  }

  editOffer = (item) => {
    this.setState({
      isRedirect: true,
      edit: true,
      index: item.id,
    })
  }

  render() {
    return (
      <>
        {
          (this.state.isRedirect === true)

            ? (!this.state.edit)
              ? (<Redirect to={`/jobs/${this.state.index}`} />)
              : (<Redirect to={`/jobs/edit/${this.state.index}`} />)

            : <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Posición</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Empresa</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {this.props.offers != null

                  ? (

                    this.props.offers.map((item, index) => {

                      return <tr key={index}>
                        <th scope="row">{item.id}</th>
                        <td>{item.position} </td>
                        <td>{item.description} </td>
                        <td>{(item.organization != null) ? item.organization.name : 'Sin asignar'} </td>
                        <td>
                          <button type="button" className="btn btn-info btn-sm m-1"
                            onClick={
                              () => this.infoBusiness(item.id)
                            }>Info</button>

                          <button type="button" className="btn btn-primary btn-sm m-1"
                            onClick={
                              () => this.editOffer(item)
                            }>Editar</button>
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