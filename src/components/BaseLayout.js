import React, { Component } from 'react';
import bankImg from  '../images/bank-building.jpg';

class BaseLayout extends Component {


  render() {
    return (
      <div style={{
          backgroundImage: "url('https://media.coindesk.com/uploads/2015/08/bank-building.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'bottom'
        }}>
        <header>
          <h1 className="header title">First ReactBank <small>of InterWebs</small></h1>
          <h3 className="header subtitle">Totally secure.</h3>
        </header>
        <div style={{height: 'calc(100vh - 125px)'}}>
        {this.props.children}
        </div>
      </div>
    );
  }

}

export default BaseLayout;
