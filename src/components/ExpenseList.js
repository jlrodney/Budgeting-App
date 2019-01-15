import React from 'react';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseItem';

export const ExpenseList = (props) => (
  <div>
  <br/>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
          props.expenses.map((expense) => {
            return <ExpenseItem key={expense.id} {...expense} onRemove={props.onRemove} />;
          })
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  };
};




export default connect(mapStateToProps)(ExpenseList);
