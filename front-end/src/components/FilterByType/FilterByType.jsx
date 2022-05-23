import React from 'react';

import './style.css'

function FilterByType() {
    
    return (
        <>
            <div className="filter-type">
                <label>Filter:</label>
                <select className='filter-dropdown'>
                    <option value="type">micro</option>
                    <option value="type">nano</option>
                    <option value="type">regional</option>
                    <option value="type">brewpub</option>
                    <option value="type">large</option>
                    <option value="type">planning</option>
                    <option value="type">bar</option>
                    <option value="type">contract</option>
                    <option value="type">proprietor</option>
                    <option value="type">closed</option>
                </select>
            </div>
        </>
    );
}

export default FilterByType;