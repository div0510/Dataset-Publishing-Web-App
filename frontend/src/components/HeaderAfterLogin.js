import React, { useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import Login from './user/Login';





const HeaderAfterLogin = () => {

    const navigate = useNavigate();

    let userState = sessionStorage.getItem('user');

    const signOut = () => {
        sessionStorage.removeItem('user');
        navigate('/login')
    }

    const logIn = () => {
        navigate('/login')
    }


    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* Container wrapper */}
                <div className="container">
                    {/* Navbar brand */}
                    <a className="navbar-brand me-2" target="_blank" href="https://github.com/div0510/Dataset-Publishing-Web-App">
                        <img
                            src="../Images/lgo.png"
                            height={50}
                            alt="Datum"
                            loading="lazy"
                            // sizes='cover'
                            style={{ marginTop: "-1px" }}
                        />
                    </a>
                    {/* Toggle button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarButtonsExample"
                        aria-controls="navbarButtonsExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarButtonsExample">
                        {/* Left links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/dataset">
                                    My Datasets
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/adddataset">
                                    Add Dataset
                                </NavLink>
                            </li>
                        </ul>
                        {/* Left links */}
                        <div className="d-flex align-items-center">
                            {/* {loginState 
                            ? <button type="button" className="btn btn-link-outline px-3 me-2">Login</button>
                            : <button type="button" className="btn btn-danger-outline px-3 me-2">Sign Out</button>} */}
                            {(userState === null)
                                ? <button type="button" onClick={logIn} className="btn btn-outline-link px-3 me-2" data-mdb-ripple-color="dark">Login</button>
                                : <button type="button" onClick={signOut} className="btn btn-outline-danger px-3 me-4" data-mdb-ripple-color="dark">Sign Out</button>}
                            <a
                                className="btn btn-dark px-3"
                                href="https://github.com/div0510/Dataset-Publishing-Web-App"
                                role="button"
                                target="_blank"
                            >
                                <i className="fab fa-github" />
                            </a>
                        </div>
                    </div>
                    {/* Collapsible wrapper */}
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}
        </>

    )
}

export default HeaderAfterLogin