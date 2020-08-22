import React from 'react';
import classes from './App.module.css';
import Footer from './containers/footer/footer';
import Content from './containers/content/content';
import About from './containers/about/about';
import Projects from './containers/projects/projects';
function App() {
  return (
    <div className={classes.App}>
      <Content/>
      <About/>
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
