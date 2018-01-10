import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Transition from './Transition';
import Work from './Work';

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
                  <Work img={"https://dennisjchen.github.com/app/media/IBM.png"} date={'IBM (2017-Present)'} title={'Staff Software Engineer'} text={'Built Java apps, tackled iOS bugs and developed React/Redux/NodeJS features all for Watson Workspace.'}/>
                </Col>
                <Col xs={12} md={3}>
                  <Work img={"https://dennisjchen.github.com/app/media/IBM.png"} date={'IBM (2015-2016)'} title={'Software Engineer'} text={"Research and Development in an incubator team. Learning the ropes, there's so many! "} />
                </Col>
                <Col xs={12} md={3}>
                  <Work img={"https://dennisjchen.github.com/app/media/tufts.png"} date={'Tufts (2011-2015)'} title={'Student'} text={'Graduated! Obtained a B.S in Computer Science'} />
                </Col>
                <Col xs={12} md={3}>
                  <Work img={"https://dennisjchen.github.com/app/media/MITLL.png"} date={'MIT Lincoln Labs (2013)'} title={'Summer Intern'} text={'Researched security in functional programming. Helped to publish a paper!'} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }

}
