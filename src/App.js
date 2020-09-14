import React, { Component } from 'react';
import Login from './Login';
import Header from './Header';
import Footer from './Footer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="App-content">
          <Login />
        </div> 
        <Footer />
      </div>
    );
  }
}

export default App;
