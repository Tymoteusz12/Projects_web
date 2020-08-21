import React, {Component} from 'react';
import classes from './header.module.css';
class Header extends Component{
    render(){
        return(
            <div className={classes.Header}>
                <ul>
                    <li>Home</li>
                    <li>Passion</li>
                    <li>Projects</li>
                    <li>Motivation</li>
                </ul>
            </div>
        );
    };
}

export default Header;