import React from 'react'
import { NavLink } from 'react-router-dom'

const DatumWithAddBtn = () => {
    return (
        <div
            className="p-5 text-center bg-image"
            style={{
                backgroundImage:
                    'url("../Images/header.jpg")',
                height: '90vh'
            }}
        >
            <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" , height: '90vh' }}>
                <div className="d-flex justify-content-center align-items-center p-4 h-100">
                    <div className="text-white p-3">
                        <h1 className="mb-3">DATUM</h1>
                        <h4 className="mb-3">Let Play with It</h4>
                        <NavLink className="btn btn-outline-light btn-lg" to='adddataset' role="button">
                            <i class="fas fa-plus"></i> New Datum
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DatumWithAddBtn