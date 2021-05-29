import React from 'react';
import { CityForm } from '../components/cityComponent/CityForm';
import { CityTable } from '../components/cityComponent/CityTable';
import dataBaseService from '../services/dataBaseService';

export class CityView extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      countries: null,
      cities: null,
      success: false,
      message: ""
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

    await dataBaseService.getAllCities()
      .then(response => this.setState({
        cities: response.data
      }))
      .catch(err => console.log(err))
  }

  addCity = async (city) => {
    await dataBaseService.createCity(city)
      .then(() => this.setState({
        message: `La Ciudad ${city.name} se creo correctamente.`,
        success: true
      }))
      .catch(() => this.setState({
        message: `No es posible crear la Ciudad ${city.name}.`,
        success: false

      }))
    this.refresh();
  }

  onDelete = async (key) => {
    await dataBaseService.deleteCity(key)
      .then(() => this.setState({
        message: `La Ciudad con ID ${key} se elimino correctamente.`,
        success: true
      }))
      .catch(() => this.setState({
        message: `No es posible eliminar la Ciudad con ID ${key}.`,
        success: false

      }))
    this.refresh();
    return this.state.message;
  }

  render() {
    return (
      <>
        <div className="row">

          {(this.state.message === "")
            ? (null)
            : (this.state.success)
              ? (<div className="alert alert-info" role="alert">
                {this.state.message}
              </div>)
              : (<div className="alert alert-danger" role="alert">
                {this.state.message}
              </div>)}


        </div>

        <div className="row">

          <div className="col">

            <CityForm
              cities={this.state.cities}
              countries={this.state.countries}
              addCity={this.addCity} />
          </div>

          <div className="col">
            <CityTable
              cities={this.state.cities}
              onDelete={this.onDelete} />
          </div>

        </div>
      </>
    );
  }


}