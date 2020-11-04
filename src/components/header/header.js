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
                        <NavLink to="/home" className="nav-item nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item active prs bold">
                        <NavLink to="/users" className="nav-item nav-link">Users List</NavLink>
                    </li>
                </ul>
                <ul className="nav navbar-nav ml-auto">

                    <li className="nav-item dropdown active bold">
                        <a href="dashboard" className="nav-link dropdown-toggle" data-toggle="dropdown">AM</a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a href="dashboard" className="dropdown-item bold">
                                <i className="fa fa-wrench"></i> &nbsp;Settings</a>
                            <div className="dropdown-divider"></div>
                            <a href="login" className="dropdown-item bold">
                                <i className="fa fa-lock"></i> &nbsp;Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header; 