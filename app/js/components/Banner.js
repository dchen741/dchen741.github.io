import React from 'react';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Transition extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Row className="dc-transition">
        <Col xs={12}>
          <div className="dc-text-transition">{this.props.text}</div>
        </Col>
      </Row>
    )
  }

}
