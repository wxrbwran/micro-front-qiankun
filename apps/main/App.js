// import { Button, Modal, version as antdVersion } from 'antd';
// import 'antd/dist/antd.min.css';
import React, { lazy, Suspense, Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Find from './pages/Find';
import Framework from './Framework';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <Router>
        <div className="App">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/find" component={Find} />
              <Route path="/" component={Framework} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    );
  }
}


export default App;
