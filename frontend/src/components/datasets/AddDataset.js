import React from 'react'
// const backgroundImage = require('C:/Users/asus/MINI PROJECTS/Dataset Publishing Web App/frontend/public/Images/dataset.jpg');


const styles = {
    transparent:{
        backgroundFilter: "blur(6px)",
        backgroundColor:"rgba(0,0,0,0.2)",
        color: "white"
    },
    textarea: {
        
        backgroundColor:"rgba(0,0,0,0.4)",
        color: "white",
        borderRadius: "5px"
    },
    backgroundWhite:{
        padding: "10px",
        backgroundColor:"rgba(0,0,0,0.4)",
        
        borderRadius: "5px"
    }
}

const AddDataset = () => {












    return (
        <>
        <div className="container d-flex align-items-center justify-content-center my-lg" style={{
            backgroundImage: "url('https://i.pinimg.com/564x/bc/d7/e0/bcd7e06ccf12bc959b6b7645b711a606.jpg')",
            backgroundSize: "cover",
            backdropFilter: "blur(7px)",
            borderRadius: "5px"
        }}>
            <h2 className='text-center p-2 mx-2' style={styles.textarea}> Publish Your Dataset Here  <i class="fas fa-hand-point-right    "></i></h2>
            <div className="card p-4 " style={
                styles.transparent
            }>
                <form >
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
                        />
                    </div>

                    <div className="form-outline border mb-4 border-secondary " style={styles.transparent}>
                        <label className="input-group-text border-0" style={styles.transparent}>Description</label>
                        <textarea
                            rows="4"
                            className="form-control rounded text-break"
                            aria-label="With textarea"
                            defaultValue={""}
                            style={styles.textarea}
                        />
                    </div>

                    <div class="input-group p-1 d-flex align-items-center justify-content-center" style={
                        styles.transparent}>
                        <label for="basic-url" class="form-label ml-2 px-1 fs-4 fw-normal" style={styles.textarea}>Your Dataset URL</label>
                        <span class="input-group-text border-0 " id="basic-addon3" style={styles.textarea}>https://example.com/LoggedInUser/
                            <input
                                type="text"
                                class="form-control rounded"
                                id="basic-url3"
                                style={styles.transparent}
                                aria-describedby="basic-addon3"
                            /></span>
                    </div>

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
                                    id="dnd-multiple-with-file-limit"
                                    type="file"
                                    style={styles.transparent}
                                    className="file-upload-input has-multiple"
                                    data-mdb-multiple="true"
                                    data-mdb-max-file-quantity={3}
                                    data-mdb-file-upload="file-upload"
                                    accept=""
                                    multiple="true"
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
                            {" "}
                            Submit <i className="fas fa-table ms-1" />
                        </button>
                    </div>
                </form>
            </div>
        </div >
        </>
    )
}

export default AddDataset