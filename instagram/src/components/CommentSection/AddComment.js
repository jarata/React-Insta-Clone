import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const AddCommentContainer = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const CommentInput = styled.input`
    border: none;
`
const AddComment = props => {
    return (
        <AddCommentContainer onSubmit={props.addComment}>
            <CommentInput type="text" value={props.newComment} placeholder="Add new comment..." onChange={props.handleChange}/>
            <i className="fas fa-ellipsis-h"></i>
        </AddCommentContainer>
    )
}

export default AddComment;