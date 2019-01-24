import React from 'react';
import PropTypes from 'prop-types';
import Likes from './Likes'
import AddComment from './AddComment'
import Comment from './Comment'
import styled from 'styled-components'

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
    // Mounting comments fom state
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
    // change handler for adding new comments
    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    // this addComment function made more sense to me after I saw it done in peer code review
    addComment = event => {
        event.preventDefault();
        const newComment = {
            text: this.state.newComment,
            username: 'justin'
        }
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({
            comments,
            newComment: ''
        })
    }
    // old change handler that went with the other add Comment function below

    // handleChange = event => {
    //     this.setState({ newComment: event.target.value })
    // }

    // This addComment code was used with PM problem solving code. also reflects solution code, but this is still hard
    // for me to understand.

    // addComment = event => {
    //     event.preventDefault();
    //     const newComment = { username: 'Justin', text: this.state.newComment }
    //     let comments = this.state.comments.slice();
    //     comments.push(newComment);
    //     this.setState({ comments, newComment: '' });
    //     setTimeout(() => {
    //         this.setComments();
    //     }, 500);
    // }
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

const CommentContainer = styled.div`
  border: 1px solid red;
`