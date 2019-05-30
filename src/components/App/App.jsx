import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from '../../containers/SignIn';
import MainPage from '../../containers/MainPage';
import RequireAuth from '../../containers/HOC/RequireAuth';
import NoRequireAuth from '../../containers/HOC/NoRequireAuth';
import LoadingBar from 'react-redux-loading-bar';

class App extends Component {

  render() {
    return (
      <div id='App'>
        <LoadingBar showFastActions />
        <Router>
          <Route path={ process.env.PUBLIC_URL + '/' } exact component={ RequireAuth(MainPage) } />
          <Route path={ process.env.PUBLIC_URL + '/signin' } component={ NoRequireAuth(SignIn) } />
        </Router>
      </div>
    );
  }
}

export default App;
