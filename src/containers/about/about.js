import React, {Component} from 'react';
import classes from './about.module.css';
import ShortInfo from '../../components/about/short_info/about/short_info';
import Passion from '../../components/about/short_info/passion';
class About extends Component{

    componentDidMount(){
        window.scrollTo(0,0);
    }
    
    render(){
        return(
        <div className={classes.About + ' page'}>
            <ShortInfo/>
            <Passion/>
        </div>
        );
    };
}

export default About;