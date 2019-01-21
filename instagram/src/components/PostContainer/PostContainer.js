import React from 'react'
import PostHeader from './PostHeader'
import Post from './Post'

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
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostContainer;