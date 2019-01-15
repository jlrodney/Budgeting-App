import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1 className="header">Budgeting App</h1>
    <div className="option"><NavLink className="home" to="/" activeClassName="is-active" exact={true}>Homepage</NavLink>
      <NavLink to="/create" className="create" activeClassName="is-active">Create Expense</NavLink>
      <NavLink to="/help" className="help" activeClassName="is-active" exact={true}>Help</NavLink>
    </div>
  </header>
);

export default Header;
