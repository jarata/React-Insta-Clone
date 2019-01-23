import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postData: []
        };
    }
    componentDidMount() {
        this.setState({ postData: dummyData })
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
        // console.log(event.target.name)
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

export default App;
