import React, {Component} from 'react';
import classes from './header.module.css';
import {NavLink} from 'react-router-dom';
import '../../../shared/transition.css';
class Header extends Component{
    state = {
        navigation: ['Home', 'About', 'Projects', 'Gallery', 'Portfolio']
    }
    render(){
        return(
            <div className={classes.Header}>
                <ul>
                    {this.state.navigation.map( page => {
                        return (
                            <NavLink className = {classes.NavLink} 
                            key={page} to={"/" + page.toLowerCase()}
                            activeClassName={classes.active}>{page}</NavLink>
                        )
                    })}
                </ul>
            </div>
        );
    };
}

export default Header;