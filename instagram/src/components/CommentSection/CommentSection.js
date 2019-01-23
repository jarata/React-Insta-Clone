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
            likes: props.likes
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
    render() {
        return (
            <div>
                <Likes likes={this.state.likes} />
                <Comment comments={this.state.comments} likeIncrement={this.likeIncrement}/>
            </div>
        )
    }
}
export default CommentSection;