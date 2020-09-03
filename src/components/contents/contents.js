import React, { useState } from 'react';
import {CSSTransition} from 'react-transition-group';
import classes from './contents.module.css';
import {buttonChanger, slider } from '../../shared/transitionObj';
import { Link } from 'react-scroll';

const content = React.memo((props) => {

    const [active, toggleButton] = useState(false);

    function onClickHandler(){
        toggleButton((prevState) => !prevState);
    }

    function scrollTo(elem){
        window.scrollTo(0, (document.getElementById(elem).offsetTop));
    }
    
    return(
        <div className={classes.switch}>
            <CSSTransition 
                in={active}
                classNames={buttonChanger}
                timeout={{enter: 0, exit: 0}}>
            <div className={classes.toggler} onClick={onClickHandler}></div>
            </CSSTransition>
            <CSSTransition
                in={active}
                classNames={slider}
                timeout={{enter: 0, exit: 0}}>
                <div className = {classes.ul}>
                   <Link 
                    to={'Web_apps'} 
                    smooth={true} 
                    spy={true}
                    activeClass={classes['active']}
                    duration={600}>Website apps</Link>
                    <Link 
                    to={'Cpp'} 
                    smooth={true} 
                    spy={true}
                    activeClass={classes['active']}
                    duration={600}>Cpp repos</Link>
                    <Link 
                    to={'Python'} 
                    smooth={true} 
                    spy={true}
                    activeClass={classes['active']}
                    duration={600}>Python</Link>
                    <Link 
                    to={'Resources'}
                    smooth={true}
                    spy={true} 
                    activeClass={classes['active']}
                    duration={600}>Resources</Link>
                </div>
            </CSSTransition>
        </div>
        );
});


export default content;