import React from 'react';
import { CountryForm } from '../components/countryComponent/CountryForm';
import { CountryTable } from '../components/countryComponent/CountryTable';
import dataBaseService from '../services/dataBaseService';


export class CountryView extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      message: "",
      success: false,
      countries: []
    }
  }

  componentDidMount = () => {
    this.refresh();
  }

  refresh = async () => {
    await dataBaseService.getAllCountries()
      .then(response => this.setState({
        countries: response.data
      }))
      .catch(err => console.log(err))
  }

  deleteCountry = async (key) => {
    await dataBaseService.deleteCountry(key)
      .then(() => this.setState({
        message: `El País con ID ${key} se elimino correctamente.`,
        success: false
      }))
      .catch(() => this.setState({
        message: `No es posible eliminar el País con ID ${key}.`,
        success: true

      }))
    this.refresh();
    return this.state.message;
  }

  addCountry = async (country) => {
    await dataBaseService.createCountry(country)
      .then(() => this.setState({
        message: `El País ${country.name} se creo correctamente.`,
        success: true
      }))
      .catch(() => this.setState({
        message: `No es posible crear el País ${country.name}.`,
        success: false

      }))
    this.refresh();
  }

  render() {
    return (
      <>
        <div className="row">

          {(this.state.message !== "")
            ? (this.state.success)
              ? (<div className="alert alert-success" role="alert">
                {this.state.message}
              </div>)
              : (<div className="alert alert-danger" role="alert">
                {this.state.message}
              </div>)
            : (null)
          }


        </div>
        <div className="row">

          <div className="col-4">
            <CountryForm
              countries={(this.state.countries) ? this.state.countries : (null)}
              addCountry={this.addCountry} />
          </div>

          <div className="col-8">
            <CountryTable
              countries={(this.state.countries) ? this.state.countries : (null)}
              onDelete={this.deleteCountry} />
          </div>

        </div>
      </>
    );
  }


}