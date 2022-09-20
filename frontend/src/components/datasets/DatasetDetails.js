import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderAfterLogin from '../HeaderAfterLogin';
const url = 'http://localhost:5005/';


const styles = {
    converted: {
        background: [
            "#77BD59",
            "-webkit-linear-gradient(to right, #77BD59 0%, #21FFCB 33%, #B7DF2D 100%)",
            "-moz-linear-gradient(to right, #77BD59 0%, #21FFCB 33%, #B7DF2D 100%)",
            "linear-gradient(to right, #77BD59 0%, #21FFCB 33%, #B7DF2D 100%)"
        ],
        // WebkitBackgroundClip: "text",
        // WebkitTextFillColor: "transparent"
    },

    heading: {
        position: 'absolute',
        top: '50%',
        textAlign: 'center',
        left: '50%',
        color: 'rgb(255,255,255)',
        backgroundColor: 'rgba(1,1,1,0.5)',
        minWidth: '90%',
        padding: '1rem',
        fontSize: '3rem',
        transform: 'translate(-50%, -50%)',
        borderRadius: '7px',
        textTransform: 'uppercase',
    },
    image: {
        filter: 'blur(2px)',
        border: '3px solid black',
        height: '60vh',
        objectFit: 'cover'
    }
}


const DatasetDetails = () => {
    const [count, setCount] = useState(0);
    // const url = "http://localhost:5005/"
    const { id } = useParams();
    const [datasetDetails, setDatasetDetails] = useState('')

    console.log(`${id} + ${count}`);
    
    // const datasetId= JSON.stringify(id);
    const fetchDetails = async () => {
        const response = await fetch("http://localhost:5005/dataset/details/" + id)
        const details = await response.json();
        console.log(details);
        setDatasetDetails(details);
        setCount(count+1);
    }

    const showDetails = () => {
        return (
            <div className="container">
                <div className="col-md">
                    <div className="card">
                        <img src={url + datasetDetails.thumbnail} alt="thumbnail" width="100%" style={styles.image} />
                        <h2 style={styles.heading}>{datasetDetails.title}</h2></div>
                </div>
                <div className="col-md">
                    <div className="container">
                        <h3>{datasetDetails.description}</h3>
                        <h3>Uploaded By: {datasetDetails.createdBy.username}</h3>
                        {/* {console.log(datasetDetails)} */}
                        <h3>Uploaded At: {new Date(datasetDetails.createdAt).toLocaleDateString()}</h3>
                    </div>
                    <div className="container">
                        <h4>File to Download  <i class="fas fa-hand-point-right    "></i>
                            <a href={url + datasetDetails.file}>.csv file</a></h4>
                    </div>
                </div>
            </div>
        )
    }

    useEffect(() => {
        fetchDetails()
    }, [])

    return (
        <>
            <HeaderAfterLogin />
            {/* <h1 className='text-center p-3 m-3 fw-bold' style={styles.converted}>Dataset Details</h1> */}
            {showDetails(datasetDetails)}
        </>
    )
}

export default DatasetDetails