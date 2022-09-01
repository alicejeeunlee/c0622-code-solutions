import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.drawer = this.drawer.bind(this);
  }

  drawer() {

  }

  render() {
    return <i onClick={this.drawer} className='fa-solid fa-bars'></i>;
  }
}

export default AppDrawer;
