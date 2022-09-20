import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import HeaderAfterLogin from '../HeaderAfterLogin';

const AllDatasetWithoutUser = () => {

    const [dataFromBackend, setDataFromBackend] = useState([])
    const url = 'http://localhost:5005/';

    const fetchAllDataset = async () => {
        const response = await fetch('http://localhost:5005/dataset/getall')
        console.log(response.status);
        const data = await response.json();
        setDataFromBackend(data);
        console.log(dataFromBackend);
    }

    const displayAllDatasetInCard = () => {
        return dataFromBackend.map((data) => (
            <div className="col-md-3 m-3" key={data._id}>
                <div className="card ">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img
                            src={url + data.thumbnail}
                            className="img-fluid"
                            alt='thumbnail'
                            style={{ padding: '10px', borderRadius: '7px' }}
                        // width= "500px"
                        // height= "500px"
                        />
                        <a href="#!">
                            <div
                                className="mask"
                                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                            />
                        </a>
                    </div>
                    <div className="card-body ">
                        <h5 className="card-title ">{data.title}</h5>
                        <p className="card-text ">
                            {data.description}
                        </p>
                        <Link to={"/details/" + data._id} className="btn btn-primary btn-center">
                            View More
                        </Link>
                        {/* <a href={url+data.file} target="_blank" className='p-3' rel='noreferrer'>Download<i class="fas fa-cloud-download-alt fa-lg  "></i></a> */}
                    </div>
                </div>
            </div>
        ))
    }

    useEffect(
        () => {
            fetchAllDataset()
        }, [])

    return (
        <>
            <HeaderAfterLogin />
            <div className="container " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', minWidth: '80vw' }}>
                <div className='row m-3'>
                    {displayAllDatasetInCard()}
                </div>
            </div>
        </>
    )
}

export default AllDatasetWithoutUser