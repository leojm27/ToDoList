import React from 'react';
import { BusinessForm } from '../components/businessComponent/BusinessForm';
import { BusinessTable } from '../components/businessComponent/BusinessTable';
import dataBaseService from '../services/dataBaseService';

export class BusinessView extends React.Component {

     constructor(props) {
          super(props);
          this.props = props;
          this.state = {
               organizations: [],
               countries: [],
               cities: [],
               message: "",
               success: false
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

          await dataBaseService.getAllOrganizations()
               .then(response => this.setState({
                    organizations: response.data
               }))
               .catch(err => console.log(err))

     }

     onDelete = async (key) => {
          await dataBaseService.deleteOrganization(key)
               .then(() => this.setState({
                    message: `La Empresa con ID ${key} se elimino correctamente.`,
                    success: false
               }))
               .catch(() => this.setState({
                    message: `No es posible eliminar la Empresa con ID ${key}.`,
                    success: true
               }))
          this.refresh();
          return this.state.message;
     }

     addOrganization = async (organization) => {

          await dataBaseService.createOrganization(organization)
               .then(() => this.setState({
                    message: `La Empresa ${organization.name} se creo correctamente.`,
                    success: true
               }))
               .catch(() => this.setState({
                    message: `No es posible crear la Empresa ${organization.name}.`,
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
                              <BusinessForm
                                   organizations={this.state.organizations}
                                   cities={this.state.cities}
                                   countries={this.state.countries}
                                   addOrganization={this.addOrganization} />
                         </div>


                         <div className="col-8">
                              <BusinessTable
                                   organizations={this.state.organizations}
                                   countries={this.state.countries}
                                   onDelete={this.onDelete} />
                         </div>

                    </div>
               </>
          );

     }

}