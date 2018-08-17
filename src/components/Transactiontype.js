import React, { Component } from "react";
import PropTypes from "prop-types";
import store from "../store";
import "./Account.css";
import {filterTransaction} from '../actions/transactionAction';
import { connect } from 'react-redux';

class TransactionType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: true
    };
  }

  toggleFilterDisplay() {
    const isDisplay = !this.state.isDisplay;
    this.setState({ isDisplay });
  }
  render() {
    return (
      <section className="col-md-12 filter ">
        <div className="header" onClick={this.toggleFilterDisplay.bind(this)}>
          <div className="name">Transaction Type</div>
          <svg
            className={this.state.isDisplay ? "down" : "up" }
            width="16"
            height="27"
            viewBox="0 0 16 27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
              fill="#878787"
            />
          </svg>
        </div>
        <div
          className="list"
          style={{ display: this.state.isDisplay ? "block" : "none" }}
        >
          { this.props.transactionType.map((transaction, idx) => (
            <div key={idx}>
              <label className="input_container">
                {transaction.name}
                <input
                  type="checkbox"
                  className="checkbox"
                  data-filter={transaction.name}
                  onChange={()=>{
                    transaction.isChecked=!transaction.isChecked;
                    this.props.filterTransaction(transaction);
                  }}/>
                <span className="checkmark" />
              </label>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

TransactionType.propTypes={
  filterTransaction: PropTypes.func.isRequired,
  transactionType: PropTypes.array.isRequired
}

const mapStateToProps=state=>({
  transactionType: state.transactionType
})

export default connect(mapStateToProps,{filterTransaction})(TransactionType)