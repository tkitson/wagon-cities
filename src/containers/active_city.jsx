import React, { Component } from "react";
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    console.log(this.props.activeCity);
    return (
      <div className="active-city">
        <h1>{this.props.activeCity ? this.props.activeCity.name : ''}</h1>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    activeCity: reduxState.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
