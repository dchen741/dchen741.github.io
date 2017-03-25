import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Transition from './Transition';

export default class Life extends React.Component {

  render() {
    return(
      <Row>
        <Col xs={12}>
          <Transition text={'But I do have a life...'} />
          <Row>
            <Col xs={8} xsOffset={2}>
              <Row>
                <Col xs={12} md={3}>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }

}
