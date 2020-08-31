import React from 'react';
import {CSSTransition} from 'react-transition-group';
import Header from '../../../containers/Navigation/header';
import {menuToggler} from '../../../shared/transitionObj';

const menu = (props) => {
    const timeout = {
        enter: 0,
        exit: 0
    }

    return(
        <CSSTransition in={props.showMobileMenu} 
            classNames={menuToggler}
            timeout={timeout}>
                <Header menuClass={'mobileMenuClass'}/>
        </CSSTransition>
    );
}

export default menu;