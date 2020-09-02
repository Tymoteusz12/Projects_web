import React, {Component} from 'react';
import classes from './Links.module.css';
import GoTo from '../../components/goToToggler/goTo';
class Links extends Component{
    state = {
        resources: null,
        links:[
            {
                name: 'Web_apps',
                linkClass: 'Web_links',
                title: 'Web aplications github repos',
                headers: ['Burger app', 'Programming project page', 'Simple SPA'],
                links: ['https://github.com/Tymoteusz12/Burger_Builder', 
                        'https://github.com/Tymoteusz12/Projects_web', 
                        'https://tymoteusz12.github.io/Tymoteusz12.github.io./']
            },
            {
                name: 'Cpp',
                linkClass: 'Cpp_links',
                title: 'C/C++ github repos',
                headers: ['Solar system', 'Instancing project', 'OpenGL playground'],
                links: ['https://github.com/Tymoteusz12/OpenGL-and-physics.git', 'inst', 
                        'opgl']
            },
            {
                name: 'Python',
                linkClass: 'Python_links',
                title: 'Python github repos',
                headers: ['Ping pong ball', 'Gravity and central object', 'Space invaders'],
                links: ['ppball', 'grvt', 'spc inv']
            },
            {
                name: 'Resources',
                linkClass: 'Resources_links',
                title: 'Resources used on this website',
                headers: [
                    'Home page background icon made by https://www.flaticon.com/authors/itim2101, itim2101 from https://www.flaticon.com/',
                    'About page icon made by https://www.flaticon.com/authors/freepik, Freepik from  https://www.flaticon.com',
                    'Projects icon made by https://www.flaticon.com/authors/dave-gandy, Dave Gandy from https://www.flaticon.com/',
                    'Gallery icon made by https://www.flaticon.com/authors/freepik, Freepik from https://www.flaticon.com/',
                    'lnksbgi'],
                links: []
            }
        ]
    }

    componentDidMount = () => {
        window.scrollTo(0,0);
        let categoryToRender = [];
        let linksJSX = 
        (
            this.state.links.map(category => {
                categoryToRender = []
                for(let id in category.headers){
                    categoryToRender.push((
                        <div className={classes[category.linkClass]}key={category.headers[id]}>
                            <h4>{category.headers[id]}</h4>
                            <a href={category.links[id]}>{category.links[id]}</a>
                        </div>
                    ))
                }
                return (
                    <div key={category} className={classes[category.name]}>
                        <h3>{category.title}</h3>{   
                            categoryToRender.map(content => content)
                        }
                    </div>)}
            )
        )
        this.setState({resources: linksJSX});
    }

    render(){
        
        return(
            <div className={classes.Links}>
                <h2>Github repos and more!</h2>
                {this.state.resources}
                <GoTo returnPath={'/gallery'} 
                    returnQuote={'gallery'}
                    path={'/home'} 
                    quote={'home'} />
            </div>
        );
    };
}

export default Links;