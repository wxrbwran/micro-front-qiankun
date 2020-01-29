/**
 * @author Kuitos
 * @since 2019-05-16
 */

import React, { Component } from 'react';

export default class Login extends Component{

  goto = (title, href) => {
    window.history.pushState({}, title, href);
  }

  handleLogin = (page) => {
    localStorage.setItem('token', 'login')
    this.goto('主页', page)
  }
/*
  <header className="header">
          <nav>
            <ol>
              <li><a onClick={() => this.goto('vue app', '/vue')}>vue2 + element2</a></li>
              <li><a onClick={() => this.goto('react app', '/react')}>react16 + antd3</a></li>
              <li><a onClick={() => this.goto('login', '/login')}>login</a></li>
              <li><a onClick={() => this.goto('home', '/')}>home</a></li>
            </ol>
          </nav>
        </header>
*/
  render () {
    console.log('Login')
    return (
      <>
        <header className="header">
          这是登录页面
          <a onClick={() => this.goto('找回密码', '/find')}>find</a>
          <br />>
          <a onClick={() => this.handleLogin('/react')}>登录react</a>
          <br />>
          <a onClick={() => this.handleLogin('/vue')}>登录vue</a>
        </header>
      </>
    );
  }
}
