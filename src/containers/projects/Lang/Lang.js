import React, {Component} from 'react';
import classes from './../boxStyling.module.css';

class Lang extends Component{

    state = {
        active: false,
        class: [
            classes.content, classes.nonactive
        ]
    }

    clickHandler = () => {
        this.setState(prevState => {
            let newClass = [...prevState.class];
            if(!prevState.active){
                newClass.push(classes.active);
            }
            else{
                newClass = [classes.content, classes.nonactive];
            }
            return {active: !prevState.active,
                    class: newClass
            }
        })
    }

    render(){
        return( 
            <div style={{flexBasis: '100%'}}>
                <div onClick={this.clickHandler}>
                    <div className={classes.Toggle}>
                        <i className="fas fa-caret-down"></i><h2>{this.props.title}</h2>
                    </div>
                </div>
                <div className={this.state.class.join(' ')}>
                    <p>{this.props.content}</p>
                </div> 
            </div>
        );
    }
}

export default Lang;