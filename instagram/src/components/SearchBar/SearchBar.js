import React from 'react'
import SearchBarStyles from './SearchBarStyles.css'
import styled from 'styled-components'

const SearchBarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid lightgray;
    align-items: center;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    font-size: 50px;
    border: 1px solid red;
`
const Bar = styled.div`
    border: 1px solid black;
    height: 50px;
    margin: 20px;
`
const SearchBar = () => {
    return (
        <SearchBarContainer>
            <Logo>
                <i className="fab fa-instagram"></i>
                <Bar></Bar>
                Instagram
            </Logo>
            <div>
                <input type="text" placeholder="Search" />
            </div>
            <div className="settings-container">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </SearchBarContainer>
    )
}

export default SearchBar