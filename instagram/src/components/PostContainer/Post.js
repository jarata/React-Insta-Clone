import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import PostHeader from './PostHeader'

const Post = props => {
    // console.log(props)
    return (
        <div>
            <PostHeader username={props.username} thumbnailUrl={props.thumbnailUrl} />
            <img src={props.imageUrl} alt="post-img" />
        </div>
    )
}
Post.propTypes = {
    imageUrl: PropTypes.string
}
export default Post;