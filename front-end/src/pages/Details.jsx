import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header';
import CardDetails from '../components/CardDetails/CardDetails'

import api from '../api';
import Footer from '../components/Footer/Footer';
import { useParams } from 'react-router-dom';

function Details() {

    const [brewery, setBrewery] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function getBreweryById(){
            const resposta = await api.get(`/${id}`);
            setBrewery(resposta.data);
        }
        if(id){
            getBreweryById();
        }
    },[])

    return (
        <>
            <Header />
            <CardDetails
                id={brewery.id}
                type={brewery.brewery_type}
                name={brewery.name}
                street={brewery.street}
                city={brewery.city}
                state={brewery.state}
                postal_code={brewery.postal_code}
                country={brewery.country}
                website={brewery.website_url}
                phone={brewery.phone}
            />
            <Footer />
        </>
    );
}
export default Details;