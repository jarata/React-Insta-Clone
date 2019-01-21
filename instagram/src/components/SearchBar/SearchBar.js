import React from 'react'

const SearchBar = () => {
    return (
        <div>
            <div>
                <i className="fab fa-instagram"></i>
                <h1>Instagram</h1>
            </div>
            <div>
                <input type="text" placeholder="Search" />
            </div>
            <div>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    )
}

export default SearchBar