import React from "react";

import './style.css';

const Pagination = ({ pages, setCurrentPage }) => {
    return (
        <div>
            {Array.from(Array(pages), (item, index) => {
                return <button className="pagination-btn"value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>
                    {index + 1}</button>
            })}
        </div>
    );
}

export default Pagination