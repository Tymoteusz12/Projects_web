import React from 'react';
import classes from './goTo.module.css';
import {withRouter} from 'react-router-dom';

const goToPath = (props) => {

    function goToHandler(path){
        props.history.push(path);
    }

    function returnToHandler(path){
        props.history.push(path);
    }

    return(
        <div className={classes.goToButtons}>
            <div className={classes.Return} onClick={() => returnToHandler(props.returnPath)}>
                <p>go to {props.returnQuote}</p><i className="fas fa-chevron-left"></i>
            </div>
            <div className={classes.Explore} onClick={() => goToHandler(props.path)}>
                <p>go to {props.quote}</p><i className="fas fa-chevron-right"></i>
            </div>
        </div>
    );
}

export default withRouter(goToPath);