import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Budgeting App</h1>
    <NavLink className="home" to="/" activeClassName="is-active" exact={true}>Homepage</NavLink>
    <NavLink to="/create" className="create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/help" className="help" activeClassName="is-active" exact={true}>Help</NavLink>
  </header>
);

export default Header;
