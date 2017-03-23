import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import MeImage from '_media/me.png';

export default class Intro extends React.Component {

  render() {
    console.log(MeImage);
    return(
      <Row className="">
        <Col xs={10} xsOffset={2}>
          <Row>
            <Col xs={2}>
              <img src={MeImage}></img>
            </Col>
            <Col xs={10}>
              <span>
                hihihihiihihi
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }

}
