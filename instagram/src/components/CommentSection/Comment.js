import React from 'react'

const Comment = props => {
    // console.log(props)
    return (
        <div>
            <div>
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
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
                <input type="text" placeholder="add new comment" />
                <i className="fas fa-ellipsis-h"></i>
            </div>
        </div>
    )
}

export default Comment