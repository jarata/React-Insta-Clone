import React from 'react'
import SearchBarStyles from './SearchBarStyles.css'

const SearchBar = () => {
    return (
        <div className="searchbar-container">
            <div className="logo">
                <i className="fab fa-instagram"></i>
                <h1>Instagram</h1>
            </div>
            <div>
                <input type="text" placeholder="Search" />
            </div>
            <div className="settings-container">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    )
}

export default SearchBar