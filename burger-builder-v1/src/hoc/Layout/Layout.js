import Aux from '../Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { Component } from 'react';

class Layout extends Component {

    state = {
        showSideDrawer: false,
    }

    sideDrawerHandler = () =>
        this.setState({
            showSideDrawer: !this.state.showSideDrawer,
        });


    render() {
        return (
            <Aux>
                <Toolbar onClick={this.sideDrawerHandler} />
                <SideDrawer show={this.state.showSideDrawer} sideDrawerHandler={this.sideDrawerHandler}></SideDrawer>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    };
}



export default Layout;