import React from 'react';

import './style.css'

function FilterByType(props) {
    return (
        <>
            <div className="filter-type">
                <label>Filter:</label>
                <select className='filter-dropdown'>
                    <option value="micro">micro</option>
                    <option value="nano">nano</option>
                    <option value="regional">regional</option>
                    <option value="brewpub">brewpub</option>
                    <option value="large">large</option>
                    <option value="planning">planning</option>
                    <option value="bar">bar</option>
                    <option value="contract">contract</option>
                    <option value="proprietor">proprietor</option>
                    <option value="closed">closed</option>
                </select>
            </div>
        </>
    );
}

export default FilterByType;