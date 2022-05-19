import React from 'react'

import './style.css'

import { Navigate, useNavigate } from "react-router-dom";


function CardDetails(props) {

    const [goToHome, setGoToHome] = React.useState(false);

    if (goToHome) {
        return <Navigate to="/brewery-home" />;
      }

    return (
        <div className="brewery-card-details">
            <div className="brewery-box-detail">
            <a  onClick={() => setGoToHome(true)} className="previous">&#8249; Back</a>
                <div className="brewery-data-detail">
                    <div className="container-detail">
                        <h2>{props.name}</h2>
                        <p>Type: {props.type}</p>
                        <span>Street: {props.street}</span>
                        <br />
                        <span>City: {props.city}</span>
                        <br />
                        <span>State: {props.state}</span>
                        <br />
                        <span>Postal code: {props.postal_code}</span>
                        <br />
                        <span>Country: {props.country}</span>
                        <br />
                        <span>Website: {props.website}</span>
                        <br />
                        <span>Phone: {props.phone}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardDetails;