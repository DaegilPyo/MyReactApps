import { Component } from 'react';
// import { useState } from 'react';
import './App.css';
import Cockpit from './Components/Cockpit/Cockpit';
// import Person from './Components/Persons/Person/Person';
import Persons from './Components/Persons/Persons';
// import styled from 'styled-components'
// import Radium, { StyleRoot } from 'radium';
import withClass from './hoc/withClass';
import Aux from './hoc/Aux';
import classes from './Test.module.css';
import AuthContext from './context/authe-context';

// const StyledButton = styled.button`
//   width: 10%;
//   color: white;
//   background-color: ${props => props.isPressed ? "red" : "green"} ;
//   font: inherit;
//   border: 1x solid ${props => props.isPressed ? "red" : "green"};
//   padding: 8px;
//   cursor: pointer;
//   &:hover {
//     background-color: ${props => props.isPressed ? "salmon" : "lightgreen"} ;
//     color: black;
//   }
// `;
class App extends Component {
  //componenet life cycle hooks
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { name: 'Daegil', age: 28, id: 'qwewq31' },
      { name: 'Emi', age: 32, id: 'qwew123qa53sd31' },
      { name: 'Hazel', age: 22, id: 'qwe123wq3154231' },
    ],
    isPressed: false,
    isCockput: true,
    changeCounter: 0,
    authenticated: false,
  };
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(prevProprs, prevState) {
    console.log('[App.js] getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }
  //componenet life cycle hooks


  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        changeCounter: prevState.changeCounter + 1,
        persons: persons
      }
    });
  }
  managePeople = () => {
    const isPressed = this.state.isPressed;
    this.setState(
      {
        isPressed: !isPressed,
      }
    );
  }
  deletePersonHander = (index) => {
    const persons = [...this.state.persons];
    // const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }
  toggleCockpit = () => {
    let isCockput = !this.state.isCockput;
    this.setState({
      isCockput: isCockput
    });
  }
  loginHandler = () => {
    this.setState({
      authenticated: !this.state.authenticated,
    });

    console.log(this.state.authenticated);

  }
  render() {
    console.log('[App.js] render');
    // let classes = ['App', 'AppModi'].join(' ');
    let classes = ['Default'];
    if (this.state.persons.length <= 2) {
      classes.push('App');
    }
    if (this.state.persons.length <= 1) {
      classes.push('AppModi');
    }
    // let className = this.state.isPressed ? 'AppModi' : 'App';
    const style = {
      width: '10%',
      color: 'white',
      backgroundColor: this.state.isPressed ? 'red' : 'green',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    // let persons = null;
    if (this.state.isPressed) {
      // persons = (<div>
      //   {this.state.persons.map((person, index) => {
      //     return (<Person key={person.id} name={person.name} age={person.age} onClick={() => this.deletePersonHander(index)} onChange={(event) => this.nameChangeHandler(event, person.id)} />)
      //   })}
      // </div>);
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      }
      // className = 'AppModi';
    }
    console.log(this.state.changeCounter);
    return (
      <AuthContext.Provider
        value={{ authenticated: this.state.authenticated, login: this.loginHandler }}
      >
        <Aux classes={classes.join(' ')}>
          <p>{this.state.changeCounter}</p>
          <button onClick={this.toggleCockpit}>Remove Cockpit</button>

          {this.state.isCockput ?
            <Cockpit
              persons={this.state.persons}
              title={this.props.appTitle}
              onClick={this.managePeople}
              isPressed={this.state.isPressed} />
            : null}

          <Persons
            persons={this.state.persons}
            onClick={this.deletePersonHander}
            onChange={this.nameChangeHandler}
            isPressed={this.state.isPressed} />
        </Aux>
      </AuthContext.Provider>

    );
    // return React.createElement('div', null,
    //   React.createElement('h1', { className: 'App' }, 'Hello World!'));
  }
}


// const App = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Daegil', age: 28 },
//       { name: 'Emi', age: 32 },
//       { name: 'Hazel', age: 22 },
//     ],
//   });
//   const [isPressedState, setIsPressedState] = useState({
//     isPressed: false,
//   });
//   const
//     switchNameHandler = () => {
//       let isp = !isPressedState.isPressed;
//       setIsPressedState({
//         isPressed: isp
//       });
//     }
//   return (
//     <div className="App">
//       <h1>
//         Hello world !
//       </h1>
//       <p>This is really working dude! </p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       {!isPressedState.isPressed ? null : <div>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//       </div>}
//     </div>
//   );
// }




// export default Radium(App);
export default withClass(App, classes.Default);
