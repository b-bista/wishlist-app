import React from 'react';
import {Provider, connect} from 'react-redux';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import './App.css';
import store from './store.js'
import NavBar from './components/NavBar.js';
import CreateList from './components/CreateList.js';
import LandingPage from './pages/LandingPage/containers/LandingPage';
import HomePage from './pages/HomePage/containers/HomePage';
import MyListsPage from './pages/MyListsPage/containers/MyListsPage';

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          
            <Router>
            <NavBar/>
              <div style={{textAlign: 'center', maxWidth: '800px', margin: 'auto'}}>
                  <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/home" component={HomePage} />
                    <Route path="/create-list" component={CreateList} />
                    <Route path="/my-lists" component={MyListsPage} />
                  </Switch>
              </div>
            </Router>
        </Provider>
    );
  }
}


export default App;
