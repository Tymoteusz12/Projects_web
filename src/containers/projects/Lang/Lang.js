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
                    <h2>{this.props.content.header1}</h2>
                    <p>{this.props.content.content1}</p>
                    <h2>{this.props.content.header2}</h2>
                    <p>{this.props.content.content2}</p>
                    <h2>{this.props.content.header3}</h2>
                    <p>{this.props.content.content3}</p>
                    {this.props.content.content4 ? 
                    <div>
                        <h2>{this.props.content.header4}</h2>
                        <p>{this.props.content.content4}</p>
                    </div>
                    : null}
                </div> 
            </div>
        );
    }
}

export default Lang;