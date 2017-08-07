import React, { Component } from 'react';
import { connect } from 'react-redux';


class Transaction extends Component {

  render() {
    const {selectedAccount} = this.props;
    return (
      <div className={this.props.className}>Transaction!
        <div className="my-modal-card">
          <h2>Make a withdrawal:</h2>
          <p>Current account balance: {selectedAccount.balance}</p>
          <div>
            <button className="btn btn-success" value="10" onClick={this.props.onClick}>$10</button>
            <button className="btn btn-primary" value="20" onClick={this.props.onClick}>$20</button>
            <button className="btn btn-info" value="50" onClick={this.props.onClick}>$50</button>
            <button className="btn btn-warning" value="100" onClick={this.props.onClick}>$100</button>
            <button className="btn btn-secondary" value="cancel" onClick={this.props.onClick}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }

}


export default connect(({selectedAccount}) => ({selectedAccount}))(Transaction);
