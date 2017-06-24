import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Transition from './Transition';
import Sample from '_media/sample.png';
import Adventure from './Adventure';

export default class Life extends React.Component {

  render() {
    return(
      <Row>
        <Col xs={12}>
          <Transition text={'But I do have a life...'} />
          <Row>
            <Col xs={8} xsOffset={2}>
              <Row>
                <Col xs={12}>
                  <div className="dc-text-section-text dc-bottom-spacing">
                    In my spare time, I like to...
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={3}>
                  <Adventure img={Sample} title={'Acadia, Maine (06/2017)'} text={'Hiking in the company of friends'} />
                </Col>
                <Col xs={12} md={3}>
                  <Adventure img={Sample} title={'Hawaii (01/2017)'} text={'WOOOO BEACHES'} />
                </Col>
                <Col xs={12} md={3}>
                  <Adventure img={Sample} title={'Franconia Ridge (11/2016)'} text={'A 9 mile snowy hike'} />
                </Col>
                <Col xs={12} md={3}>
                  <Adventure img={Sample} title={'Japan (10/2016)'} text={'Sushi galore!'} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }

}
