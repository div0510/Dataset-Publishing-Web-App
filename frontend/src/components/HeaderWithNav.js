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
                        <li className="nav-item active">
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
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <button type="button" className="btn btn-link px-3 me-2">
                            <NavLink to='../login'>
                                Login
                            </NavLink>
                        </button>
                        <button type="button" className="btn btn-outline-info me-3">
                            <NavLink to='../userregister' className="text-primary" >Register</NavLink>
                        </button>
                        <a
                            className="btn btn-dark px-3"
                            href="https://github.com/mdbootstrap/mdb-ui-kit"
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
        <div
            className="p-5 text-center bg-image"
            style={{
                backgroundImage:
                    'url("https://mdbcdn.b-cdn.net/img/new/slides/061.webp")',
                height: 400
            }}
        >
            <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                        <h1 className="mb-3">DataSets</h1>
                        <h4 className="mb-3">Let Play with It</h4>
                        <a className="btn btn-outline-light btn-lg" href="#!" role="button">
                            <i class="fas fa-plus    "></i> New Dataset
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Background image */}
    </header>

}

export default HeaderWithNav