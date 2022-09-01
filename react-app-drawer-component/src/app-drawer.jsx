import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };
    this.drawer = this.drawer.bind(this);
  }

  drawer() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  render() {
    const modal = this.state.drawerOpen ? '' : 'hidden';
    return (
      <div className='container'>
        <i onClick={this.drawer} className="fa-solid fa-bars"></i>
        <div className={modal}>
          <div onClick={this.drawer} className="shadow"></div>
          <nav className="menu">
            <h1>Land of Ooo</h1>
            <div onClick={this.drawer}>
              <a>Candy Kingdom</a>
              <a>Ice Kingdom</a>
              <a>Castle Lemongrab</a>
              <a>Wildberry Kingdom</a>
              <a>Lumpy Space</a>
              <a>Fire Kingdom</a>
              <a>Cloud Kingdom</a>
              <a>Evil Forest</a>
              <a>Bad Lands</a>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
