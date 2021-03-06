import React from 'react';
import classes from './passion.module.css';
import passion from '../../../resources/img/passion.png';
const passions = props => {
    return(
        <div className={classes.Passion}>
            <img src={passion} alt="passion_image"/>
            <h3>True passion</h3>
            <p>My programming adventure started in the beginning of 2019. Since that,
                I have learned three programming languages. My main language is C++ with C.
                I used this language with modern OpenGL - Open Graphics Library and GLSL.
                Except that - python - served me in pygame library, Django and AI.
                After all - now I use JavaScript. I have learned React framework with Redux, Routing
                and react hooks together. Also - jQuery.
                </p>
        </div>
    );
}

export default passions;