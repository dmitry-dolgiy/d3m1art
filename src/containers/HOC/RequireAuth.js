import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionCreators from '../../reducers/auth';


export default function (ComposedComponent) {

  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/signin');
      }
    }

    PropTypes = {
      router: PropTypes.object,
    };

    render() {
      return <ComposedComponent { ...this.props } />;
    }
  }

  const mapStateToProps = ({ auth: { authenticated } }) => ({ authenticated });

  return connect(mapStateToProps, actionCreators)(Authentication);
}