import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import TextDisplay from './TextDisplay/TextDisplay';
class App extends Component {
  state = {
    name: ''
  }
  setText = (event) => {
    this.setState({
      name: event.target.value
    });
  }
  deleteText = (index) => {
    const text = this.state.name.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({
      name: updatedText
    });
  }

  render() {
    const charList = this.state.name.split('').map((ch,index) => {
      return <TextDisplay name={ch} key={index} delete={()=>this.deleteText(index)} />
    });
    return (
      <div className="App">
        <input type="text" onChange={this.setText} />
        <p>{this.state.name.length}</p>
        <Validation name={this.state.name} />
        {charList}
      </div>
    );
  }
}

export default App;
