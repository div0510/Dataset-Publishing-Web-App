import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const url = 'http://localhost:5005/';
const DatasetDetails = () => {

    // const url = "http://localhost:5005/"
    const { id } = useParams();
    const [datasetDetails, setDatasetDetails] = useState('')

    console.log(id);
    // const datasetId= JSON.stringify(id);
    const fetchDetails = async () => {
        const response = await fetch("http://localhost:5005/dataset/details/"+id)
        const details = await response.json();
        console.log(details);
        setDatasetDetails(details);
    }

    const showDetails = (datasetDetails) => {
        return (
            <div className="container">
                <div className="card">
                    <img src={url+datasetDetails.thumbnail} alt="thumbnail" width="200px" height="200px"/>
                <h2>{datasetDetails.title}</h2></div>
                <div className="container">
                    <h3>{datasetDetails.description}</h3>   
                </div>
                <div className="container">
                    <h4>File to Download  <i class="fas fa-hand-point-right    "></i>
                    <a href={url+datasetDetails.file}>.csv file</a></h4>
                </div>
            </div>
        )
    }

    useEffect(() => {
        fetchDetails()
    }, [])
    
    return (
        <>
            <h1>Dataset Details</h1>
            {showDetails(datasetDetails)}
        </>
    )
}

export default DatasetDetails