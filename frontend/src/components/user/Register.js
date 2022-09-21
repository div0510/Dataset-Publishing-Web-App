import { Formik } from 'formik'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import HeaderWithNav from '../HeaderWithNav'

const Register = () => {

    const navigate = useNavigate()

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
        if(response.status === 200)
        {
            Swal.fire({
                title:"Success",
                icon: "success",
                text:"Register Successful",
                confirmButtonText: 'OK',
                confirmButtonColor: 'green'

            })
            navigate('/login');
        }
        else{
            Swal.fire({
                title:"Error",
                icon: "error",
                text:"Register Failed",
                confirmButtonText: 'OK',
                confirmButtonColor: 'red'
            })
        }
        resetForm();


    }
        return (
        <>

            <HeaderWithNav />
            <section
                className="vh-100 bg-image"
                style={{
                    backgroundImage:
                        'url("Images/registerPage.jpg")',
                        

                }}
            >
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card m-3 " style={{ borderRadius: 15, height: '80vh' }}>
                                    <div className="card-body  " style={{overflow: 'auto'}}>
                                        <h2 className="text-uppercase text-center mb-5">
                                            Create an account
                                        </h2>
                                        <Formik initialValues={{username:'',email:'',password: ''}} onSubmit={resiterSubmit}>
                                            {({values, handleSubmit, handleChange})=>{return <form onSubmit={handleSubmit}>
                                            <div className="mb-4">
                                                <label className="form-label" htmlFor="form3Example1cg">
                                                    UserName
                                                </label>
                                                <input
                                                    type="text"
                                                    id="username"
                                                    value={values.username}
                                                    onChange={handleChange}
                                                    required
                                                    className="form-control form-control-lg"
                                                />
                                            </div>
                                            <div className="form-label mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg">
                                                    Your Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="form-control form-control-lg"
                                                />
                                            </div>
                                            <div className="form-label mb-4">
                                                <label className="form-label" htmlFor="form3Example4cg">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    required
                                                    className="form-control form-control-lg"
                                                />
                                            </div>
                                            <div className="form-label mb-4">
                                                <label className="form-label" htmlFor="form3Example4cdg">
                                                    Repeat your password
                                                </label>
                                                <input
                                                    type="password"
                                                    id="form3Example4cdg"
                                                    required
                                                    className="form-control form-control-lg"
                                                />
                                            </div>
                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    required
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