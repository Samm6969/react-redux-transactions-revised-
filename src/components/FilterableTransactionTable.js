import React, { Component } from "react";
import logo from "../logo.svg";
import "./FilterableTransactionTable.css";
import TransactionRow from "./TransactionRow.js";
import Pagination from "./Pagination";
import data from "../data.json";
import { fetchTransaction } from "../actions/transactionAction";
import Account from "./Account";
import TransactionType from "./Transactiontype";
import TransactionList from "./TransactionList";
import { connect } from "react-redux";

class FilterableTransactionTable extends React.Component {
  constructor(props) {
    super(props);
    fetchTransaction();
  }

  componentWillMount() {
    fetchTransaction();
  }
  componentDidMount() {
    this.render();
  }

  render()  {
    return (
      <div className="container">
        <div className="top_header">
          <h2>My Transactions</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <Account />
              <TransactionType />
            </div>
          </div>
          <div className="col-md-8 ">
            <TransactionList />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-8 ">
            <Pagination />
          </div>
        </div>
      </div>
    );
  };
}

const CounterContainer = connect(
  state =>{ currentTransactions: state.currentTransactions},
  {fetchTransaction}
)(FilterableTransactionTable);

export default CounterContainer;
