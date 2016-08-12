import React from 'react';

export default class App extends React.Component {

  render() {
    return(
      <div>
        <h3 className="standard-text">
          Hello! I graduated in 2015 from <a href="http://www.tufts.edu/">Tufts University</a> where I studied Computer Science.
          I have taken a variety of CS courses during my time at college and I am fascinated by what is still out there.
          I love learning about new technologies and enjoy new experiences.
          I am based in the Boston area and if you would like to contact me, feel free to <a href="mailto:DennisChen@us.ibm.com">email</a> me!
        </h3>
        <h6 className="text-center standard-text">
          <i>In my free time, I really like to play with new technologies, meet new people and bake scrumptious treats.</i>
        </h6>
      </div>
    )
  }

}
