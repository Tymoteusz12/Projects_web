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
                    <a href="" target="blank"><i className="fas fa-user-tie"></i></a>
                    <a href="https://github.com/Tymoteusz12" target="blank"><i className="fab fa-github-square"></i></a>
                </div>
                <h4>Copyright (c) {this.state.currentYear} Tymoteusz Jagiełło</h4>
            </div>
        );
    };
}

export default Footer;