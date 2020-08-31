import React from 'react';
import {CSSTransition} from 'react-transition-group';
import Header from '../../../containers/header/header';
import {menuToggler} from '../../../shared/transitionObj';

const menu = (props) => {
    const timeout = {
        enter: 800,
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