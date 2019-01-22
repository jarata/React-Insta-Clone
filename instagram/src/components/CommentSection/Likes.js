import React from 'react'

function Likes(props) {
    return (
        <div>
            <i className="far fa-heart" onClick={() => props.likeIncrement(props.likes)}></i>
            <i className="far fa-comment"></i>
            {props.likes}
        </div>
    )
}

export default Likes;