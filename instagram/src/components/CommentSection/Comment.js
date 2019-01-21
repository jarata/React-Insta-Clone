import React from 'react'

const Comment = props => {
    console.log(props)
    return (
        <div>
            {
                props.comments.map(comment => {
                    console.log(comment);
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