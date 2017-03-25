import React from 'react';

export default class Adventure extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <img className="dc-img-about" src={this.props.img}></img>
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
