import React from 'react';
import PropTypes from 'prop-types';
import Likes from './Likes'
import AddComment from './AddComment'
import Comment from './Comment'

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            comments: props.comments
        }
    }
    // likeIncrement = (banana) => {
    //     console.log(banana)
    //     this.setState(prevState => ({ likes: banana + 1 }))
    // }
    render() {
        return (
            <div>
                {/*<Likes />*/}
                {
                    this.state.comments.map(comment => {
                        return <Comment key={comment} comment={comment} />
                    })
                }
                {/*<AddComment />*/}
            </div>
        )
    }
}
export default CommentSection;