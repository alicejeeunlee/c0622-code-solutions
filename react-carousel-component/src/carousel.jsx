import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgindex: 0
    };
  }

  render() {
    return (
      <div className="carousel">
        <div className="row space-between align-center">
          <i className="fa-solid fa-less-than fa-2xl arrows"></i>
          <div className='image-wrapper'>
            <img src="../images/breakfastprincess.webp" alt="" />
          </div>
          <i className="fa-solid fa-greater-than fa-2xl arrows"></i>
        </div>
        <div className="row space-between icon-wrapper">
          <i className="icon fas fa-circle" data-index="0"></i>
          <i className="icon far fa-circle" data-index="1"></i>
          <i className="icon far fa-circle" data-index="2"></i>
          <i className="icon far fa-circle" data-index="3"></i>
          <i className="icon far fa-circle" data-index="4"></i>
        </div>
      </div>
    );
  }
}
