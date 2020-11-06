import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-sm bg-blue navbar-dark fixed-top">
            <a href="dashboard" className="navbar-brand">COMPANY LOGO</a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarCollapse" className="collapse navbar-collapse mls">
                <ul className="nav navbar-nav">                    
                    <li className="nav-item active prs bold">
                        <NavLink to="/users" className="nav-item nav-link">Users List</NavLink>
                    </li>
                </ul>                
            </div>
        </nav>
    );
}

export default Header; 