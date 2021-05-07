/* eslint-disable no-unused-expressions */
import React from 'react';
import { OfferForm } from '../components/offerComponent/OfferForm';
import { ToDoTable } from '../components/ToDoTable';
import { utils } from '../utils/Utils';



export class OfferView extends React.Component {

     constructor(props){
          super(props);
          this.props = props;
          this.state = {
               id_job: 0,
               job: "",
               business: 0,
               city: "",
               country: "",
               id_city: 0,
               id_country: 0,
               //empty: "",
               offers:[],
               businessAll:[],
               countries: [],
               cities: null,
               citiesForCountry: [],
               
               //selectCountry: 0,
               //selectBusiness: 0

          }
     }

     componentDidMount(){
          
          if(localStorage.getItem("offers") != null){
			this.setState({
                    offers: JSON.parse(localStorage.getItem("offers"))
            })
		}

          if(localStorage.getItem("business") != null){
               this.setState({
                    businessAll: JSON.parse(localStorage.getItem("business"))
               })
          };
     
          if(localStorage.getItem("countries") != null){
               this.setState({
                    countries: JSON.parse(localStorage.getItem("countries"))
               })
          }
     
          if(localStorage.getItem("cities") != null){
               this.setState({
                    cities: JSON.parse(localStorage.getItem("cities"))
               })
          }
     }
     

     formEmpty = () => {
          this.setState({
               id_job: 0,
               job: "",
               business: 0,
               city: "",
               country: "",
               id_city: 0,
               id_country: 0,
          }); 
     }

     handleForm = (e) => {
          e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
		});
     }

     getLocation = (e) => {
          const id_business = e.target.value;
          let businnes, city, country;
          
          if(parseInt(id_business) !== 0) {

               businnes = this.state.businessAll.find(e => e.id_business == id_business);
               city = this.state.cities.find(e => e.id_city == businnes.id_city);
               country = this.state.countries.find(e => e.id_country == city.id_country);
               const id_city = parseInt(city.id_city);
               const id_country = parseInt(country.id_country);

               this.setState({
                    city: city.description,
                    country: country.description,
                    id_city: id_city,
                    id_country: id_country,
               });
               
          } else {
               this.setState({
                    city: "",
                    country: "",
                    id_city: 0,
                    id_country: 0,
               });
          }
     }

     updateOffers = (offersNew) => {
          this.setState({
               offers: offersNew,
          });
          window.localStorage.setItem("offers", JSON.stringify(offersNew));
        }

     deleteElement = (key) => {
          const offersNew = this.state.offers.filter((_, index) => index !== key);
          window.localStorage.setItem("offers", JSON.stringify(offersNew))
          this.setState({
               offers: offersNew
          })
     }

     render(){
          return (
               <>
               <div className="row">
                  
                    <div className="col">
                         <OfferForm 
                              offers = { (this.state.offers) ? this.state.offers : []  }
                              cities = { (this.state.cities) ? this.state.cities : []  }
                              countries = { (this.state.countries) ? this.state.countries : []  }
                              businessAll = { (this.state.businessAll) ? this.state.businessAll : []  }
                              onUpdate = { this.updateOffers }
                              onLocation = { this.getLocation }/>
                    </div>

                    
                    <div className="col">
                         <ToDoTable 
                              offers = { (this.state.offers) ? this.state.offers : []  } 
                              onDelete = { this.deleteElement }/>
                    </div>
                    

               </div>

               </>
          )
     }

}