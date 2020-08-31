import React from 'react';
import classes from './mobile.module.css';
import {CSSTransition} from 'react-transition-group';
import {opacityToggler} from '../../../shared/transitionObj';

const menuToggler = (props) => {
    const timeout = {
        enter: 800,
        exit: 0
    }

    return(
        <CSSTransition in={props.toggleMenuButton} 
            classNames={opacityToggler}
            timeout={timeout}>
                <div className={classes.toggler} onClick = {props.click}>
                    <i className="fas fa-bars"></i>
                </div>
        </CSSTransition>
    );
}

export default menuToggler;