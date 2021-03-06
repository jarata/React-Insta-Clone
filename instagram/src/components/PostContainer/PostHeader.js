import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PostUsername = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
`
const PostThumb = styled.img`
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    width: 30px;
    height: 30px;
`
const PostUser = styled.div`
    align-items: center;
    font-weight: bold;
    font-size: 1.0rem;
    padding: 0px 10px;
`

const PostHeader = props => {
    // console.log(props)
    return (
        <PostUsername>
            <PostThumb src={props.thumbnailUrl} alt="thumb-url" />
            <PostUser>{props.username}</PostUser>
        </PostUsername>
    )
}
PostHeader.propTypes = {
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string
}
export default PostHeader;