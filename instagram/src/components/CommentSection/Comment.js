import React from 'react'
import Likes from './Likes'

const Comment = props => {
    return (
        <div>
            {
                props.comments.map(comment => {
                    return (
                        <div>
                            <p>{comment.username}</p>
                            <p>{comment.text}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Comment