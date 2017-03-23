import React from 'react';
import DCLogo from './DCLogo';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Header extends React.Component {

  render() {
    return(
      <Row className="dc-header">
        <Col xs={12}>
          <DCLogo />
        </Col>
      </Row>
    )
  }

}
