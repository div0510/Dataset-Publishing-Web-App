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
        top: '15%',
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
        filter: 'blur(0.5px)',
        // border: '3px solid black',
        height: '50vh',
        objectFit: 'cover'
    }
}


const DatasetDetails = () => {
    const [count, setCount] = useState(0);
    const [upvote, setUpvote] = useState(0);
    const [downvote, setDownvote] = useState(0)
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
        setUpvote(details.upvote);
        setDownvote(details.downvote);
        setCount(count + 1);
    }

    const showDetails = () => {
        return (
            <div className="container py-2">
                <div className="col-md">
                    <div className="card">
                        <img src={url + datasetDetails.thumbnail} alt="thumbnail" width="100%" style={styles.image} />
                        <h2 style={styles.heading}>{datasetDetails.title}</h2>

                        <div className="col-md  m-4 ">
                            <div className="container p-3">
                                <h4>Description:-&nbsp;{datasetDetails.description}</h4>
                                {/* <p className='m-0'>Uploaded By: {datasetDetails.createdBy.username}</p> */}
                                {/* {console.log(datasetDetails)} */}
                                <p>Uploaded At: {new Date(datasetDetails.createdAt).toLocaleDateString()}</p>
                                <div className="container d-flex m-0 justify-content-sm-evenly" style={{width:'35%'}}>
                                    <a
                                        className="btn text-white"
                                        style={{ backgroundColor: "#159a3f" }}
                                        href="#!"
                                        role="button"
                                        onClick={upvoteBtn}
                                    >
                                        <i className="fas fa-angle-double-up fs-6"></i>
                                        <span className="badge bg-danger ms-3 fs-6">{upvote}</span>
                                    </a>
                                    <a
                                        className="btn text-white bg-danger"
                                        
                                        href="#!"
                                        role="button"
                                        onClick={downvoteBtn}
                                    >
                                        <i className="fas fa-angle-double-down fs-6"></i>
                                        <span style={{ backgroundColor: "#159a3f" }} className="badge  ms-3 fs-6">{downvote}</span>
                                    </a>
                                </div>
                            </div>
                            <div className="container d-flex p-3">
                                <h5>File to Download  <i class="fas fa-hand-point-right    "></i>
                                    <a href={url + datasetDetails.file}>&nbsp; &nbsp;Click here</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const upvoteBtn = async () => {
        const response = await fetch('http://localhost:5005/dataset/upvote/'+id,{
            method: 'post',
            body: JSON.stringify({upvoteBtn: upvote+1}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        setUpvote(upvote+1);
        if(response.status === 200)
        {
            console.log('successs upvote',upvote);
        }
        else{
            console.log('error in upvote');
        }
    }
    const downvoteBtn = async () => {
        const response = await fetch('http://localhost:5005/dataset/downvote/'+id,{
                method: 'post',
                body: JSON.stringify({downvoteBtn: downvote-1}),
                headers:{
                    'Content-Type': 'application/json'
                }
        })

        setDownvote(downvote - 1);
        if(response.status === 200){
            console.log("Downvote"+downvote);
        }else{
            console.log("Downvote Error");
        }
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