import React from 'react';
import { ToDoList } from './components/ToDoList/ToDoList';


//import './App.css';

class App extends React.Component {
  

  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    // eslint-disable-next-line no-unused-expressions
    super(props);
    this.state = {
      tasks: ['Aprende React', 'Aprender WebPack', 'Aprender Babel' ]
    }
  }

  render(){
    return (
      <div >
  
        <ToDoList  tasks={ this.state.tasks }/>
  
      </div>
    );
  }

}

export default App;
