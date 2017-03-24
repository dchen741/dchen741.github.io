import React from 'react';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import { Grid, Row, Col } from 'react-bootstrap';

export default class App extends React.Component {

  render() {
    return(
      <div>
        <Header />
        <Intro />
        <About />
      </div>
    )
  }

}
