import React from 'react';
import { Redirect } from 'react-router-dom';

export class BusinessTable extends React.Component {

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
    })
  }

  render() {
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

                {this.props.organizations != null

                  ? (

                    this.props.organizations.map((item, index) => {
                      const country = this.props.countries.filter(e => e.id == item.place.countrieId);
                      return <tr key={index}>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{country[0].name}</td>
                        <td>{item.place.name}</td>
                        <td>
                          <button type="button" className="btn btn-info btn-sm m-1"
                            onClick={() => this.infoBusiness(item.id)}>Info</button>
                          <button type="button" className="btn btn-danger btn-sm m-1" onClick={() => this.props.onDelete(item.id)}>Eliminar</button>
                        </td>
                      </tr>

                    })
                  ) : (null)}

              </tbody>
            </table>
        }
      </>
    );

  }

}