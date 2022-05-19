import React from 'react'
import { Navigate } from "react-router-dom";

import './style.css'

function Details(props) {

    const [goToHome, setGoToHome] = React.useState(false);

    if (goToHome) {
        return <Navigate to="/brewery-details" />;
      }

    return (
        <div className="brewery-box">
            <div className="brewery-data" onClick={() => setGoToHome(true)} >
            <div className="container-info">
                    <h2>{props.name}</h2>
                    <p>{props.street}</p>
                    <span>{props.city}</span> <span>{props.state}</span> <span>- {props.postal_code}</span>
                    <p>{props.country}</p>
                    <hr />
                </div>
                <button className="brewery-type" >{props.type}</button>
            </div>
        </div>
    );
}

export default Details;