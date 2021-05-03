import React from 'react';
import { Redirect } from 'react-router';


export class NotFoundView extends React.Component {
     

     render(){
          return (
            <>
              <Redirect to="/" />
            </>
          );
     }
     

}