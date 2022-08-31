import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      count: 0
    };
    this.timer = this.timer.bind(this);
    this.reset = this.reset.bind(this);
  }

  timer() {
    if (!this.state.isOn) {
      this.setState({ isOn: true });
      this.intervalID = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000);
    } else {
      this.setState({ isOn: false });
      clearInterval(this.intervalID);
    }
  }

  reset() {
    if (this.state.isOn === false) {
      this.setState({ count: 0 });
    }
  }

  render() {
    const icon = (this.state.isOn) ? 'pause' : 'play';
    return (
      <div className="container">
        <div className="circle" onClick={this.reset}>
          <h1>{this.state.count}</h1>
        </div>
        <i onClick={this.timer} className={'fa-solid fa-' + icon}></i>
      </div>
    );
  }
}

export default Stopwatch;
