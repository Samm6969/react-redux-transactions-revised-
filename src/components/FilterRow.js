import React,{Component} from 'react';
import { connect } from 'react-redux';

class FilterRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
  
  handleFilterChange(e) { 
    this.props.handleFilterChange(this.props.value);
  }
  
  render() {
    return (
        <div>
            <input
                type="checkbox"
                data-filter={this.props.value}
                checked={this.props.isChecked}
                onChange={this.handleFilterChange}
            />
            {this.props.value}
        </div>
        );
  }
}

export default FilterRow;