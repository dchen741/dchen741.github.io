import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Transition from './Transition';
import Sample from '_media/sample.png';
import Adventure from './Adventure';
import Gmail from '_media/gmail-icon.png';
import LinkedIn from '_media/linkedin-256.png';

export default class Ending extends React.Component {

  render() {
    return(
      <Row>
        <Col xs={12}>
          <Transition text={"Let's chat!"} />
          <Row>
            <Col xs={8} xsOffset={2}>
              <Row>
                <Col xs={12}>
                  <div className="dc-text-section-text">
                    So coffee isn&#039;t really my thing, but I&#039;m totally down for some tea or baked goods!
                    Hit me up! :)
                  </div>
                  <div>
                    <img className="dc-contact-icons" src={Gmail}></img>
                    <span><a href="mailto:dchen741@gmail.com" target="_top">Gmail</a></span>
                  </div>
                  <div>
                    <img className="dc-contact-icons" src={LinkedIn}></img>
                    <span><a href="https://www.linkedin.com/in/dennis-chen-6694787b" target="_blank">LinkedIn</a></span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="dc-bottom-spacing"></div>
        </Col>
      </Row>
    )
  }

}
