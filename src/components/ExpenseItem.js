import React from 'react';

const ExpenseItem = ({ id, description, amount, createdAt }) => (
  <div>
      <h3>{description}</h3>
    <p>Amount: £{amount/100} - Date: {createdAt}</p>
  </div>
);

export default ExpenseItem;
