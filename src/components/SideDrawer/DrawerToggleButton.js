import React from 'react'
import classes from './DrawerToggleButton.module.css';

const drawerToggleButton = props => (
    <button className={classes.Button} onClick={props.click}>
        <div className={classes.Button_line}/>
        <div className={classes.Button_line}/>
        <div className={classes.Button_line}/>
    </button>
);

export default drawerToggleButton;