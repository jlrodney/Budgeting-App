import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h2>{description}</h2>
    <span className="data">Amount: £{amount/100} - Timestamp: {createdAt}</span>
    <span className="edit-link"><Link to={`/edit/${id}`}>Edit</Link></span>
    <span className="remove-link"><Link to={`/remove/${id}`}>Remove</Link></span>
  </div>
);

export default ExpenseItem;
