import React from 'react';
import Header from './Header';

export default class App extends React.Component {

  render() {
    return(
      <div>
      <Header />
        <h3 className="standard-text">
          Hello! I graduated in 2015 from <a href="http://www.tufts.edu/">Tufts University</a> where I studied Computer Science.
          I took a variety of CS courses during my time at school and I am fascinated by the ever changing industry.
          I love learning about different technologies and enjoy new experiences.
          I am based in the Boston area and if you would like to contact me, feel free to <a href="mailto:DennisChen@us.ibm.com">email</a> me!
        </h3>
        <h6 className="text-center standard-text">
          <i>In my free time, I really like to meet new people, bake scrumptious treats, and go on adventures.</i>
        </h6>
      </div>
    )
  }

}
