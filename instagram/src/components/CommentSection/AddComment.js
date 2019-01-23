import React from 'react'
import PropTypes from 'prop-types'

const AddComment = props => {
    return (
        <div>
            <input type="text" value={props.newComment} placeholder="Add new comment..." onChange={props.handleChange}/>
            <i className="fas fa-ellipsis-h" onClick={props.addComment}></i>
        </div>
    )
}

export default AddComment;