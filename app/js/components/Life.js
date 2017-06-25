import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Transition from './Transition';
import Franconia from '_media/franconia.png';
import Japan from '_media/japan.png';
import Hawaii from '_media/hawaii.png';
import Acadia from '_media/acadia.png';
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
                    When I'm not coding, here are some of the things that I have done!
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={3}>
                  <Adventure img={Acadia} title={'Acadia, Maine (06/2017)'} text={'Hiking in the company of friends'} />
                </Col>
                <Col xs={12} md={3}>
                  <Adventure img={Hawaii} title={'Hawaii (01/2017)'} text={'10/10 Beaches'} />
                </Col>
                <Col xs={12} md={3}>
                  <Adventure img={Franconia} title={'Franconia Ridge (11/2016)'} text={'A 9 mile snowy hike'} />
                </Col>
                <Col xs={12} md={3}>
                  <Adventure img={Japan} title={'Japan (10/2016)'} text={'Sushi, temples and sweets galore!'} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }

}
