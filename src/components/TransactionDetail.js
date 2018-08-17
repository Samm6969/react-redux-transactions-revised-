import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import data from "../data.json";
import { fetchTransaction } from "../actions/transactionAction";

class TransactionDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="col-2">
          <h1>
            <Link to="/">Home</Link>{" "}
          </h1>
        </div>
        <div className="col-10">
          <h1> Transaction- {this.props.selected_Transaction.account} </h1>
        </div>
        <hr />

        <div className="col-2 heading">Account No: </div>
        <div className="col-10 info">
          {this.props.selected_Transaction.account}
        </div>
        <div className="col-2 heading">Account Name: </div>
        <div className="col-10 info">
          {this.props.selected_Transaction.accountName}
        </div>
        <div className="col-2 heading">Currency Code: </div>
        <div className="col-10 info">
          {this.props.selected_Transaction.currencyCode}
        </div>
        <div className="col-2 heading">Amount:</div>
        <div className="col-10 info">
          {this.props.selected_Transaction.amount}
        </div>
        <div className="col-2 heading">Transaction Type:</div>
        <div className="col-10 info">
          {this.props.selected_Transaction.transactionType}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selected_Transaction: state.selected_Transaction
});

export default connect(
  mapStateToProps,
  {}
)(TransactionDetail);
