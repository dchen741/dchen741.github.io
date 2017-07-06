import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Transition from './Transition';
import Adventure from './Adventure';

export default class Ending extends React.Component {

  render() {
    return(
      <div className="dc-ending">
        <span className="dc-text-section-text dc-ending-text">
          Connect with me!
        </span>
        <span className="dc-contact-spacing">
          <span>
            <a className="dc-ending-link" href="mailto:dchen741@gmail.com" target="_top">
              <img className="dc-contact-icons" src={"http://dchen741.github.com/app/media/gmail-icon.png"}></img>
              Gmail
            </a>
          </span>
        </span>
        <span className="dc-contact-spacing">
          <span>
            <a className="dc-ending-link" href="https://www.linkedin.com/in/dennis-chen-6694787b" target="_blank">
              <img className="dc-contact-icons" src={"http://dchen741.github.com/app/media/linkedin-256.png"}></img>
              LinkedIn
            </a>
          </span>
        </span>
      </div>
    )
  }

}
