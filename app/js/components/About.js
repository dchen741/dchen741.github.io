import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Transition from './Transition';
import Work from './Work';
import MeImage from '_media/me.png';
import Sample from '_media/sample.png';

export default class About extends React.Component {

  render() {
    return(
      <Row>
        <Col xs={12}>
          <Transition text={'The last few years have been busy...'} />
          <Row>
            <Col xs={8} xsOffset={2}>
              <Row>
                <Col xs={12} md={3}>
                  <Work img={Sample} title={'IBM (2017-Present)'} text={'Killing it with new found Software Development skills.'}/>
                </Col>
                <Col xs={12} md={3}>
                  <Work img={Sample} title={'IBM (2015-2016)'} text={'Learning the ropes, there&#039;s so many!'} />
                </Col>
                <Col xs={12} md={3}>
                  <Work img={Sample} title={'Tufts (2011-2015)'} text={'Graduated! Obtained a B.S in Computer Science'} />
                </Col>
                <Col xs={12} md={3}>
                  <Work img={Sample} title={'MIT Lincoln Labs (2013)'} text={'Internship doing functional programming security research'} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }

}
