import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Navbar from '../includes/Navbar';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import $ from 'jquery';
import registerServiceWorker from '../../registerServiceWorker';
import axios from 'axios';

class Login extends Component {

  state = {
    name: '',
    email: '',
    password: '',
  }

  componentDidMount() {
     $(".input-button button").click(function(event) {

     $(".form-wrapper").addClass("send");
   });
  }
  handleNameChange = event => {
    this.setState({
      name: event.target.value,
  });
  }
  handleEmailChange = event => {
    this.setState({
      email: event.target.value,
  });
  }
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value,
  });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
          console.log(user.name);
    axios.post('/api/users/login', this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(error => {
    console.log(error.response)
});
  }

  render() {

    return (
<div className="form-body ">

    <div className="col-md-3 form-side-header">
        <h2 style={{color: 'white'}}>Login to start watching your favorite films!</h2>
        <h4>

            ..Or head back <i className="fas fa-arrow-left"></i>

        </h4>
    </div>
    <form className="form-wrapper col-md-4 form-header" onSubmit={this.handleSubmit}>
        <h2 className="form-title ">Login to <span className="kcflix">KC-FLIX</span></h2>

        <div className="success">
          <i className="fa fa-check fa-3x"></i>
          <h1>Thank you for subscribing</h1>
        </div>

        <div className="input-text">
          <input type="text" id="label1" placeholder="Name" name="name"
          onChange={this.handleNameChange}
          value={this.state.name} />
          <label htmlFor="label1">Name</label>
        </div>

        <div className="input-text">
          <input type="text" id="label2" placeholder="E-mail" name="email"
          onChange={this.handleEmailChange}
          value={this.state.email} />
          <label htmlFor="label2">E-mail</label>
        </div>

        <div className="input-text">
          <input type="text" id="label3" placeholder="Password" name="password"
          onChange={this.handlePasswordChange}
          value={this.state.password} />
          <label htmlFor="label3">Password</label>
        </div>

        <div className="input-button">
          <button type="submit"><i className="fa fa-paper-plane"></i></button>
        </div>

    </form>
</div>
    );
  }
} export default Login;