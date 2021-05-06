import React from 'react';
import { OfferView } from './OfferView';


export class Main extends React.Component {

     constructor(props){
          super(props)
          this.state = {
               elements: [],
               tasks: [],
          }
     }
     
     render(){ 
          return (
            <>

              <OfferView />

            </>
          );
     }
     

}