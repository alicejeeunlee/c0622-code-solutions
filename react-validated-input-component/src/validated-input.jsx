import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const check = this.state.password.length > 7 ? '' : ' hidden';
    const xmark = this.state.password.length > 7 ? ' hidden' : '';
    const errormsg = this.state.password.length > 0 ? 'Your password is too short.' : 'A password is required.';
    return (
      <div className='container'>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <i className={'fa-solid fa-check' + check}></i>
        <i className={'fa-solid fa-xmark' + xmark}></i>
        <p className={'errormsg' + xmark}>{errormsg}</p>
      </div>
    );
  }
}
