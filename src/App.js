import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter , Route } from 'react-router-dom'
import './App.css';
import UserSchedule from './containers/userSchedule';
import {Logo} from './components/logo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <MuiThemeProvider>
            <div className="container">
              <Logo/>
              <Route path="/user/:id/schedule" component={UserSchedule}/>
            </div>
          </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
