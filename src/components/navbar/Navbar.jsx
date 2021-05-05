import React from 'react';
import { Link } from 'react-router-dom'

export class Navbar extends React.Component {

     render(){
          return (
            <>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
                    <div className="container-fluid">

                         <Link className="nav-link active" aria-current="page" to="/">
                              <span className="navbar-brand mb-0 h1">
                                   ToDoList
                              </span>
                         </Link>
                    

                         <div className="collapse navbar-collapse" id="navbarNav">

                              <ul className="navbar-nav">

                                   <li className="nav-item">
                                        <Link className="nav-link" to="/jobs">Ofertas Laborales</Link>
                                   </li>

                                   <li className="nav-item">
                                        <Link className="nav-link" to="/business">Empresas</Link>
                                   </li>

                                   <li className="nav-item">
                                        <Link className="nav-link" to="/country">Paises</Link>
                                   </li>

                                   <li className="nav-item">
                                        <Link className="nav-link" to="/city">Ciudades</Link>
                                   </li>
                                   
                              </ul>
                              
                         </div>
                         
                    </div>
               </nav>
            </>
          );
     }
     
}