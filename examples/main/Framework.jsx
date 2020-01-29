/**
 * @author Kuitos
 * @since 2019-05-16
 */

import React, { Suspense, Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Find from './pages/Find';
import './index.css';

export default class Framework extends Component{
  
  state = {
    tab: '/login',
    prePath: '/login',
  };

  static getDerivedStateFromProps(prevState, nextProps) {
    const path = window.location.pathname;
    console.log('path', path);
    
    if (path !== prevState.prePath) {
      return {
        prePath: path,
      };
    }
    return null;
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    console.log('token', token);
    const { prePath } = this.state;
    if (!token) {
      console.log('1');
      this.goto('登录', '/login');
    } else {
      this.goto('主页', prePath);
    }
  }

  goto = (title, href) => {
    this.setState({ tab: href });
    console.log('goto fn');
    window.history.pushState({}, title, href);
  }

  render () {
    const { tab } = this.state;
    const { content } = this.props;
    const subApps = ['/vue', '/react'];
    return (
      <Router>
        {/* <header className="header">
            <nav>
              <ol>
                <li><a onClick={() => this.goto('vue app', '/vue')}>vue2 + element2</a></li>
                <li><a onClick={() => this.goto('react app', '/react')}>react16 + antd3</a></li>
                <li><a onClick={() => this.goto('login', '/login')}>login</a></li>
                <li><a onClick={() => this.goto('home', '/')}>home</a></li>
              </ol>
            </nav>
          </header> */}
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/find" component={Find} />
            </Switch>
          </Suspense>
        <div dangerouslySetInnerHTML={{ __html: content }} className="appContainer" />
      </Router>
    );
  }
}
