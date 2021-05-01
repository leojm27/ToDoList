import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { ToDoList } from './components/ToDoList/ToDoList';


function App(){
  

    return (
      <>

        <Navbar />

        <div className="container">
          <ToDoList />
        </div>


      </>
    );
  
}

export default App;
