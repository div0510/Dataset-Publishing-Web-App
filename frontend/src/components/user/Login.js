import React from 'react'
import { NavLink, Link ,useNavigate } from 'react-router-dom'
import HeaderWithNav from '../HeaderWithNav'
import Swal from "sweetalert2";
import { Formik } from 'formik';

const Login = () => {
    // const navigate = useNavigate();

    // navigate('/adddataset')

    const loginSubmit = async (logindata, { resetForm })=>{
            console.log(logindata);
            const data = JSON.stringify(logindata)
            const response = await fetch(`http://localhost:5005/user/login`,{
                method: 'post',
                body: data,
                headers:{
                    'Content-Type': 'application/json'
                }

            });
            console.log(response.status)
            resetForm();
            if(response.status ===200)
            {
                const userData = await response.json();
                sessionStorage.setItem('user', JSON.stringify(userData));
                // console.log("Logged In"); // Give swal
                Swal.fire(
                    {
                        title:"Success",
                        icon: "success",
                        text:"Log In Successful",
                        confirmButtonText: 'OK',
                        confirmButtonColor: 'green'
                    }
                )
            }else if(response.status ===401)
            {
                // console.log("Login Failed");
                Swal.fire(
                    {
                        title:"Error",
                        icon: "error",
                        text:"Someone Anonymous",
                        confirmButtonText: 'OK',
                        confirmButtonColor: 'red',
                        footer: `<a href='../userregister'>Want to register?</a>`

                    }
                )
            }else{
                console.log('error');
            }

    }


    return <>
        <HeaderWithNav />
        <div className="conteiner">
            <div className="card">
                <section className="vh-80" style={{ backgroundColor: "#9A616D" }}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-xl-10">
                                <div className="card" style={{ borderRadius: "1rem" }}>
                                    <div className="row g-0">
                                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                                alt="login form"
                                                className="img-fluid"
                                                style={{ borderRadius: "1rem 0 0 1rem" }}
                                            />
                                        </div>
                                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                            <div className="card-body p-4 p-lg-5 text-black">
                                                <Formik initialValues={{ username: '', password: '' }} onSubmit={loginSubmit} >
                                                    {({ values, handleSubmit, handleChange }) => (<form onSubmit={handleSubmit}>
                                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                                <i
                                                                    className="fas fa-cubes fa-2x me-3"
                                                                    style={{ color: "#ff6219" }}
                                                                />
                                                                <span className="h1 fw-bold mb-0">DataSets</span>
                                                            </div>
                                                            <h5
                                                                className="fw-normal mb-3 pb-3"
                                                                style={{ letterSpacing: 1 }}
                                                            >
                                                                Sign into your account
                                                            </h5>
                                                            <div className="form-outline  mb-4">
                                                                <input
                                                                    // type="email"
                                                                    id="username"
                                                                    className="form-control  form-control-lg"
                                                                    value={values.username}
                                                                    onChange={handleChange}
                                                                />
                                                                <label className="form-label" htmlFor="username">
                                                                    Email address/UserName
                                                                </label>
                                                            </div>
                                                            <div className="form-outline mb-4">
                                                                <input
                                                                    type="password"
                                                                    id="password"
                                                                    className="form-control form-control-lg"
                                                                    onChange={handleChange}
                                                                    value={values.password}
                                                                />
                                                                <label className="form-label" htmlFor="password">
                                                                    Password
                                                                </label>
                                                            </div>
                                                            <div className="pt-1 mb-4">
                                                                <button
                                                                    className="btn btn-dark btn-lg btn-block"
                                                                    type="submit"
                                                                >
                                                                    Login
                                                                </button>
                                                            </div>
                                                            <a className="small text-muted" href="#!">
                                                                Forgot password?
                                                            </a>
                                                            <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                                                                Don't have an account?{" "}
                                                                <NavLink to="../userregister" end replace={true} style={{ color: "#393f81" }}>
                                                                    Register here
                                                                </NavLink>
                                                            </p>
                                                            <a href="#!" className="small text-muted">
                                                                Terms of use.
                                                            </a>
                                                            <a href="#!" className="small text-muted">
                                                                Privacy policy
                                                            </a>
                                                        </form>)
                                                    }
                                                </Formik>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </>
}

export default Login    