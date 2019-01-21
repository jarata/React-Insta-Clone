import React from 'react'
import PostHeader from './PostHeader'
import Post from './Post'
import Comment from '../CommentSection/Comment'

const PostContainer = props => {
    console.log(props)
    return (
        <div>
            {
                props.postData.map(post => {
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

export default PostContainer;