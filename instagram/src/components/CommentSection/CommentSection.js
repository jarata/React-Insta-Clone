import React from 'react';
import PropTypes from 'prop-types';
import Likes from './Likes'
import AddComment from './AddComment'
import Comment from './Comment'

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments

        }
    }
    // likeIncrement = (banana) => {
    //     console.log(banana)
    //     this.setState(prevState => ({ likes: banana + 1 }))
    // }
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
                <Comment comments={this.state.comments} />
            </div>
        )
    }
}
export default CommentSection;