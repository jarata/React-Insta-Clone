import React from 'react'
import PropTypes from 'prop-types'

const AddComment = props => {
    return (
        <form onSubmit={props.addComment}>
            <input type="text" value={props.newComment} placeholder="Add new comment..." onChange={props.handleChange}/>
            <i className="fas fa-ellipsis-h"></i>
        </form>
    )
}

export default AddComment;