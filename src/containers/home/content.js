import React, {Component} from 'react';
import classes from './content.module.css';
import GoTo from '../../components/goToToggler/goTo';

class Content extends Component{

    componentDidMount(){
        window.scrollTo(0,0);
    }

    render(){
        return(
            <div className={classes.Content + ' page'}>
                <div className={classes.Quote}>
                    <h5>“Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live”
                        ― John Woods</h5>
                    <h6>Let's explore my programming skills!</h6>
                </div>
                <GoTo returnPath={'/links'}
                    returnQuote={'links'}
                    path={'/about'} 
                    quote={'ABOUT'}/>
            </div>
        );
    };
}

export default Content;