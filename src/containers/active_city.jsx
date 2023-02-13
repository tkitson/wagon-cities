import React, { Component } from "react";
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    const exists = () => {
      if (this.props.activeCity) {
        return (
          <div className="active-city">
            <h1>{this.props.activeCity.name}</h1>
            <p>{this.props.activeCity.address}</p>
            <img src={this.props.activeCity.image} alt="" />
          </div>
        );
      } else {
        return <div className="active-city"></div>
      }
    };
    return (
      exists()
    );
  }
}


function mapStateToProps(reduxState) {
  return {
    activeCity: reduxState.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
