import React from 'react';

export default class Work extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <img className="dc-img-about" src={this.props.img}></img>
        <div className="dc-about-item-date">
          {this.props.date}
        </div>
        <div className="dc-about-item-title">
          {this.props.title}
        </div>
        <div>
          {this.props.text}
        </div>
      </div>
    )
  }

}
