import React from 'react'
import PropTypes from 'prop-types'
import PostHeader from './PostHeader'
import CommentSection from '../CommentSection/CommentSection'
import styled, { css } from 'styled-components'

const PostCard = styled.div`
    border: 1px solid lightgrey;
    border-radius: 5px;
    width: 600px;
    margin: 0 auto;
`
const PostImg = styled.img`
    width: 100%;
    height: auto;
`
const Post = props => {
    return (
        <PostCard>
            <PostHeader username={props.post.username} thumbnailUrl={props.post.thumbnailUrl} />
            <PostImg src={props.post.imageUrl} alt="post-img" />
            <CommentSection postId={props.post.username} likes={props.post.likes} comments={props.post.comments} />
        </PostCard>
    )
}
Post.propTypes = {
    imageUrl: PropTypes.string
}
export default Post;