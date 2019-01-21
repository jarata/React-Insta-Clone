import React from 'react'
import PropTypes from 'prop-types'

const Post = props => {
    // console.log(props)
    return (
        <div>
            <img src={props.imageUrl} alt="post-img" />
        </div>
    )
}
Post.propTypes = {
    imageUrl: PropTypes.string
}
export default Post;