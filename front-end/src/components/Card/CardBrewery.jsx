import React, { useState } from 'react'
import { Navigate } from "react-router-dom";
import api from '../../api';
import Detalhe from '../../pages/Details';

import './style.css'

function Details(props) {

    const [goToHome, setGoToHome] = React.useState(false);
    const [brewery, setBrewery] = useState({});

    if (goToHome) {
        return <Navigate to={`/brewery-details/${props.id}`} element={Detalhe} />;
      }


    function putBreweryDetails(e){
        e.preventDefault();
        api.put(`/${brewery.id}`,{
            type: brewery.brewery_type,
            name: brewery.name,
            street: brewery.street,
            city:brewery.city,
            state:brewery.city,
            postal_code:brewery.postal_code,
            country:brewery.country,
            website:brewery.website_url,
            phone:brewery.phone
        }).then(resposta => {
            if(resposta.status == 200){
                console.log("Encontrada.");
            }else if(resposta.status == 404){
                console.log("Não encontramos.");
            }
        })

    }

    return (
        <div className="brewery-box">
            <div className="brewery-data" onClick={() => setGoToHome(true)} onSubmit={(e) => putBreweryDetails(e)} >
            <div className="container-info">
                    <h2>{props.name}</h2>
                    <p>{props.street}</p>
                    <span>{props.city}</span> <span>{props.state}</span> <span>- {props.postal_code}</span>
                    <p>{props.country}</p>
                    <p>{props.website}</p>
                    <p>{props.phone}</p>
                    <hr />
                </div>
                <button className="brewery-type" >{props.type}</button>
            </div>
        </div>
    );
}

export default Details;