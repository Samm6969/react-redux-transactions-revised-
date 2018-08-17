import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Account.css";
import { filterTransaction } from "../actions/transactionAction";
import { connect } from "react-redux";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.accounts = this.props.accountName;
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
      <section className="filter col-md-12 ">
        <div className="header" onClick={this.toggleFilterDisplay.bind(this)}>
          <div className="name">Account Name</div>
          <svg
            className={this.state.isDisplay ? "down" : "up"}
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
          {this.props.accounts.map((account, idx) => (
            <div key={idx}>
              <label className="input_container">
                {account.name}
                <input
                  type="checkbox"
                  className="checkbox"
                  data-filter={account.name}
                  defaultChecked={account.isChecked}
                  onChange={() => {
                    account.isChecked = !account.isChecked;
                    this.props.filterTransaction(account);
                  }}
                />
                <span className="checkmark" />
              </label>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

Account.propTypes = {
  accounts: PropTypes.array.isRequired,
  filterTransaction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  accounts: state.accountName
});

export default connect(
  mapStateToProps,
  {
    filterTransaction
  }
)(Account);
