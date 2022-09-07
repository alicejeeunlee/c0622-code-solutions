import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0,
      intervalID: null
    };
    this.dots = this.dots.bind(this);
  }

  dots(props) {
    return this.props.images.map((image, index) => {
      const darken = (this.state.imgIndex === index) ? 'fas' : 'far';
      return <i key={index} className={`icon ${darken} fa-circle`} data-index={index} />;
    });
  }

  componentDidMount() {
    this.setState({
      intervalID: setInterval(() => this.setState({
        imgIndex: this.state.imgIndex === this.props.images.length - 1 ? 0 : this.state.imgIndex + 1
      }), 3000)
    });
  }

  render() {
    const images = this.props.images;
    const index = this.state.imgIndex;
    return (
      <div className="carousel">
        <div className="row space-between align-center">
          <i className="fa-solid fa-less-than fa-2xl arrows"></i>
          <div className='image-wrapper'>
            <img src={`../images/${images[index].url}`} alt={images[index].alt} />
          </div>
          <i className="fa-solid fa-greater-than fa-2xl arrows"></i>
        </div>
        <div className="row space-between icon-wrapper">
          {this.dots(this.props)}
        </div>
      </div>
    );
  }
}
