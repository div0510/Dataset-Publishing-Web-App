import React, { useState } from 'react'
import { Navigate, NavLink } from 'react-router-dom';
import Login from './user/Login';





const HeaderAfterLogin = () => {

    let userState = sessionStorage.getItem('user');

    const signOut = () => {
        sessionStorage.removeItem('user');
        <Navigate to='/login' replace={true} />
    }

    const logIn = () => {
        // <Navigate to='/login' replace={true}/>
    }


    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* Container wrapper */}
                <div className="container">
                    {/* Navbar brand */}
                    <a className="navbar-brand me-2" href="https://mdbgo.com/">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                            height={16}
                            alt="MDB Logo"
                            loading="lazy"
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
                                : <button type="button" onClick={signOut} className="btn btn-outline-danger px-3 me-2" data-mdb-ripple-color="dark">Sign Out</button>}
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