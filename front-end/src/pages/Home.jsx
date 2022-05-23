import React, { useEffect, useState } from 'react'
import BreweryCard from '../components/Card/CardBrewery';
import FilterByType from '../components/FilterByType/FilterByType';
import Header from '../components/Header/Header';

import api from '../api';
import Footer from '../components/Footer/Footer';

function Home() {
    const [breweries, setBreweries] = useState([]);

    useEffect(() => {
        async function fetchBreweries() {
            const resposta = await api.get("");
            setBreweries(resposta.data);
        }
        fetchBreweries();
    }, []);
    
    return (
        <>
            <Header />
            <FilterByType />
            <div className="brewery-cards">
                {breweries.map((brewery) => (
                    <BreweryCard
                        id={brewery.id}
                        name={brewery.name}
                        street={brewery.street}
                        city={brewery.city}
                        state={brewery.state}
                        postal_code={brewery.postal_code}
                        country={brewery.country}
                        type={brewery.brewery_type}
                    />
                ))}
            </div>
            <Footer/>
        </>
    );
}
export default Home;