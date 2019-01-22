import React from 'react'
import PostHeader from './PostHeader'
import Post from './Post'
import Comment from '../CommentSection/Comment'
import PropTypes from 'prop-types'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

const PostContainer = props => {
    // console.log(props)
    return (
        <div>
            {
                props.postData.map(post => {
                    // console.log(post)
                    return (
                        <Card>
                            <PostHeader username={post.username} thumbnailUrl={post.thumbnailUrl} />
                            <Post imageUrl={post.imageUrl} />
                            <Comment likes={post.likes} comments={post.comments} />
                        </Card>
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