import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {

  state = {
    userName: "Hello",
    assignmnetText: "Hello, World! It my first React Web application!"
  }

  inPutChangeHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  }
  render() {
    return (
      <div className="App">
        <ol>
          <li>Assignmnet 01</li>
        </ol>

        <UserInput userName={this.state.userName}
          onChanged={this.inPutChangeHandler} />

        <UserOutput userName={this.state.userName}
          assignmnetText={this.state.assignmnetText}
        />


      </div>
    );
  }
}

export default App;
