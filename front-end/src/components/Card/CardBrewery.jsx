import React, { useState } from 'react'
import { Navigate } from "react-router-dom";
import api from '../../api';
import DetailsPage from '../../pages/Details';

import './style.css'

function Details(props) {

    const [goToHome, setGoToHome] = useState(false);
    const [brewery, setBrewery] = useState({});

    if (goToHome) {
        return <Navigate to={`/brewery-details/${props.id}`} element={DetailsPage} />;
      }

     function renderElement(){
        if(props.type === 'micro'){
            return <button style={{background: "#03bb85"}}className="brewery-type" id="brewery-type-btn" >{props.type}</button>

        } else if (props.type === 'contract') {
            return <button style={{background: "black"}}className="brewery-type" id="brewery-type-btn" >{props.type}</button>
        } else if (props.type === 'brewpub') {
            return <button style={{background: "yellow"}}className="brewery-type" id="brewery-type-btn" >{props.type}</button>
        } else if (props.type === 'regional') {
            return <button style={{background: "blue"}}className="brewery-type" id="brewery-type-btn" >{props.type}</button>
        }  else if (props.type === 'planning') {
            return <button style={{background: "grey"}}className="brewery-type" id="brewery-type-btn" >{props.type}</button>
        }
        return null;
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
            if(resposta.status === 200){
                console.log("Encontrada.");
            }else if(resposta.status === 404){
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
                {renderElement()}
                                    
            </div>
        </div>
    );
}

export default Details;