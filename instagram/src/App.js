import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'

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
            postData: dummyData
        }
    }
    render() {
        return (
            <div className='App'>
            </div>
        )
    }
}

export default App;
