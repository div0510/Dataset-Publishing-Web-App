import React from 'react'
import { useParams } from 'react-router-dom'

const DatasetDetails = () => {

    const { id } = useParams();

    console.log(id);
    const datasetId= JSON.stringify(id);
    const fetchDetails = async () => {
        const response = await fetch(`http://localhost:5005/dataset/details/${datasetId}`)
        const details = await response.json();
        console.log(details);
    }
    return (
        <>
            <div>DatasetDetails
                {fetchDetails()}
            </div>
        </>
    )
}

export default DatasetDetails