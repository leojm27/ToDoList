import React from 'react';
import { BusinessForm } from '../components/businessComponent/BusinessForm';
import { BusinessTable } from '../components/businessComponent/BusinessTable';

export class BusinessView extends React.Component {

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
                         <BusinessForm 
                              business={ this.props.business } 
                              cities = { this.props.cities }
                              countries = { this.props.countries }
                              addBusiness = { this.props.addBusiness }/>
                    </div>
                    

                    <div className="col">
                         <BusinessTable 
                              business={ this.props.business } 
                              onDelete={ this.props.onDelete }  />
                    </div>

             </div>
            </>
          );
     
     }

}