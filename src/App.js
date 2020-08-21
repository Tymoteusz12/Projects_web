import React from 'react';
import classes from './App.module.css';
import Footer from './containers/footer/footer';
import Content from './containers/content/content';

function App() {
  return (
    <div className={classes.App}>

      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
