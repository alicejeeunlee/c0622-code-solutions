import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0,
      intervalID: null
    };
    this.rotate = this.rotate.bind(this);
    this.dots = this.dots.bind(this);
    // this.handleDotClick = this.dots.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  dots(props) {
    return this.props.images.map((image, index) => {
      const darken = (this.state.imgIndex === index) ? 'fas' : 'far';
      return <i key={index} className={`dot ${darken} fa-circle`} data-index={index} onClick={this.handleDotClick}/>;
    });
  }

  rotate() {
    this.setState({
      intervalID: setInterval(() => this.setState({
        imgIndex: this.state.imgIndex === this.props.images.length - 1 ? 0 : this.state.imgIndex + 1
      }), 3000)
    });
  }

  // handleClick(event) {
  //   clearInterval(this.state.intervalID);
  //   if (event.target.id === 'left-arrow') {
  //     this.setState({
  //       imgIndex: this.state.imgIndex === 0 ? this.props.images.length - 1 : this.state.imgIndex - 1,
  //       intervalID: this.rotate()
  //     });
  //   } else if (event.target.id === 'right-arrow') {
  //     this.setState({
  //       imgIndex: this.state.imgIndex === this.props.images.length - 1 ? 0 : this.state.imgIndex + 1,
  //       intervalID: this.rotate()
  //     });
  //   }
  //   this.rotate();
  // }

  // handleDotClick(event) {
  //   console.log(event.target);
  //   console.log('clicked!');
  //   if (event.target.classList.contains('dot')) {

  //   }
  // }

  componentDidMount() {
    this.rotate();
  }

  render() {
    const images = this.props.images;
    const index = this.state.imgIndex;
    return (
      <div className="carousel">
        <div className="row space-between align-center">
          <i id="left-arrow" className="fa-solid fa-less-than fa-2xl arrows" onClick={this.handleClick}></i>
          <div className='image-wrapper'>
            <img src={`../images/${images[index].url}`} alt={images[index].alt} />
          </div>
          <i id="right-arrow" className="fa-solid fa-greater-than fa-2xl arrows" onClick={this.handleClick}></i>
        </div>
        <div className="row space-between icon-wrapper">
          {this.dots(this.props)}
        </div>
      </div>
    );
  }
}
