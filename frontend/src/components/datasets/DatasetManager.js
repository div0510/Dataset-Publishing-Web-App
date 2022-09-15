import React, { useEffect, useState } from 'react'

const url = 'http://localhost:5005/'
const DatasetManager = () => {

    const [allDatasets, setAllDatasets] = useState([])
    const [createdByDetails, setCreatedByDetails] = useState(null)
    const [useID, setUseID] = useState('');


    const getAllDatasets = async () => {

        const response = await fetch('http://localhost:5005/dataset/getall')
        const data = await response.json()
        console.log(data);
        setAllDatasets(data);

    }

    // const getCreatedByDetails = async () => {

    //     const response = await fetch('http://localhost:5005/user/getdetailofuser',{
    //         method: 'post',
    //         body: JSON.stringify(useID),
    //         headers:{
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //     const userData = await response.json();
    //     console.log(userData);

        
    // }

    useEffect(() => {

        getAllDatasets()

    }, [])


    const showDatasets = () => {



        return (
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                    <tr>
                        <th>CreatedBy</th>
                        <th>Titile</th>
                        <th>Description</th>
                        <th>Details</th>
                        <th>Tags</th>
                        <th>File</th>
                        <th>Thumbnail</th>
                        {/* <th>CreatedBy</th> */}
                        <th>CreatedAt</th>
                    </tr>
                </thead>
                <tbody>
                    {allDatasets.map(  (dataset) => {

                        // 
                        // console.log(dataset.createdBy);
                        
                        // setUseID(dataset.createdBy);
                        // console.log(useID)
                        // getCreatedByDetails();
                        // getCreatedByDetails()

                        // const response = await fetch('http://localhost:5005/user/getdetailofuser')


                        return <tr key={dataset._id}>
                            <td>
                                <div className="d-flex align-items-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{ width: 45, height: 45 }}
                                        className="rounded-circle"
                                    />
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">Username</p>
                                        <p className="text-muted mb-0">user@email.dataset</p>
                                        <p className="text-muted mb-0">{dataset.createdBy}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">{dataset.title}</p>
                                {/* <p className="text-muted mb-0">IT department</p> */}
                            </td>
                            <td><p className="fw-normal mb-1">{dataset.description}</p></td>
                            <td><p className="fw-normal mb-1">Details</p></td>
                            <td>
                                <span className="badge badge-success rounded-pill d-inline">
                                    Tags
                                </span>
                            </td>
                            <td><p className="btn btn-link btn-sm btn-rounded"><a href={url + dataset.file}>View .csv File</a></p></td>
                            <td>
                                <p className="btn btn-link btn-sm btn-rounded">
                                    <a href={url + dataset.thumbnail}>View Thumbnail</a>
                                </p>
                            </td>
                        </tr>

                    })}


                </tbody>
            </table>
        )


    }



    return (
        <div className="container">
            <h1>Dataset Manager</h1>
            <div className="row">
                <div className="col-md">
                    {showDatasets()}
                </div>
            </div>
        </div>
    )
}

export default DatasetManager