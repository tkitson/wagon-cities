import React, { Component } from "react";
import City from './city';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
    // TODO: dispatch an action to load flats!
  }
  renderList = () => {
    return this.props.cities.map((city) => {
      return <City key={city.address} name={city.name} image={`https://kitt.lewagon.com/placeholder/cities/${city.slug}`} address={city.address} />;
    });
  }
  render() {
    return (
      <div className="cities">
        {this.renderList()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    cities: reduxState.cities
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(CityList);
