import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header>
    <h1 className="header">Budgeting App</h1>
    <div className="option">
      <NavLink className="home" to="/homepage" activeClassName="is-active" >Homepage</NavLink>
      <NavLink to="/create" className="create" activeClassName="is-active">Create Expense</NavLink>
      <NavLink to="/help" className="help" activeClassName="is-active" exact={true}>Help</NavLink>
      <button onClick={startLogout}>Logout</button>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
