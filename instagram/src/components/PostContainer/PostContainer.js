import React from 'react'

const PostContainer = props => {
    console.log(props)
    return (
        <div>
            {
                props.postData.map(post => {
                    return (
                        <div>
                            <PostHeader />
                            <Post />
                        </div>

                    )
                })
            }
        </div>
    )
}

export default PostContainer;