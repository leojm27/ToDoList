import React from 'react';
import { OfferForm } from '../components/offerComponent/OfferForm';
import { OfferTable } from '../components/offerComponent/OfferTable';

export class OfferView extends React.Component {

     constructor(props){
          super(props);
          this.props = props;
          this.state = {

          }
     }

     render(){
          return (
               <>
               <div className="row">
                  
                    <div className="col">
                         <OfferForm 
                              offers = { this.props.offers }
                              cities = { this.props.cities }
                              countries = { this.props.countries }
                              businessAll = { this.props.business }
                              addOffers = { this.props.addOffers }/>
                    </div>

                    
                    <div className="col">
                         <OfferTable 
                              offers = { this.props.offers }
                              onDelete = { this.props.onDelete }/>
                    </div>
                    

               </div>

               </>
          )
     }

}