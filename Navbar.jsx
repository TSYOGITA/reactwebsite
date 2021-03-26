import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () =>{
    return (
   <>
    <div className="conatiner-fluid">
        <div className="row">
            <div className="col-md-10 col-12 mx-auto">
                <nav className="navbar navbar-expand-lg">
                    <h3>React Developer</h3>
                    <div className="navbar-collapse collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink to="/" className="nav-link">Home<span className="sr-only"></span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
   </>
    );
};
export default Navbar;