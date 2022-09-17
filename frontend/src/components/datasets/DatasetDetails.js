import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderAfterLogin from '../HeaderAfterLogin';
const url = 'http://localhost:5005/';

const styles = {
    heading: {
        position: 'absolute',
        top: '50%',
        textAlign: 'center',
        left: '50%',
        color: 'rgb(255,255,255)',
        backgroundColor: 'rgba(1,1,1,0.5)',
        minWidth: '100vh',
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

    // const url = "http://localhost:5005/"
    const { id } = useParams();
    const [datasetDetails, setDatasetDetails] = useState('')

    console.log(id);
    // const datasetId= JSON.stringify(id);
    const fetchDetails = async () => {
        const response = await fetch("http://localhost:5005/dataset/details/" + id)
        const details = await response.json();
        console.log(details);
        setDatasetDetails(details);
    }

    const showDetails = (datasetDetails) => {
        return (
            <div className="container">
                <div className="card">
                    <img src={url + datasetDetails.thumbnail} alt="thumbnail" width="100%" style={styles.image} />
                    <h2 style={styles.heading}>{datasetDetails.title}</h2></div>
                <div className="container">
                    <h3>{datasetDetails.description}</h3>
                </div>
                <div className="container">
                    <h4>File to Download  <i class="fas fa-hand-point-right    "></i>
                        <a href={url + datasetDetails.file}>.csv file</a></h4>
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
            <h1 className='text-center p-3 m-3 fw-bold' style={{
                fontSize: '5rem',
                backgroundColor: "linear-gradient(to right, #87CF90 0%, #78CDFF 33%, #B7DF2D 100%)"
            }}>Dataset Details</h1>
            {showDetails(datasetDetails)}
        </>
    )
}

export default DatasetDetails