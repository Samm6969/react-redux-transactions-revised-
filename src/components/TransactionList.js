import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectTransaction } from "../reducer";
import PropTypes from "prop-types";
import TransactionRow from './TransactionRow';

 class TransactionList extends React.Component {
  render() {
    const transaction = this.props.transaction;
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Acc. No.</th>
            <th>Account Name</th>
            <th>Currency</th>
            <th>Ammount</th>
            <th>Transaction</th>
          </tr>
        </thead>
        <tbody>
          {(this.props.currentTransactions || []).map((item, index) => (
            <TransactionRow transaction={item} key={index} />
          ))}
        </tbody>
      </table>
    );
  }
}


const mapStateToProps = state => {
    return { 
      currentTransactions: state.currentTransactions
   };
  };
  
  const CounterContainer = connect(
    mapStateToProps,
   {}
  )(TransactionList)
  
  export default CounterContainer;
  