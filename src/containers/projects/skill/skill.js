import React, {Component} from 'react';
import classes from './../boxStyling.module.css';
import Transition from 'react-transition-group/transition';
import Project from '../proj/project';

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
        el: [],
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
        this.setState({el:components})
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
                    {this.state.el}
                </div> 
            </div>
        );
    }
}

export default Lang;