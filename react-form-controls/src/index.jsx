import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    console.log('state:', this.state);
    event.preventDefault();
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label htmlFor="username">Username
        <input type="username" id="username" value={this.state.username} onChange={this.handleUsernameChange} />
      </label>
      <label htmlFor="password">Password
          <input type="password" id="password" value={this.state.password} onChange={this.handlePasswordChange} />
      </label>
      <button type="submit">Sign Up</button>
    </form>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RegistrationForm />);
