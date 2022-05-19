import React from 'react'

import './style.css'

function CardDetails(props) {

    return (
        <div className="brewery-card-details">
            <div className="brewery-box-detail">
            <a href="/brewery-home" class="previous round">&#8249; Back</a>
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