import React from 'react'
import styled from 'styled-components'

const UserCommentContainer = styled.div`
    display: flex;
`
const Username = styled.p`
    font-weight: bold;
    margin-right: 3px;
`
const Text = styled.p`
    font-size: 1.0rem; 
`
const Comment = props => {
    return (
        <div>
            {
                props.comments.map(comment => {
                    return (
                        <UserCommentContainer>
                            <Username>{comment.username}</Username>
                            <Text>{comment.text}</Text>
                        </UserCommentContainer>
                    )
                })
            }
        </div>
    )
}

export default Comment