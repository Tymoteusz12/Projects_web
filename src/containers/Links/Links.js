import React, {Component} from 'react';
import classes from './Links.module.css';
class Links extends Component{
    state = {
        links: {
            headers: ['Solar system', 'Instancing project', 'OpenGL playground',
            'Ping pong ball', 'Gravity and central object', 'Space invaders', 'Burger app', 'Programming project page', 'Simple SPA',
            'Home page background image', 'About page background image', 'Projects page background image', 'Gallery background image', 'Links page background image'],
            links: ['https://github.com/Tymoteusz12/OpenGL-and-physics.git', 'inst', 
            'opgl', 'ppball', 'grvt', 'spc inv', 
            'https://github.com/Tymoteusz12/Burger_Builder', 
            'https://github.com/Tymoteusz12/Projects_web', 
            'https://tymoteusz12.github.io/Tymoteusz12.github.io./',
            'Icon made by https://www.flaticon.com/authors/itim2101, itim2101 from https://www.flaticon.com/',
            'Icon made by https://www.flaticon.com/authors/freepik, Freepik from  https://www.flaticon.com',
            'Icon made by https://www.flaticon.com/authors/dave-gandy, Dave Gandy from https://www.flaticon.com/',
            'Icon made by https://www.flaticon.com/authors/freepik, Freepik from https://www.flaticon.com/'
        ]
        },
        resources: []
    }

    componentDidMount = () => {
        let linksToRender = [];
        for(let id in this.state.links.headers){
            linksToRender.push((
            <div className={classes.resource}>
                <h4>{this.state.links.headers[id]}</h4>
                <p><a href={this.state.links.links[id]} target="blank">{this.state.links.links[id]}</a></p>
            </div>))
            }
        this.setState({resources: [...linksToRender]})
    }

    render(){
        return(
            <div className={classes.Links}>
                {this.state.resources.map(link => {
                    return (link)
                })}
            </div>
        );
    };
}

export default Links;