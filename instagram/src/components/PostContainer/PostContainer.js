import React from 'react'
import PostHeader from './PostHeader'
import Post from './Post'
import PropTypes from 'prop-types'

const PostContainer = props => {
    return (
        <div>
            {
                props.postData.map(post => {
                   return <Post key={post.username} post={post} />
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