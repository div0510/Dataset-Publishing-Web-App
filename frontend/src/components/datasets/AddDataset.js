import React, { useState } from 'react';
// const backgroundImage = require('./public/Images/dataset.jpg');
// https://i.pinimg.com/564x/bc/d7/e0/bcd7e06ccf12bc959b6b7645b711a606.jpg
import { Formik } from 'formik';
import toast from 'react-hot-toast';
import HeaderAfterLogin from '../HeaderAfterLogin';
import { Autocomplete, Chip, TextField } from '@mui/material';
import Swal from 'sweetalert2';
// import { NavLink } from 'react-router-dom';

const styles = {
    transparent: {
        // filter: "blur(6px)",
        backgroundColor: "rgba(255,255,255,0.15)",
        color: "black",
        zIndex: 2,
        // borderRadius: '5px'
        

    },
    cardbg: {
        // filter: 'drop-shadow(2px 4px 6px black)',
        
        backgroundColor: 'rgba(97, 255, 255, 0.35)',
        color: 'black',
        zIndex: 2,
        borderRadius: '5px'
    },
    textarea: {
        // backgroundColor: 'rgba(57, 61, 56, 0.75)',
        backgroundColor: "rgba(255,255,255,0.45)",
        // backgroundColor: "rgba(0,0,0,0.4)",
        color: 'black',
        zIndex: 2,
        padding: "5px",
        borderRadius: "5px",
        width: '100%'
    },
    backgroundWhite: {
        padding: "10px",
        backgroundColor: "rgba(0,0,0,0.15)",
        zIndex: 2,
        borderRadius: "5px"
    }
}

const AddDataset = () => {

    const [selFile, setSelFile] = useState("");
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const [thumbnail, setThumbnail] = useState("");
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

    const uploadThumbnail = (e) => {
        const thumbnailFile = e.target.files[0];
        setThumbnail(thumbnailFile.name);
        const fd = new FormData();
        fd.append('thumbnail', thumbnailFile);
        fetch("http://localhost:5005/util/uploadthumbnail", {
            method: 'post',
            body: fd,
        })
            .then((result) => {
                if (result.status === 200) {
                    toast.success("Thumbnail Uploaded ", {
                        style: {
                            borderRadius: "10px",
                            background: "white",
                            color: "black",
                        },
                    });
                }
            }).catch((err) => {
                console.log(err);
            });
    }

    const datasetSubmit = async (datasetData, {resetForm}) => {
        datasetData.file = selFile;
        datasetData.thumbnail = thumbnail;
        datasetData.upvote = 0;
        datasetData.downvote=0;
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
            Swal.fire(
                {
                    title:"Success",
                    icon: "success",
                    text:"Published",
                    confirmButtonText: 'OK',
                    confirmButtonColor: 'green'
                }
            )
            resetForm();
        }
        else {
            console.log('try again');
            Swal.fire(
                {
                    title:"Something happend to server",
                    icon: "errpr",
                    text:"Publish Failed",
                    confirmButtonText: 'OK',
                    confirmButtonColor: 'red'
                }
            )
        }
    }

    return (
        <>
            <HeaderAfterLogin />
            <div className="container d-flex align-items-start  justify-content-center my-lg" style={{
                backgroundImage: "url('./images/bgadd3.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'rgb(73 210 205 / 67%) !important',
                backgroundSize: '100% 100%',
                borderRadius: "5px",
                zIndex: -1,
                // margin: 'auto',
                padding: '5vh',
                // marginInline: '5vh',
                // marginBlock: '10vh',
                width: '100%',
                // position: 'absolute',
                // minWidth: '80vw',
                // minHeight: '50vh',
                // top: 50,
                // filter: 'blur(1px)',
            }}>

                <h2 className='text-center p-2 mx-5' style={styles.cardbg}> Publish Your Dataset Here  <i class="fas fa-hand-point-right    "></i></h2>
                <div className="card p-4 " style={styles.cardbg}>
                    <Formik
                        initialValues={{ title: '', description: '', createdAt: new Date(), createdBy: currentUser._id, url: '', tags: ['covid'] }}
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
                                        required
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
                                        style={styles.cardbg}
                                        id='description'
                                        onChange={handleChange}
                                        required
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

                                <Autocomplete
                                    multiple
                                    id="tags"
                                    options={[].map((option) => option)}
                                    defaultValue={[]}
                                    onChange={handleChange}
                                    renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                        ))
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="filled"
                                            label="freeSolo"
                                            placeholder="Favorites"
                                        />
                                    )}
                                />

                                <label className="form-label mt-2 " htmlFor="customFile" style={styles.textarea}>Upload your .csv file  &nbsp; <i class="fas fa-cloud-upload-alt    "></i>
                                </label><input
                                    type="file"
                                    required
                                    onChange={uploadFile}
                                    style={styles.transparent}
                                    className="file-upload-input has-multiple"
                                    data-mdb-file-upload="file-upload"

                                />
                                <br />
                                <label className="form-label mt-2" htmlFor="customFile" style={styles.textarea}>Upload Thumbnail &nbsp; <i class="fas fa-file-image    "></i>
                                </label><input type="file"
                                    class="file-upload-input has-multiple"
                                    id="customFile"
                                    required
                                    onChange={uploadThumbnail}
                                    style={styles.transparent}
                                    data-mdb-file-upload="file-upload"
                                />

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