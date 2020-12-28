import classes from './Person.module.css'
import React, { Component, Fragment } from 'react';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/authe-context'


// import Aux from '../../../hoc/Aux';
// import Radium from 'radium';
// import styled from 'styled-components'
// const StyleDiv = styled.div`
//     font-size: 10px;
//     padding: 30px;
//     color: blue;
//     width: 30%;
//     margin: 40px auto;
//     box-shadow: 0 2px 3px #ccc;
//     text-align: center;
//     @media (min-width:500px) {
//      width: 450px;
//         }`;
// const style = {
//     '@media (min-width : 100px)': {
//         width: '30%'
//     }
// };
class Person extends Component {
    //componenet life cycle hooks
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    static contextType = AuthContext;
    componentWillUnmount() {
        console.log('[Person.js] componentWillUnmount');
    }
    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }
    //componenet life cycle hooks
    render() {
        console.log('[Person.js] rendering...');
        // let className1 = [];
        // if (this.props.name.length > 4) {
        //     className1.push(classes.Person);
        // }
        // const rndNum = Math.random();
        // if (rndNum > 0.7) {
        //     throw new Error('You Fucked Up');
        // }
        // return [
        //     // <div className='Person'  >
        //     // <StyleDiv>
        //     // <div key="asd12" className={className1}>,
        //     < h2 key="as3d12"  > Hello my name is {this.props.name}, i am {this.props.age} years old!</h2 >,
        //     <p key="asd412" >{this.props.children}</p>,
        //     <input key="asd1422" type='text' onChange={this.props.onChange} value={this.props.name} ></input>,
        //     <button key="asd1122" onClick={this.props.onClick}>Delete</button>,
        //     // </div>
        //     // </StyleDiv>
        // ];
        return (
            // <AuthContext.Consumer>
            //     {(context) => <Fragment>
            //         {context.authenticated ? <p>"Authenticated"</p> : <p>"Unauthenticated"</p>}
            //         < h2 key="as3d12"  > Hello my name is {this.props.name}, i am {this.props.age} years old!</h2 >
            //         <p key="asd412" >{this.props.children}</p>
            //         <input ref={this.inputElementRef} key="asd1422" type='text' onChange={this.props.onChange} value={this.props.name} ></input>
            //         {/* <input ref={(inputEl) => { this.inputElement = inputEl; }} key="asd1422" type='text' onChange={this.props.onChange} value={this.props.name} ></input> */}
            //         <button key="asd1122" onClick={this.props.onClick}>Delete</button>
            //     </Fragment>}
            // </AuthContext.Consumer>
            <Fragment>
                {this.context.authenticated ? <p>"Authenticated"</p> : <p>"Unauthenticated"</p>}
                < h2 key="as3d12"  > Hello my name is {this.props.name}, i am {this.props.age} years old!</h2 >
                <p key="asd412" >{this.props.children}</p>
                <input ref={this.inputElementRef} key="asd1422" type='text' onChange={this.props.onChange} value={this.props.name} ></input>
                {/* <input ref={(inputEl) => { this.inputElement = inputEl; }} key="asd1422" type='text' onChange={this.props.onChange} value={this.props.name} ></input> */}
                <button key="asd1122" onClick={this.props.onClick}>Delete</button>
            </Fragment>
        );
    };
    ;
}
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    onChange: PropTypes.func,
    age: PropTypes.number,
};
// export default Radium(Person);
export default withClass(Person, classes.Person);