import React from 'react'
import PropTypes from 'prop-types'
import PostHeader from './PostHeader'
import CommentSection from '../CommentSection/CommentSection'

const Post = props => {
    // console.log(props)
    return (
        <div>
            <PostHeader username={props.post.username} thumbnailUrl={props.post.thumbnailUrl} />
            <img src={props.post.imageUrl} alt="post-img" />
            <CommentSection comments={props.post.comments} />
        </div>
    )
}
Post.propTypes = {
    imageUrl: PropTypes.string
}
export default Post;