import React, { Component } from "react";

class City extends Component {
  // handleClick = () => {
  //   this.props.selectFunction(this.props.id)
  // }

  render() {
    return (
      <div className="list-group-item" onClick={this.handleClick}>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default City;
