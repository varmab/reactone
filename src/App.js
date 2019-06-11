import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Todos from './Todos';
import Users from './Users';
import Library from './Library'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Welcome year={2020} password="123456"/>
        </header>
        <Library/>
      </div>
    );
  }
}

export default App;
