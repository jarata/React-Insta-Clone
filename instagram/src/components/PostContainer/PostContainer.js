import React from 'react'
import PostHeader from './PostHeader'
import Post from './Post'
import Comment from '../CommentSection/Comment'
import PropTypes from 'prop-types'

const PostContainer = props => {
    // console.log(props)
    return (
        <div>
            {
                props.postData.map(post => {
                    // console.log(post)
                    return (
                        <div>
                            <PostHeader username={post.username} thumbnailUrl={post.thumbnailUrl} />
                            <Post imageUrl={post.imageUrl} />
                            <Comment comments={post.comments} />
                        </div>
                    )
                })
            }
        </div>
    )
}
PostContainer.propTypes = {
    postData: PropTypes.array,
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    comments: PropTypes.array
}
export default PostContainer;