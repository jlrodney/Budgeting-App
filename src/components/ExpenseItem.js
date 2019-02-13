import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3 className="list-item__title">{description}</h3>
    <div className="list_item__body">
      <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
      <span className="list-item__data">£{(amount/100).toFixed(2)}</span>
      <span className="edit-link"><Link to={`/edit/${id}`}>Edit</Link></span>
      <span className="remove-link"><Link to={`/remove/${id}`}>Remove</Link></span>
    </div>
  </div>
);

export default ExpenseItem;
