import React, { Component } from "react";
import {Link} from 'react-router-dom';
export default class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">ExerciseTracker</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Exercises</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create" className="nav-link">Create Exercise Log</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>
                    </ul>
                                
                </div>
            </nav>

            // <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            // <Link to="/" className="navbar-brand">ExerciseTracker</Link>
            // <div className ="collapse navbar-collapse">
            // <ul className="navbar-nav mr-auto">
                // <li className="navbar-item">
                //     <Link to="/" className="nav-link">Exercises</Link>
                // </li>
                // <li className="navbar-item">
                //     <Link to="/create" className="nav-link">Create Exercise Log</Link>
                // </li>
                // <li className="navbar-item">
                //     <Link to="/user" className="nav-link">Create User</Link>
                // </li>
            // </ul>
            // </div>
            // </nav>
        )
    }
};
