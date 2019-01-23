import React from 'react'
import PropTypes from 'prop-types'

const AddComment = () => {
    return (
        <div>
            <input type="text" placeholder="Add new comment..." />
            <i className="fas fa-ellipsis-h"></i>
        </div>
    )
}

export default AddComment;