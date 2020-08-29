import React, { Component } from 'react';
import classes from './App.module.css';
import Footer from './containers/footer/footer';
import Content from './containers/content/content';
import About from './containers/about/about';
import Projects from './containers/projects/projects';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Header from './containers/content/header/header';
import Gallery from './containers/gallery/gallery';
class App extends Component {

    state = {
      showMenu: true,
      prevScroll: 0,
    }

    scrollHandler = () =>{
      if(window.scrollY - this.state.prevScroll <= 0){
        this.setState({
            showMenu: true,
            prevScroll: window.scrollY
          })
      }else{
        this.setState({
          showMenu: false,
          prevScroll: window.scrollY
        })
    }
  }

    componentDidMount(){
      window.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUmount(){
      window.removeEventListener('scroll');
    }

    render(){
      const timeout = { enter: 800, exit: 0 }
      let pageToRender = (
      <TransitionGroup>
        <CSSTransition key={this.props.location.pathname} 
        classNames="pageSlider"
        mountOnEnter unmountOnExit 
        timeout={timeout}>
          <div className='wrapper'>
            <Switch location={this.props.location}>
              <Route path="/gallery" component={Gallery}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/about" component={About}/>
              <Route path="/home" component={Content}/>
              <Redirect from="/" to="/home"/>
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>);

      return (
        <div className={classes.App}>
          <CSSTransition 
          in={this.state.showMenu}
          classNames='menuSlider'
          timeout={timeout}>
              <Header/>
          </CSSTransition>
          {pageToRender}
          <Footer/>
        </div>
      );
    }
}

export default withRouter(App);
