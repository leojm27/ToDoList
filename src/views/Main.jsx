import React from 'react';
import { ToDoList } from '../components/ToDoList';


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

              <ToDoList />

            </>
          );
     }
     

}