import React from 'react';
import PropTypes from 'prop-types';
import Likes from './Likes'
import AddComment from './AddComment'
import Comment from './Comment'
import styled from 'styled-components'

const CommentContainer = styled.div`
  padding: 10px;
`

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            likes: props.likes,
            newComment: ''
        }
    }
    likeIncrement = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes })
    }
    componentDidMount() {
        const id = this.props.postId;
        if (localStorage.getItem(id)) {
            this.setState({
                comments: JSON.parse(localStorage.getItem(this.props.postId))
            });
        } else {
            this.setComments();
        }
    }
    setComments = () => {
        localStorage.setItem(
            this.props.postId,
            JSON.stringify(this.state.comments)
        );
    };
    addComment = event => {
        event.preventDefault();
        const newComment = { username: 'Justin', text: this.state.newComment }
        let comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({ comments, newComment: '' });
        setTimeout(() => {
            this.setComments();
        }, 500);
    }
    handleChange = event => {
        this.setState({ newComment: event.target.value })
    }
    render() {
        return (
            <CommentContainer>
                <Likes likes={this.state.likes} likeIncrement={this.likeIncrement} />
                <Comment comments={this.state.comments} />
                <AddComment handleChange={this.handleChange} addComment={this.addComment} newComment={this.newComment} />
            </CommentContainer>
        )
    }
}
export default CommentSection;