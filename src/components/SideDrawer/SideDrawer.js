import React from 'react'

import classes from './SideDrawer.module.scss'

const sideDrawer = props => {
    
    // let drawerClasses = `${classes.SideDrawer}`
    // if (props.show) {
    //     drawerClasses =  `${classes.SideDrawer} ${classes.open}`
    // }

    return (
        <nav className={`${classes.SideDrawer} ${props.show ? classes.open : ""}`}>
        {/* <nav className={drawerClasses}> */}
            <ul>
                <li><a href='/'>Quiénes somos</a></li>
                <li><a href='/'>Tienda</a></li>
                <li><a href='/'>Japamalas</a></li>
                <li><a href='/'>Kokedamas</a></li>
                <li><a href='/'>Blog</a></li>
            </ul>
        </nav>
    );
}

export default sideDrawer;