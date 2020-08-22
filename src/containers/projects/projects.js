import React, {Component} from 'react';
import classes from './projects.module.css';
import Lang from './Lang/Lang';
class Projects extends Component {

    state = {
        components: [
            {
                title: 'C/C++ projects',
                content: ''
            },
            {
                title: 'Python projects',
                content: ''
            },
            {
                title: 'My webpages',
                content: ''
            }
        ]
    }

    render(){
        return(
            <div className={classes.proj}>
                {this.state.components.map(object => {
                    return <Lang key={object.title} title={object.title} content={object.content}/>
                })}
            </div>
        );
    }
}

export default Projects;