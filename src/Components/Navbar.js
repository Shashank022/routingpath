import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) =>{

    return(
        <nav className="nav-wrapper green-darken-3">
            <div className="container">
                <a className="brand-logo left"><Link to="/home">Todo App</Link></a>
                    <ul className="right">
                        <li><Link to="/home">Home</Link></li> 
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/info">Info</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
            </div> 
        </nav>  
       
    )
}

export default withRouter(Navbar);