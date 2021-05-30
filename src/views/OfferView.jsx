import React from 'react';
import { OfferForm } from '../components/offerComponent/OfferForm';
import { OfferTable } from '../components/offerComponent/OfferTable';
import dataBaseService from '../services/dataBaseService';

export class OfferView extends React.Component {

     constructor(props) {
          super(props);
          this.props = props;
          this.state = {
               countries: [],
               cities: [],
               organizations: [],
               offers: [],
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

          await dataBaseService.getAllJobs()
               .then(response => this.setState({
                    offers: response.data
               }))
               .catch(err => console.log(err))
     }

     onDelete = async (key) => {
          await dataBaseService.deleteJob(key)
               .then(() => this.setState({
                    message: `La Oferta Laboral con ID ${key} se elimino correctamente.`,
                    success: false
               }))
               .catch(() => this.setState({
                    message: `No es posible eliminar la Oferta Laboral con ID ${key}.`,
                    success: true
               }))
          this.refresh();
          return this.state.message;
     }

     addOffers = async (offer) => {
          await dataBaseService.createJob(offer)
               .then(() => this.setState({
                    message: `La Oferta Laboral "${offer.position}" se creo correctamente.`,
                    success: true
               }))
               .catch(() => this.setState({
                    message: `No es posible crear la Oferta Laboral ${offer.position}.`,
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
                              <OfferForm
                                   offers={this.state.offers}
                                   cities={this.state.cities}
                                   countries={this.state.countries}
                                   organizations={this.state.organizations}
                                   addOffers={this.addOffers} />
                         </div>


                         <div className="col-8">
                              <OfferTable
                                   offers={this.state.offers}
                                   cities={this.state.cities}
                                   onDelete={this.onDelete} />
                         </div>


                    </div>
               </>
          )
     }

}