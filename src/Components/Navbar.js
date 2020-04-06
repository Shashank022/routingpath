import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) =>{
    console.log(props);
    
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);

    return(
        <nav className="nav-wrapper green-darken-3">
            <div className="container">
                <a className="brand-logo">Todo App</a>
                    <ul className="right">
                        <li><Link to="/home">Home</Link></li> +
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
            </div> 
        </nav>
       
    )
}

export default withRouter(Navbar);