import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Transition from './Transition';
import Sample from '_media/sample.png';
import Adventure from './Adventure';

export default class Ending extends React.Component {

  render() {
    return(
      <Row>
        <Col xs={12}>
          <Transition text={"Let's get coffee!"} />
          <Row>
            <Col xs={8} xsOffset={2}>
              <Row>
                <Col xs={12} md={3}>
                  Hit me up!
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }

}
