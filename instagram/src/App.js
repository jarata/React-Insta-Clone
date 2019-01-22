import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postData: [],
            likes: 0
        };
    }
    componentDidMount() {
        this.setState({ postData: dummyData })
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
        // console.log(event.target.name)
    }
    likeIncrement = (banana) => {
        console.log(banana)
        this.setState(prevState => ({ likes: banana + 1 }))
    }
    render() {
        return (
            <div className='App'>
                <SearchBar />
                <PostContainer postData={this.state.postData} likeIncrement={this.likeIncrement} />
            </div>
        )
    }
}

export default App;
