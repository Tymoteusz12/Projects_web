import React, {Component} from 'react';
import classes from './about.module.css';
import ShortInfo from '../../components/about/short_info/about/short_info';
import Passion from '../../components/about/short_info/passion';
import GoTo from '../../components/goToToggler/goTo';
class About extends Component{

    componentDidMount(){
        window.scrollTo(0,0);
    }
    
    render(){
        return(
        <div className={classes.About + ' page'}>
            <ShortInfo/>
            <Passion/>
            <GoTo returnPath={'/home'}
                returnQuote={'Home'}
                path={'/projects'} 
                quote={'projects'} />
        </div>
        );
    };
}

export default About;