import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Transition from './Transition';
import Work from './Work';
import MeImage from '_media/me.png';
import Sample from '_media/sample.png';
import IBM from '_media/IBM.png';
import Tufts from '_media/tufts.png';
import MITLL from '_media/MITLL.png';

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
                  <Work img={IBM} date={'IBM (2017-Present)'} title={'Staff Software Engineer'} text={'Built Java apps, tackled iOS bugs and developed web features all for Watson Workspace.'}/>
                </Col>
                <Col xs={12} md={3}>
                  <Work img={IBM} date={'IBM (2015-2016)'} title={'Software Engineer'} text={"Research and Development in an incubator team. Learning the ropes, there's so many! "} />
                </Col>
                <Col xs={12} md={3}>
                  <Work img={Tufts} date={'Tufts (2011-2015)'} title={'Student'} text={'Graduated! Obtained a B.S in Computer Science'} />
                </Col>
                <Col xs={12} md={3}>
                  <Work img={MITLL} date={'MIT Lincoln Labs (2013)'} title={'Summer Intern'} text={'Researched security in functional programming. Helped to publish a paper!'} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }

}
