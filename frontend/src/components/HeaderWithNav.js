import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderWithNav = () => {
    return <header>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarExample01"
                    aria-controls="navbarExample01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarExample01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className='nav-item'>
                        <NavLink className="navbar-brand me-2" to="/datasets">
                            <img
                                src="../Images/lgo.png"
                                height={50}
                                alt="Datum"
                                loading="lazy"
                                // sizes='cover'
                                style={{ marginTop: "-1px" }}
                            />
                        </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/datasets'><h3>Datasets</h3></NavLink>
                        </li>
                        {/* <li className="nav-item active">
                            <a className="nav-link" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Features
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Pricing
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li> */}
                    </ul>
                    <div className="d-flex align-items-center">
                        <NavLink to='../login'>
                            <button type="button" className="btn btn-link px-3 me-2">
                                Login
                            </button>
                        </NavLink>
                        <NavLink to='../userregister' className="text-primary" >
                            <button type="button" className="btn btn-outline-info me-3">
                                Register
                            </button></NavLink>
                        <a
                            className="btn btn-dark px-3"
                            href="https://github.com/div0510/Dataset-Publishing-Web-App"
                            role="button"
                        >
                            <i className="fab fa-github" />
                        </a>
                    </div>

                </div>
            </div>
        </nav>
        {/* Navbar */}
        {/* Background image */}

        {/* Background image */}
    </header>

}

export default HeaderWithNav