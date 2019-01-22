import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postData: []
        };
    }
    componentDidMount() {
        console.log(this.state.postData)
        this.setState({ postData: dummyData })
    }
    likeIncrement = event => {
        event.preventDefault();
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
