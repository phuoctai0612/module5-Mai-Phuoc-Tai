import React from 'react';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import Home from './Home'
function Login() {
    const { isLoggedIn, form } = this.state
    if (isLoggedIn) 
    return (<Home onLogOut={this.handleLogOut} />)
    return (
      <div className="container d-flex align-items-center text-center">
        <div className="form-signin">
          <form>
            <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
              <input className="form-control email" type="email" name="email" placeholder="name@example.com" value={form.email} onChange={this.handleChange} />
              <label>Email address</label>
            </div>
            <div className="form-floating">
              <input className="form-control password" type="password" name="password" placeholder="Password" value={form.password} onChange={this.handleChange} />
              <label>Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value={form.isRemember} onChange={this.handleChangeCheckbox} /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.handleSubmit} >Sign in</button>
            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
          </form>
        </div>
      </div>
    )
  }
  export default Login  ;