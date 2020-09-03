import React, {Component} from 'react';
import classes from './../boxStyling.module.css';
import {CSSTransition} from 'react-transition-group';
import Project from '../proj/project';
import './fade.css';
Object.size = function(obj){
    let size = 0, key;
    for(key in obj){
        if(obj.hasOwnProperty(key)) size++;
    }
    return size;
}

class Lang extends Component{

    state = {
        active: false,
        containerToRender: [],
        class: classes.content
    }

    clickHandler = () => {
        this.setState(prevState => {
            return {active: !prevState.active}
        })
    }

    componentDidMount(){
        let size = Object.size(this.props.content)/3;
        let components = [];
        for(let val = 1; val <= size; val++){
            components.push(
                (
                    <Project key={this.props.content['header' + val]} videoObj={this.props.content['vid'+val]} header={this.props.content['header' + val]} content={this.props.content['content' + val]}/>          
                )
            )
        }
        this.setState({containerToRender:components})
    }

    render(){
        const timeout = { enter: 600, exit: 600 }
        return( 
            <div style={{flexBasis: '100%'}}>
                <div onClick={this.clickHandler}>
                    <div className={classes.Toggle}>
                        <i className="fas fa-caret-down"></i><h2>{this.props.title}</h2>
                    </div>
                </div>
                <div>
                    <CSSTransition unmountOnExit in={this.state.active} classNames="fade" timeout={timeout}>
                        <div className={this.state.class}>
                            {this.state.containerToRender}
                        </div> 
                    </CSSTransition>
                </div>
            </div>
        );
    }
}

export default Lang;