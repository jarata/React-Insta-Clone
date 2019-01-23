import React from 'react';
import PropTypes from 'prop-types';
import Likes from './Likes'
import AddComment from './AddComment'
import Comment from './Comment'

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
        console.log('likes working')
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
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
        // console.log(event.target.name)
    }
    addComment = event => {
        event.preventDefault();
        const newComment = { username: 'Justin', text: this.state.newComment }
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({ comments, newComment: '' });
        setTimeout(() => {
            this.setComments();
        }, 500);
    }
    render() {
        return (
            <div>
                <Likes likes={this.state.likes} likeIncrement={this.likeIncrement} />
                <Comment comments={this.state.comments} />
                <AddComment addComment={this.addComment} newComment={this.newComment} />
            </div>
        )
    }
}
export default CommentSection;