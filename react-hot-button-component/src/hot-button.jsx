import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => {
      return { clicks: state.clicks + 1 };
    });
  }

  render() {
    let className;
    if (this.state.clicks < 3) {
      className = '';
    } else if (this.state.clicks < 6) {
      className = 'purple';
    } else if (this.state.clicks < 9) {
      className = 'lavender';
    } else if (this.state.clicks < 12) {
      className = 'red';
    } else if (this.state.clicks < 15) {
      className = 'orange';
    } else if (this.state.clicks < 18) {
      className = 'yellow';
    } else {
      className = 'white';
    }
    return <button onClick={this.handleClick} className={className}>Hot Button</button>;
  }
}

export default HotButton;
