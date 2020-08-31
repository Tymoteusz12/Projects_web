import React, {Component} from 'react';
import classes from './projects.module.css';
import Lang from './skill/skill';
import '../../shared/transition.css';
class Projects extends Component {

    state = {
        components: [
            {
                title: 'C/C++ projects',
                content: {
                    header1: 'Solar System model',
                    content1: 'This is my biggest project. I managed to build Solar System model with 9 planets (including Pluto) and central Star. Everything was implemented by myself: Models, orbitals, skyboxes, gravity, movements... That was fascinating journey. Planet sizes have real scale, also their masses, distances between certain orbitals. Included some extra stuff - false asteroid belt and Saturn rings. Not everything was imitated corectly. Orbital inclination, planet declination and their rotation are fake. Camera is set up to move with the speed of light. That means speed = 1c ("c" stands for speed of light constant). BUT ! At the video I used 100x speed boost. That means 3*10^8 * 100 => 100c. Sometimes you can notice drops of speed - these times I traveled with 1c - Speed of light. Fun fact! Taking a journey through sun took me about 4,7seconds. Flying at this model from Sun to Earth with 1c would take about 8 minutes and 20 seconds.',
                    vid1: {
                        vidSrc: ['videos/cpp/Solar_System/General_Overview.mp4', 'videos/cpp/Solar_System/Sun_and_Earth.mp4', 'videos/cpp/Solar_System/Asteroid_Belt.mp4', 'videos/cpp/Solar_System/Planets.mp4'],
                        vidLabels:['General model overview - Speed travel = 100c', 'Sun and Earth comparison - Speed travel 1c ' , 'Asteroid belt - Speed travel 100c', 'Solar System planets - Speed travel = Mixed. After Mars - 100c. Before - 1c.'],
                    },
                    header2: 'GPU Instancing',
                    content2: 'Instancing is a technique used for graphic rendering optimization. It is commonly used, when we need to render big amount of object on single frame. In this project I took a closer look at this idea. On the video you can see tremendous amount of asteroid models. They sum up together up to 100_000 objects. Every asteroid has 576 vertices - which means our GPU renders 576 * 100_000 vertices every frame. Bigger amount of asteroids resulted of peformance drops. This technique is used for e.g for smooth grass rendering. So, that\'s it! :)',
                    vid2: {
                        vidSrc: ['videos/cpp/Instancing/Instancing.mp4'],
                        vidLabels:['Project overview'],
                    },
                    header3: 'OpenGL Playground',
                    content3: 'This project actually is used by me to test new features during my eduaction. Also I added gravity force, cube, which is used for throwing, and friction force during ground contact with thrown model.',
                    vid3: {
                        vidSrc: ['videos/cpp/Playground/General_Overview.mp4', 'videos/cpp/Playground/Cube.mp4', 'videos/cpp/Playground/Blending.mp4'],
                        vidLabels:['General look', 'Throwing a cube!', 'Blending - transparency within objects. Notice red \'windows\'. '],
                    },
                }
            },
            {
                title: 'Python projects',
                content: {
                    header1: 'Ping-pong ball',
                    content1: 'Well... If you ever wanted to throw ping pong ball inside your screen, you can do this. Made with pygame. Just adjust: direction in 2D space, vector length and press click. The ball will jump into selected direction with given speed vector. Also, it movement will slowly decrease due to screen friction and gravity. Yes, there is gravity! It forces ball to return to the bottom.',
                    vid1: {
                        vidSrc: ['videos/python/golf_ball.mp4'],
                        vidLabels:['General look'],
                    },
                    header2: 'Central mass gravity',
                    content2: 'Press on the screen to create a cicle, which has momentum. You can adjust position of cicle and his speed vector. After click, circle will start movement and will interact with central mass, which is represented as big circle in the middle. Also - red line is equal to acceleration vector, and white is resultant velocity vector.',
                    vid2: {
                        vidSrc: ['videos/python/gravity_and_object.mp4'],
                        vidLabels:['Project overview'],
                    },
                    header3: 'Space invaders',
                    content3: 'Well, pretty humble game, but every initiative is good for practice. Shot with space, move with A, D and score as much as you can! Crashing into enemy space ship will result as a game over.',
                    vid3: {
                        vidSrc: ['videos/python/Space_invaders.mp4'],
                        vidLabels:['Project overview'],
                    },
                }
            },
            {
                title: 'My webpages',
                content: {
                    header1: 'Build your own burger!',
                    content1: 'Project made with react, together with redux. You can build your own burger, fill contact form and register as a user to see your own orders. App uses tokens for authentication, so if you leave a page and return back, you will be still logged. It uses also Firebase to fetch orders from database, generate tokens and more. General idea of the project was to train AJAX, React, React-redux, Routing and basics of web development. ',
                    vid1: {
                        vidSrc: ['videos/web_dev/burger_builder/General_view.mp4', 'videos/web_dev/burger_builder/Ordering_Burger.mp4', 'videos/web_dev/burger_builder/Data_comparison.mp4', 'videos/web_dev/burger_builder/Routing.mp4' , 'videos/web_dev/burger_builder/Firebase_check.mp4'],
                        vidLabels:['General view.', 'Ordering a burger!', 'Ordered burger informations', 'Routing - with out authentication, we are unable to enter some pages', 'Checking firebase. All orders data are stored in firebase.'],
                    },
                    header2: 'Programming project page',
                    content2: 'This site actually is my project. It uses React. Build for my programming skills presentation! It is fully responsive.',
                    vid2: {
                        vidSrc: [],
                        vidLabels:[],
                    },
                    header3: 'Simple SPA',
                    content3: 'Page made with javascript, jQuery, html and css. It general idea was to master CSS and HTML. Also learned new things about RWD and js programming. You can also enter this page on your own!',
                    vid3: {
                        vidSrc: ['videos/web_dev/simple_spa/simple_spa.mp4', 'videos/web_dev/simple_spa/web_menu.mp4'],
                        vidLabels:['Home view', 'Web page menu'],
                    },
                    header4: 'My portfolio',
                    content4: 'Made to present me as a person and candidate for recruitment. Built with react.',
                    vid4: {
                        vidSrc: [],
                        vidLabels:[],
                    },
                }
            }
        ]
    }

    componentDidMount(){
        window.scrollTo(0,0);
    }

    render(){
        return(
            <div className={classes.proj + ' page'}>
                {this.state.components.map(object => {
                    return <Lang key={object.title} title={object.title} content={object.content}/>
                })}
            </div>
        );
    }
}

export default Projects;