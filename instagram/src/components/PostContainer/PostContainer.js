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
                            <Post thumbnailUrl={post.thumbnailUrl} imageUrl={post.imageUrl} username={props.username} />
                            <Comment likeIncrement={props.likeIncrement} comments={post.comments} />
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