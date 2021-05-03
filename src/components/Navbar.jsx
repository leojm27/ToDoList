import React from 'react';
import { Link } from 'react-router-dom'


export class Navbar extends React.Component {
     

     render(){
          return (
            <>
               

               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">

                         <Link className="nav-link active" aria-current="page" to="/">
                              <span className="navbar-brand mb-0 h1">
                                   ToDoList
                              </span>
                         </Link>
                    

                         <div className="collapse navbar-collapse" id="navbarNav">

                              <ul className="navbar-nav">
                                   
                                   <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Ofertas Laborales
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                             <li><Link className="dropdown-item" to="/add">Añadir Oferta</Link></li>
                                             <li><Link className="dropdown-item" to="/jobs">Ofertas Laborales</Link></li>
                                        </ul>
                                   </li>

                                   <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Empresas
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                             <li><Link className="dropdown-item" to="/business">Añadir</Link></li>
                                             <li><a className="dropdown-item" href="/">Lista Empresas</a></li>
                                        </ul>
                                   </li>

                                   <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Paises
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                             <li><Link className="dropdown-item" to="/">Añadir</Link></li>
                                             <li><a className="dropdown-item" href="/">Lista Paises</a></li>
                                        </ul>
                                   </li>

                                   <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Ciudades
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                             <li><Link className="dropdown-item" to="/">Añadir</Link></li>
                                             <li><a className="dropdown-item" href="/">Lista Ciudades</a></li>
                                        </ul>
                                   </li>
                              </ul>
                              
                         </div>
                         
                    </div>
               </nav>
            </>
          );
     }
     

     /*
     
     <nav className="navbar navbar-dark bg-dark mb-3">

                    <div className="container-fluid">
                         <span className="navbar-brand mb-0 h1">ToDosssList</span>

                         <div className="collapse navbar-collapse" id="navbarNav">
                              <ul className="navbar-nav">

                                   <li className="nav-item">
                                        <button className="nav-link active">Home</button>
                                   </li>

                                   <li className="nav-item">
                                        <button className="nav-link">Features</button>
                                   </li>

                                   <li className="nav-item">
                                        <button className="nav-link">Pricing</button>
                                   </li>
                         
                              </ul>
                         </div>

                    </div>

                    
                    
              </nav>

     */

              /* 
              
              <li className="nav-item">
                                        <Link className="nav-link" to="/add">Ingresar Oferta</Link>
                                   </li>

                                   <li className="nav-item">
                                        <Link className="nav-link" to="/jobs">Ofertas Laborales</Link>
                                   </li>
                                   
                                   */
}