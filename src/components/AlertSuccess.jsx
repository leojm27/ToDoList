import React from 'react';


export class AlertSuccess extends React.Component {
     
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            
        }
    }

     render(){
          return (
            <>
            <div className="alert alert-success alert-dismissible fade show mt-3" role="alert">
                <strong>message!</strong> { this.props.message }
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            </>
          );
     }
     

}
