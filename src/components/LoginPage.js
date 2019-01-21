import React from 'react';
import { connect } from 'react-redux';
import startLogin from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div>
  <h1 className="header">Budgeting App</h1>
  <h2>This site will allow you to log your expenses and will help you manage your budget</h2>
  <h2>To access your spending please login</h2>
  <button onClick={startLogin}>Login</button>
  </div>
);


export const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
