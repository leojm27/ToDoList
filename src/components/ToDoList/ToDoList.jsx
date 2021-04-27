import React from 'react';


export class ToDoList extends React.Component {

     // eslint-disable-next-line no-useless-constructor
     constructor(props){

          super(props)
          console.log(this.props.tasks);
          
     }

     render(){
          return (
               <>
               <ul>
                    <li>Aprender React</li>
                    <li>Aprender WebPack</li>
                    <li>Aprender Babel</li>

               </ul>
               </>
          )
     }

}