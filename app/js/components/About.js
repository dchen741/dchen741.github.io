import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import MeImage from '_media/me.png';

export default class About extends React.Component {

  render() {
    return(
      <Row>
        <Col xs={12}>
          <Row className="dc-about-header">
            <Col xs={12}>
              <div className="dc-text-banner">The last few years have been busy...</div>
            </Col>
          </Row>
          <Row>
            <Col xs={8} xsOffset={2}>
              alksjdflkasjflksjdfjlkdsf
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }

}
