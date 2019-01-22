import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

const PostHeader = props => {
    // console.log(props)
    return (
        <div>
            <img src={props.thumbnailUrl} alt="thumb-url" />
            <p>{props.username}</p>
        </div>
    )
}
PostHeader.propTypes = {
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string
}
export default PostHeader;