import { Formik } from 'formik'
import React from 'react'
import { NavLink } from 'react-router-dom'
import HeaderWithNav from '../HeaderWithNav'

const Register = () => {

    const resiterSubmit =async (registerData,{resetForm})=>{
        console.log(registerData);
        const response = await fetch('http://localhost:5005/user/registeruser',{
            method:'post',
            body: JSON.stringify(registerData),
            headers:{
                'Content-Type':'application/json'
            }
        })
        console.log(response.status);
        resetForm();


    }
        return (
        <>

            <HeaderWithNav />
            <section
                className="vh-100 bg-image"
                style={{
                    backgroundImage:
                        'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'
                }}
            >
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: 15 }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">
                                            Create an account
                                        </h2>
                                        <Formik initialValues={{username:'',email:'',password: ''}} onSubmit={resiterSubmit}>
                                            {({values, handleSubmit, handleChange})=>{return <form onSubmit={handleSubmit}>
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="text"
                                                    id="username"
                                                    value={values.username}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label" htmlFor="form3Example1cg">
                                                    UserName
                                                </label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label" htmlFor="form3Example3cg">
                                                    Your Email
                                                </label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="password"
                                                    id="password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label" htmlFor="form3Example4cg">
                                                    Password
                                                </label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="password"
                                                    id="form3Example4cdg"
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label" htmlFor="form3Example4cdg">
                                                    Repeat your password
                                                </label>
                                            </div>
                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="form2Example3cg"
                                                />
                                                <label className="form-check-label" htmlFor="form2Example3g">
                                                    I agree all statements in{" "}
                                                    <a href="#!" className="text-body">
                                                        <u>Terms of service</u>
                                                    </a>
                                                </label>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button
                                                    type="submit"
                                                    className="btn btn-outline-success btn-block btn-lg gradient-custom-4 text-body"
                                                >
                                                    Register
                                                </button>
                                            </div>
                                            <p className="text-center text-muted mt-5 mb-0">
                                                Have already an account?{" "}
                                                <NavLink to="../login" className="fw-bold text-body">
                                                    <u>Login here</u>
                                                </NavLink>
                                            </p>
                                        </form>}}
                                        
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register