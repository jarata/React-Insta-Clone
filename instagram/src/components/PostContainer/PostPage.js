import React from 'react'
import dummyData from '../../dummy-data'
import PostContainer from './PostContainer'
import SearchBar from '../SearchBar/SearchBar'

class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postData: []
        };
    }
    componentDidMount() {
        this.setState({ postData: dummyData })
    }
    render() {
        return (
            <div className='App'>
                <SearchBar />
                <PostContainer postData={this.state.postData} />
            </div>
        )
    }
}
export default PostPage;