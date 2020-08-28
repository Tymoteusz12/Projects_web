import React, { Component } from 'react';
import classes from './App.module.css';
import Footer from './containers/footer/footer';
import Content from './containers/content/content';
import About from './containers/about/about';
import Projects from './containers/projects/projects';
import {Route, Switch, withRouter} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Header from './containers/content/header/header';
class App extends Component {

    render(){
      const timeout = { enter: 600, exit: 0 }
      let pageToRender = (
      <TransitionGroup>
        <CSSTransition key={this.props.location.pathname} 
        classNames="pageSlider"
        mountOnEnter unmountOnExit 
        timeout={timeout}>
          <div className='wrapper'>
            <Switch location={this.props.location}>
              <Route path="/about" component={About}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/home" component={Content}/>
              <Route path="/" exact component={Content}/>
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>);

      return (
        <div className={classes.App}>
          <Header/>
            {pageToRender}
          <Footer/>
        </div>
      );
    }
}

export default withRouter(App);
