import React, { Component } from 'react';
import logo from './logo.svg';
import PrimarySearchAppBar  from './components/Appbar/Appbar_.js'
import IconLabelTabs  from './components/Tabs/Tabs.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
              <PrimarySearchAppBar/>
        </div>
        <div>
            <IconLabelTabs/>
      </div>
    </div>

    );
  }
}

export default App;
