import React from 'react';
import classes from './project.module.css';
const project = props => {
    return(
        <div className={classes.elem}>
            <h2>{props.header}</h2>
            <p>{props.content}</p>
        </div>
    );
}

export default project;