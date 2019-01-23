import React from 'react'
import PostHeader from './PostHeader'
import Post from './Post'
import PropTypes from 'prop-types'

const PostContainer = props => {
    // console.log(props)
    return (
        <div>
            {
                props.postData.map(post => {
                    return <Post key={post.username} post={post} />
                })
            }
            {/*{*/}
                {/*props.postData.map(post => {*/}
                    {/*// console.log(post)*/}
                    {/*return (*/}
                        {/*<Card>*/}
                            {/*<Post thumbnailUrl={post.thumbnailUrl} imageUrl={post.imageUrl} username={post.username} />*/}
                            {/*<CommentSection likeIncrement={props.likeIncrement} comments={post.comments} likes={post.likes} />*/}
                        {/*</Card>*/}
                    {/*)*/}
                {/*})*/}
            {/*}*/}
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