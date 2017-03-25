import React from 'react';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Banner extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Row className="dc-banner">
        <Col xs={12}>
          <div className="dc-text-banner">{this.props.text}</div>
        </Col>
      </Row>
    )
  }

}