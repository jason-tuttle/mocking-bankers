import React, { Component } from 'react';

class BaseLayout extends Component {


  render() {
    return (
      <div>
        <header>
          <h1 className="header title">First ReactBank <small>of InterWebs</small></h1>
          <h3 className="header subtitle">Totally secure.</h3>
        </header>
        {this.props.children}
      </div>
    );
  }

}

export default BaseLayout;
