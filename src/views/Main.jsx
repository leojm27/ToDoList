import React from 'react';
import { ToDoList } from '../components/ToDoList';
import DataBase from '../utils/DataBase';


export class Main extends React.Component {

     constructor(props){
          super(props)
          this.state = {
               elements: [],
               tasks: [],
          }
     }

     componentDidMount(){
          
     }
     
     render(){
          return (
            <>

              <ToDoList />

            </>
          );
     }
     

}