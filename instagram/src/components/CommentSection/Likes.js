import React from 'react'
import styled from 'styled-components'

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70px;
    margin-bottom: 5px;
    font-size: 25px;
`
const LikesCounter = styled.div`
    display: flex;
    font-size: 0.9rem;
    font-weight: bold;
`
function Likes(props) {
    console.log(props)
    return (
        <div>
            <ButtonsContainer>
                <i className="far fa-heart" onClick={props.likeIncrement}></i>
                <i className="far fa-comment"></i>
            </ButtonsContainer>
            <LikesCounter>
                {props.likes} likes
            </LikesCounter>
        </div>
    )
}

export default Likes;