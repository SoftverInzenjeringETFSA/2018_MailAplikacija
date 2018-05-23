import React, { Component } from 'react';
import axios from 'axios';
import './App.css'
class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '', 
      error: ''
    };
  }

  onChange = (e) => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { username, email, password, error } = this.state;

    axios.post('http://localhost:3001/users/account/add', { username, email, password })
      .then((result) => {
        console.log(result);
        if(result.data.hasOwnProperty('message')) {
          this.setState({
            username: username,
            email: email,
            password: password,
            error: result.data.message
          });
        } else {
          this.setState({
            username: '',
            email: '',
            password: '',
            error: result.data
          });
        }
        document.getElementById('error').innerHTML = this.state.error;          
        
      });

  }

  render() {
    const { username, email, password, error } = this.state;
    return (
      <div id="parent">
        <form id="form_login" onSubmit={this.onSubmit}>
          <p>
          Username:
          </p>
          <p>
          <input type="text" name="username" value={username} onChange={this.onChange} />
          </p>
          Email:
          <p>
          <input type="email" name="email" value={email} onChange={this.onChange} />
          </p>
          Password:
          <p>
          <input type="password" name="password" value={password} onChange={this.onChange} />
          </p>
          <p>
          <button type="submit">Submit</button>
          </p>
          <label id="error" value={error}></label>
        </form>
      </div>
    );
  }
}
export default App;