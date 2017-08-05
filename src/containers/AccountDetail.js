import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class AccountDetail extends Component {
  render() {
    const {accountType, balance} = this.props.account;
    const {user} = this.props;
    return (
      <div>

          <div className="col-md-6">
            <h2>Account Details</h2>
            <h3>Account: <small>{accountType}</small></h3>
            <p>Current Balance: $<span className={accountType !== 'credit' ? 'balance positive' : 'balance negative'}>{balance}</span></p>
            <Link to={`/users/${user._id}`} className="btn btn-primary">Back to User</Link>
          </div>

      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    user: state.selectedUser,
    account: state.selectedAccount
  };
}


export default connect(mapStateToProps)(AccountDetail);
