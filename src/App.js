import React from 'react';
import { Navbar } from './components/navbar/Navbar'
import { Home } from './views/Home'
import { Main } from './views/Main'
import { NotFoundView } from './views/NotFoundView'
import { Route, Switch } from 'react-router-dom'
import { ToDoTable } from './components/ToDoTable';
import { FormBusiness } from './views/FormBusiness';
import { CountryView } from './views/CountryView';
import { CityView } from './views/CityView';


function App(){
  

    return (
      <>
        <Navbar />

        <div className="container">

          <Switch>

            <Route path="/" exact sensitive component={ Home } />
            <Route path="/jobs" exact sensitive component={ Main } />
            <Route path="/jobs/:id" exact sensitive component={ ToDoTable } /> 
            <Route path="/business" exact sensitive component={ FormBusiness } /> 
            <Route path="/country" exact sensitive component={ CountryView } /> 
            <Route path="/city" exact sensitive component={ CityView } /> 

            <Route component={ NotFoundView } />

          </Switch>

        </div>

        

      </>
    );
  
}

export default App;
