import React from 'react'
import Likes from './Likes'

const Comment = props => {
    // console.log(props)
    return (
        <div>
            <div>
                <Likes likes={props.likes} />
            </div>
            {
                props.comments.map(comment => {
                    // console.log(comment);
                    return (
                        <div>
                            <p>{comment.username}</p>
                            <p>{comment.text}</p>
                        </div>
                    )
                })
            }
            <div>
                <input type="text" placeholder="Add new comment..." />
                <i className="fas fa-ellipsis-h"></i>
            </div>
        </div>
    )
}

export default Comment