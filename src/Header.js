import React, { Component } from 'react';
import './Header.css';
import Tour from './Tour';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      openTour: false
    }
    this.startTour = this.startTour.bind(this);
    this.onCloseTour = this.onCloseTour.bind(this);
  }

  startTour() {
    this.setState({
      openTour: true
    })
  }

  onCloseTour() {
    this.setState({
      openTour: false
    })
  }

  render() {
    return (
        <div id='header' className="App-header">
          <div className="row" style={{padding: '30px', margin: '0px'}}>
            <div className="col-md-2">
              <span>EXPRESS SCRIPTS</span>
            </div>
            <div className="col-md-3">
              <span>Pricing Database Repository</span>
            </div>
            <div className="col-md-5" />
            <div className="col-md-1">
              <button id='help' type="button" className="Header-button" onClick={this.startTour}>Help</button>
            </div>
            <div className="col-md-1">
              <button id='faq' type="button" className="Header-button">FAQs</button>
            </div>
          </div>
          {this.state.openTour && <Tour
            show={this.state.openTour}
            onClose={this.onCloseTour}
          />}
        </div>
    );
  }
}

export default Header;
