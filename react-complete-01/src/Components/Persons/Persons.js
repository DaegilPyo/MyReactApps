import Person from "./Person/Person"
import React, { PureComponent } from 'react';
class Persons extends PureComponent {
    //componenet life cycle hooks
    constructor(props) {
        super(props);
        console.log('[Persons.js] constructor');
    }
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     return nextProps.persons === this.props.persons || (nextProps.onChange !== this.props.onChange || (nextProps.onClick !== this.props.onClick));
    //     // return true;
    // }
    getSnapshotBeforeUpdate(prevProprs, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        console.log(`Prev Value : ${prevProprs.persons[0].name}`);
        return { message: 'Snapshot!' };
    }
    componentDidUpdate(prevProprs, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);

    }
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }
    //componenet life cycle hooks
    render() {
        console.log(this.props.authenticated);

        console.log('[Persons.js] rendering...');
        return (
            this.props.isPressed ? this.props.persons.map((person, index) => {
                return (
                    <Person key={person.id} name={person.name}
                        age={person.age} onClick={() => this.props.onClick(index)}
                        onChange={(event) => this.props.onChange(event, person.id)}
                    />
                )
            }) : null
        );
    }
}

export default Persons;