import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

function Details(props) {

    return (
        <div className="brewery-box">
            <div className="brewery-data">
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