import React from 'react';
import classes from './mobile.module.css';
import Header from '../header';
export const menu = (props) => {

    return(
        <div className={classes.toggler}>
            <div className={classes.toggler} onClick = {props.click}>
                <i className="fas fa-bars"></i>
            </div>
            <div className={classes.menu}>
                {props.showMenu 
                ? <Header menuClass={'mobileMenuClass'}/>
                : null}
            </div>
        </div>
    );
}

export default menu;