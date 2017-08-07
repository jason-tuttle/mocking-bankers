import React, { Component } from 'react';
// import { Button } from 'reactstrap';

class Transaction extends Component {


  render() {
    return (
      <div className={this.props.className}>Transaction!
        <div className="my-modal-card">
          <h2>Make a withdrawal:</h2>
          <p>Current account balance:</p>
          <div>
            <button className="btn btn-success">10</button>
            <button className="btn btn-primary">20</button>
            <button className="btn btn-info">50</button>
            <button className="btn btn-warning">100</button>
            <button className="btn btn-secondary" onClick={this.props.onClick}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }

}

export default Transaction;
