import React from 'react';
import { BusinessForm } from '../components/businessComponent/BusinessForm';
import { BusinessTable } from '../components/businessComponent/BusinessTable';

export class BusinessView extends React.Component {

     constructor(props){
     super(props);
     this.props = props;
     this.state = {
               business:[],
               citiesForCountry:[],
               cities: [],
               countries: [],
               id_business: 0,
               description: "",
               id_city: 0,
               id_country: 0,
               message: "message",
               selected: "",
               selectCity: 0
     }
     }
          
     componentDidMount(){
          if(localStorage.getItem("business") != null){
               this.setState({
                    business: JSON.parse(localStorage.getItem("business"))
               })
          };

          /*if(localStorage.getItem("countries") != null){
               this.setState({
                    countries: JSON.parse(localStorage.getItem("countries"))
               })
          }*/

          /*if(localStorage.getItem("cities") != null){
               this.setState({
                    cities: JSON.parse(localStorage.getItem("cities"))
               })
          }*/
     }

     updateBusiness = (businessItem) => {
          let businessNew = [...this.state.business, businessItem];
          this.setState({
               business: businessNew,
          });
          window.localStorage.setItem("business", JSON.stringify(businessNew));
     }

     deleteElement = (key) => {
          const businessNew = this.state.business.filter((_, index) => index !== key);
          window.localStorage.setItem("business", JSON.stringify(businessNew))
          this.setState({
               business: businessNew
          })
     }

     render(){
          return (
            <>
               <div className="row">
                  
                    <div className="col">
                         <BusinessForm 
                              business={ (this.state.business) ? this.state.business : (null) } 
                              onUpdate={ this.updateBusiness }  />
                    </div>
                    

                    <div className="col">
                         <BusinessTable 
                              business={ (this.state.business) ? this.state.business : (null) } 
                              onDelete={ this.deleteElement }  />
                    </div>

             </div>
            </>
          );
     
     }

}