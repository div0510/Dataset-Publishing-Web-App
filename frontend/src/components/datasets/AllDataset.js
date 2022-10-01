import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import HeaderAfterLogin from '../HeaderAfterLogin';

const styles = {
  textDz: {
    fontSize: '5rem'

  }
}

const AllDataset = () => {

  const userDetail = sessionStorage.getItem('user')
  console.log(JSON.parse(userDetail))
  const [dataFromBackend, setDataFromBackend] = useState([])
  const url = 'http://localhost:5005/';

  const displayAllDatasets = async () => {
    const response = await fetch('http://localhost:5005/dataset/userdatasets',{
      method: 'post',
      body: userDetail,
      headers: {
        'Content-Type': 'application/json',
      }
    })

    console.log(response.status);
    const data = await response.json();
    console.log(data);
    setDataFromBackend(data);
    console.log(dataFromBackend.length);
    // dataFromBackend.forEach((dataset) => {
    //   settitle(dataset.title);
    //   setDescription(dataset.description);
    //   setImgUrl(dataset.file);
    // })



  }

  const displayAllDatasetInCard = () => {
    return (dataFromBackend.length === 0)? <div
    className="p-5 text-center bg-image"
    style={{
        backgroundImage:
            'url("../Images/header.jpg")',
        height: '80vh'
    }}
>
    <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" , height: '80vh' }}>
        <div className="d-flex justify-content-center align-items-center p-4 h-90">
            <div className="text-white p-3  w-100">
                <h1 className="mb-3" style={{fontSize: '6rem'}}>DATUM</h1>
                <h4 className="mb-3" style={{fontSize: '2rem'}}>NO DATASETS </h4>
                <h4 className="mb-3" style={{fontSize: '2rem'}}>Upload one  </h4>
                <h4 className="mb-3" style={{fontSize: '2rem'}}><i class="fas fa-hand-point-down    "></i></h4>
                <NavLink className="btn btn-outline-light btn-lg" to='../adddataset' role="button" style={{fontSize: '1.5rem'}}>
                    <i class="fas fa-plus"></i> New Datum
                </NavLink>
            </div>
        </div>
    </div>
</div>
    : dataFromBackend.map( (data) => (
      <div className="col-md-3 m-3" key={data._id}>
      <div className="card ">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img
          src={url+data.thumbnail}
          className="img-fluid"
          alt='thumbnail'
          style={{padding: '10px', borderRadius: '7px' , }}
          
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
          {data.tags}
        </p>
        <p className="card-text ">
          {new Date(data.createdAt).toLocaleDateString()}
        </p>
        <p className="card-text ">
          {data.description}
        </p>
        <Link to={"/details/"+data._id} className="btn btn-primary btn-center">
          View More
        </Link>
        {/* <a href={url+data.file} target="_blank" className='p-3' rel='noreferrer'>Download<i class="fas fa-cloud-download-alt fa-lg  "></i></a> */}
      </div>
    </div>
    </div>
    ) )
    
  }

  useEffect(() => {
    displayAllDatasets()
  },[])



  return (
    <>
      <HeaderAfterLogin/>
       <div className="container " > {/*style={{display: 'flex',justifyContent:'center',alignItems:'center',minHeight:'60vh',minWidth:'80vw'}} */}
        <div className='row m-3'>
        {displayAllDatasetInCard()}
        </div>
      </div>
    </>
  )
}

export default AllDataset