import React, { useEffect, useState } from 'react'
import BreweryCard from '../components/Card/CardBrewery';
import FilterByType from '../components/FilterByType/FilterByType';
import Header from '../components/Header/Header';

import api from '../api';
import Footer from '../components/Footer/Footer';
import Pagination from '../components/Pagination/Pagination';
import { useNavigate } from "react-router-dom";

function Home() {
    const [breweries, setBreweries] = useState([]);
    const [itemPerPage, setItemPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(0);
    

    const pages = Math.ceil(breweries.length / itemPerPage);
    const startIndex = currentPage * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const currentItems = breweries.slice(startIndex, endIndex)

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
                {currentItems.map((brewery) => (
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
            <Pagination pages={pages} setCurrentPage={setCurrentPage}/>
            <Footer/>
        </>
    );
}
export default Home;