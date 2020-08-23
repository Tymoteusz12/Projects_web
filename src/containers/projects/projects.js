import React, {Component} from 'react';
import classes from './projects.module.css';
import Lang from './Lang/Lang';
class Projects extends Component {

    state = {
        components: [
            {
                title: 'C/C++ projects',
                content: {
                    header1: 'Solar System model',
                    content1: 'This is my biggest project. I managed to build Solar System model with 9 planets (including Pluto) and central Star. Everything was implemented by myself: Models, orbitals, skyboxes, gravity, movements... That was fascinating journey. Planet sizes have real scale, also their masses, distances between certain orbitals. Included some extra stuff - false asteroid belt and Saturn rings. Not everything was imitated corectly. Orbital inclination, planet declination and their rotation are fake.',
                    header2: 'Ray tracing implementation',
                    content2: 'Simple ray tracing imitation implemented independly. These kinds of projects teach me how graphics is working under their hood. That is interesting.',
                    header3: 'OpenGL Playground',
                    content3: 'This project actually is used by me to test new features during my eduaction. Also I added gravity force, cube, which is used for throwing, and friction force during ground contact with thrown model.'
                }
            },
            {
                title: 'Python projects',
                content: {
                    header1: 'Ping-pong ball',
                    content1: 'Well... If you ever wanted to throw ping pong ball inside your screen, you can do this. Made with pygame. Just adjust: direction in 2D space, vector length and press click. The ball will jump into selected direction with given speed vector. Also, it movement will slowly decrease due to screen friction and gravity. Yes, there is gravity! It forces ball to return to the bottom.',
                    header2: 'Multiple gravity reaction',
                    content2: 'Press on the screen to create a cicle, which has momentum. You can adjust position of cicle and his speed vector. You can put as many balls as you want. If you want to see models interaction (every ball has mass), simply press start key. The fun will begin. After ball touches another ball it will take his size and momentum. Therefore in the end there will be single resultant momentum made from every single ball, that has been put. Project made with my colleague.',
                    header3: 'AI made to recognize clothes',
                    content3: ''
                }
            },
            {
                title: 'My webpages',
                content: {
                    header1: 'Build your own burger!',
                    content1: 'Project made with react, together with redux. You can build your own burger, fill contact form and register as a user to see your own orders. App uses tokens for authentication, so if you leave a page and return back, you will be still logged. It uses also Firebase to fetch orders from database, generate tokens and more. General idea of the project was to train AJAX, React, React-redux, Routing and basics of web development. ',
                    header2: 'Programming project page',
                    content2: 'This site actually is my project. It uses React. Build for my programming skills presentation! It is fully responsive.',
                    header3: 'Simple SPA',
                    content3: 'Page made with javascript, jQuery, html and css. It general idea was to master CSS and HTML. Also learned new things about RWD and js programming.',
                    header4: 'My portfolio',
                    content4: 'Made with much love to present me as a person and candidate for you, dear recruiter. Built with react :)'
                }
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