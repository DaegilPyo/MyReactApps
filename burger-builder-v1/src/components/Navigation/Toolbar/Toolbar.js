import React from 'react';
import CustomLogo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle onClick={props.onClick} />
        <CustomLogo height="80%" />
        <nav className={classes.DeskTopOnly}>
            <NavigationItems />
        </nav>
    </header>
)
export default toolbar