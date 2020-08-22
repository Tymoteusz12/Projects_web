import React, {Component} from 'react';
import classes from './footer.module.css';
class Footer extends Component{

    state = {
        currentYear: null
    }
    componentDidMount(){
        this.setState({
            currentYear: new Date().getFullYear()
        })
    }

    render(){
        return(
            <div className={classes.Footer}>
                <div className={classes.Icons}>
                    <i className="fas fa-user-tie"></i>
                    <i className="fab fa-github-square"></i>
                </div>
                <h4>Copyright (c) {this.state.currentYear} Tymoteusz Jagiełło</h4>
            </div>
        );
    };
}

export default Footer;