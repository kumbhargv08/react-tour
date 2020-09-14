import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      invalidUser: false,
      invalidCredentials: false,
    }
  }

  handleLogin = () => {
    console.log(this.state)
    if( this.state.username === 'admin' && this.state.password !== 'admin') {
      this.setState({
        invalidCredentials: true
      })
    } else if (this.state.username !== 'admin' && this.state.password !== 'admin') {
      this.setState({
        invalidUser: true
      })
    } else {
      this.setState({
        invalidUser: false,
        invalidCredentials: false,
      })
    }
  }

  render() {
    let errorMesage = ''
    if(this.state.invalidUser) {
      errorMesage = '* User is not authorized to use PDR UI application';
    } else if(this.state.invalidCredentials){
      errorMesage = '* Invalid Credentials';
    }
    return (
        <div className="container">
        <div className="row">
            <div className="absolute-center is-responsive">
            <div className="col-sm-12 col-md-10 col-md-offset-1">
                <form action="" id="loginForm">
                <div>
                  <div className="login-label">User Name</div>
                  <input className="form-control" type="text" id='username' name='username' placeholder="username" onChange={(e) => this.setState({username: e.target.value})}/>
                </div>
                <div>
                  <div className="login-label">Password</div>
                  <input className="form-control" type="password" id='paasword' name='password' placeholder="password" onChange={(e) => this.setState({password: e.target.value})}/>     
                </div>
                <div className="login-error">{errorMesage}</div>
                <button id='loginbutton' type="button" className="btn btn-primary login-button" onClick={this.handleLogin}>Login</button>
                </form>        
            </div>  
            </div>    
        </div>
        </div>
    );
  }
}

export default Login;
