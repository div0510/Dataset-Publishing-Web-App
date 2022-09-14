import React, { useState } from 'react';
// const backgroundImage = require('./public/Images/dataset.jpg');
// https://i.pinimg.com/564x/bc/d7/e0/bcd7e06ccf12bc959b6b7645b711a606.jpg
import { Formik } from 'formik';
import toast from 'react-hot-toast';
// import { NavLink } from 'react-router-dom';

const styles = {
    transparent: {
        backgroundFilter: "blur(6px)",
        backgroundColor: "rgba(255,255,255,0.2)",
        color: "white"
    },
    textarea: {
        backgroundColor: "rgba(255,255,255,0.2)",
        // backgroundColor: "rgba(0,0,0,0.4)",
        color: "white",
        borderRadius: "5px"
    },
    backgroundWhite: {
        padding: "10px",
        backgroundColor: "rgba(0,0,0,0.4)",

        borderRadius: "5px"
    }
}

const AddDataset = () => {

    const [selFile, setSelFile] = useState("");
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    const uploadFile = (e) => {
        const file = e.target.files[0];
        setSelFile(file.name);
        const fd = new FormData();
        fd.append("myfile", file);
        fetch("http://localhost:5005/util/uploadfile", {
            method: "POST",
            body: fd,
        }).then((res) => {
            console.log(res.status);
            if (res.status === 200) {
                toast.success("File Uploaded!!", {
                    style: {
                        borderRadius: "10px",
                        background: "white",
                        color: "black",
                    },
                });
            }
        });
    };

    const datasetSubmit = async (datasetData) => {
        datasetData.file = selFile;
        console.log(datasetData);
        const response = await fetch('http://localhost:5005/dataset/add', {
            method: 'post',
            body: JSON.stringify(datasetData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.status === 200) {
            console.log('Dataset Saved');
        }
        else {
            console.log('try again');
        }
    }








    return (
        <>
            <div className="container d-flex align-items-center justify-content-center my-lg" style={{
                backgroundImage: "url('./images/dataset.jpg')",
                backgroundSize: "cover",
                backdropFilter: "blur(50px)",
                borderRadius: "5px"
            }}>
                <h2 className='text-center p-2 mx-2' style={styles.textarea}> Publish Your Dataset Here  <i class="fas fa-hand-point-right    "></i></h2>
                <div className="card p-4 " style={
                    styles.transparent
                }>
                    <Formik
                        initialValues={{ title: '', description: '', createdAT: new Date(), createdBy: currentUser._id, url: '' }}
                        onSubmit={datasetSubmit}>
                        {({ values, handleSubmit, handleChange }) => {
                            return <form onSubmit={handleSubmit}>
                                <div className="input-group flex-nowrap mb-4">
                                    <span className="input-group-text" id="addon-wrapping" style={styles.transparent}>
                                        Title
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="addon-wrapping"
                                        style={styles.transparent}
                                        id='title'
                                        onChange={handleChange}
                                        value={values.title}
                                    />
                                </div>

                                <div className=" border mb-4 border-secondary " style={styles.transparent}>
                                    <label className="input-group-text border-0" style={styles.transparent}>Description</label>
                                    <textarea
                                        rows="4"
                                        className="form-control rounded text-break"
                                        aria-label="With textarea"

                                        style={styles.textarea}
                                        id='description'
                                        onChange={handleChange}
                                        value={values.description}
                                    />
                                </div>

                                {/* <div class="input-group p-1 d-flex align-items-center justify-content-center" style={
                                styles.transparent}>
                                <label  class="form-label ml-2 px-1 fs-4 fw-normal" style={styles.textarea}>Your Dataset URL</label>
                                <span class="input-group-text border-0 " id="basic-addon3" style={styles.textarea}>https://example.com/LoggedInUser/
                                    <input
                                        type="text"
                                        class="form-control rounded"
                                        id="url"
                                        // defaultValue={'https://example.com/LoggedInUser/'}
                                        onChange={handleChange}
                                        value={values.url}
                                        style={styles.transparent}
                                        aria-describedby="basic-addon3"

                                    /></span>
                            </div> */}

                                <section className="p-4 d-flex justify-content-center w-100" style={styles.transparent}>
                                    <div className="file-upload-wrapper" style={styles.backgroundWhite} >
                                        <div className="file-upload">
                                            <div className="file-upload-message">
                                                <i className="fas fa-cloud-upload-alt file-upload-cloud-icon" />
                                                <p className="file-upload-default-message">
                                                    Drag and drop a file here or click to Upload .csv file
                                                </p>
                                                <p className="file-upload-main-error" />
                                            </div>
                                            <div className="file-upload-mask" />
                                            <ul className="file-upload-errors" />
                                            <h3 className='text-center'>OR</h3>
                                            <input
                                                type="file"
                                                onChange={uploadFile}
                                                style={styles.transparent}
                                                className="file-upload-input has-multiple"

                                                data-mdb-file-upload="file-upload"


                                            />
                                            <div className="file-upload-previews" />
                                        </div>
                                    </div>
                                </section>

                                <div className=' d-flex m-2 justify-content-end'>
                                    <button
                                        type="submit"
                                        className="btn btn-outline-info btn-rounded  text-center btn-lg"
                                        data-mdb-ripple-color="#fff"
                                        style={{
                                            backgroundColor: "",
                                            color: "white",
                                            borderColor: "white"
                                        }}
                                    >

                                        Publish <i className="fas fa-table ms-1" />
                                    </button>
                                </div>
                            </form>
                        }}

                    </Formik>

                </div>
            </div >
        </>
    )
}

export default AddDataset