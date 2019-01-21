import React from 'react'

const PostHeader = props => {
    console.log(props)
    return (
        <div>
            <img src={props.thumbnailUrl} alt="thumb-url" />
            <p>{props.username}</p>
        </div>
    )
}
export default PostHeader;