import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu';
import { withStyles } from '@material-ui/core/styles/index';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import NoRequireAuth from '../../containers/HOC/NoRequireAuth';
import './Menu.css';

class MainMenu extends Component {

  getSignOutItem() {
    return (
      <span
        onClick={ () => this.props.signOutAction(this.props.history) }
        style={ { cursor: 'pointer' } }
        className={ classNames(this.props.classes.title, 'bm-particle-item bm-sign-out') }>
        Sign out
      </span>
    );
  }

  render() {
    return (
      <Menu { ...this.props }>
        <div className="menu-item">
          <NavLink
            to='/'
            className={ classNames(this.props.classes.title, 'bm-particle-item') }>
            Home
          </NavLink>
          { this.getSignOutItem() }
        </div>
      </Menu>
    );
  }
}

const commonItemStyle = {
  display: 'inline-block',
  color: '#EEE',
  textDecoration: 'none',
  '&:hover': {
    color: '#9E9E9E',
  }
};

const styles = theme => ({
  root: {
    color: theme.palette.text.primary
  },
  iconHover: {},
  title: {
    ...commonItemStyle,
  }
});

export default NoRequireAuth(withStyles(styles)(MainMenu));
