import React from 'react'

const PostContainer = props => {
    console.log(props)
    return (
        <div>
            {
                props.postData.map(post => {
                    return (
                        <div>
                            <PostHeader username={props.username} thumbnailUrl={props.thumbnailUrl} />
                            <Post />
                        </div>

                    )
                })
            }
        </div>
    )
}

export default PostContainer;