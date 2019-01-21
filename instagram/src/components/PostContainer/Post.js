import React from 'react'

const Post = props => {
    console.log(props)
    return (
        <div>
            <img src={props.imageUrl} alt="post-img" />
        </div>
    )
}

export default Post;