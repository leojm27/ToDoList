import React from 'react';

export class CountryUpdate extends React.Component {

constructor(props){
    super(props);
    this.state = {
         offers:[],
         cities: [],
         countries: []
    }
}
     
componentDidMount(){
     /*if(localStorage.getItem("business") != null){
			this.setState({
                    business: JSON.parse(localStorage.getItem("business"))
            })
     }*/
     if(localStorage.getItem("cities") != null){
      this.setState({
              cities: JSON.parse(localStorage.getItem("cities"))
         })
    }

    if(localStorage.getItem("countries") != null){
      this.setState({
              countries: JSON.parse(localStorage.getItem("countries"))
         })
    }
}

render(){
          return (
            <div>
                 <h5>soy update</h5>
                 <h5>soy update</h5>
            </div>
          );
     
}
     
}