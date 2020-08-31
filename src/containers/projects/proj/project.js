import React, { Component } from 'react';
import classes from './project.module.css';
class project extends Component{

    state = {
        vidComponent: []
    }

    componentDidMount(){
        let vidCompCopy = [];

        for(let id in this.props.videoObj.vidSrc){
            vidCompCopy.push(
                (
                <div key={this.props.videoObj.vidSrc[id]}>
                    <h3>{this.props.videoObj.vidLabels[id]}</h3>
                    <video src={this.props.videoObj.vidSrc[id]} controls></video>
                </div>
                )
            )
        }

        this.setState({vidComponent : vidCompCopy})
    }
    render(){
        return(
            <div className={classes.elem}>
                <h2>{this.props.header}</h2>
                <p>{this.props.content}</p>
                {this.state.vidComponent.map( elem =>{
                    return (elem)
                })}
            </div>
        );
    }
}

export default project;