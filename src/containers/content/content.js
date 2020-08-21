import React, {Component} from 'react';
import classes from './content.module.css';
import Header from './header/header';
class Content extends Component{
    render(){
        return(
            <div className={classes.Content}>  
                <Header/>
                <div className={classes.Quote}>
                    <h5>“Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live”
                        ― John Woods</h5>
                    <h6>Let's explore my programming skills!</h6>
                </div>
                <div className={classes.Outer}>
                    <div className={classes.Explore}>
                        <p>Explore</p>
                    </div>
                </div>
            </div>
        );
    };
}

export default Content;