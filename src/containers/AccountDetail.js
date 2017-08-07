import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { withdrawFunds } from '../actions/index';
import Transaction from '../components/Transaction';

const modalClasses = {
  open: 'my-modal my-modal-show',
  closed: 'my-modal my-modal-closed'
};

class AccountDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    }
  }

  toggleModal = () => {
    console.log("toggle modal");
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    })
  }

  render() {
    const {accountType, balance} = this.props.account;
    const {user} = this.props;
    const isOpen = this.state.modalIsOpen;

    return (
      <div>

          <div className="col-md-6">
            <div className="card">
              <h2 className="card-title">Account Details</h2>
              <h3 className="card-subtitle">Account: <small>{accountType}</small></h3>
              <p className="card-text">Current Balance: $<span className={accountType !== 'credit' ? 'balance positive' : 'balance negative'}>{balance}</span></p>
              <button className="btn btn-danger" onClick={this.toggleModal}>Withdraw Funds</button>
              <Link to={`/users/${user._id}`} className="btn btn-primary">Back to User</Link>
              <Transaction className={isOpen ? modalClasses.open : modalClasses.closed} onClick={this.toggleModal} />
            </div>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    withdrawFunds
  });
}


export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail);
