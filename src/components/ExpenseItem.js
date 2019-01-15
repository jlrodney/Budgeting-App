import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseItem = ({ id, description, amount, createdAt }) => (
  <div className="individual-expense">
    <h2>{description}</h2>
    <span className="data">
    Amount: £{(amount/100).toFixed(2)} - Date: {moment(createdAt).format('Do MMMM YYYY')}
    </span>
    <span className="edit-link"><Link to={`/edit/${id}`}>Edit</Link></span>
    <span className="remove-link"><Link to={`/remove/${id}`}>Remove</Link></span>
  </div>
);

export default ExpenseItem;
