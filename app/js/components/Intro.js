import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import MeImage from '_media/me.png';

export default class Intro extends React.Component {

  render() {
    return(
      <Row className="dc-intro">
        <Col xs={10} xsOffset={1} md={10} mdOffset={1}>
          <Row>
            <Col xs={12} md={3}>
              <Image className="dc-img-me" src={MeImage} circle />
            </Col>
            <Col xs={12} md={8}>
              <div className="dc-text-title">HI, I&#039;M DENNIS!</div>
              <div className="dc-text-sub-title">
                Aspiring Baker
                <span> &#8226; </span>
                Dance Disaster
                <span> &#8226; </span>
                Enthusiastic Coder
              </div>
              <div className="dc-horizontal-rule"></div>
              <div>
                I&#039;m currently a Software Engineer at IBM.
                I graduated in 2015 from Tufts University with a B.S in Computer Science. I love learning
                about different technologies and have a passion for adventures. I am based in the
                Boston area and if you would like to contact me, feel free to hit me up!
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }

}
