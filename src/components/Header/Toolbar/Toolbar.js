import React from 'react';

import classes from './Toolbar.module.scss'
import DrawerToggleButton from '../../SideDrawer/DrawerToggleButton'
import Logo from './Logo PNG_Negro.png'

const toolbar = (props) => (
    <div className={classes.Toolbar}>
        <DrawerToggleButton click={props.click}/>
        <h1><a href='/' ><img src={Logo} className={classes.Toolbar_Logo}/></a></h1>
        <div>★ ❤ ♫</div>
    </div>
)

export default toolbar;