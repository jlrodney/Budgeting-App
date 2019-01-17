import React from 'react';
import { connect } from 'react-redux';
import { startRemoveExpense } from '../actions/expenses';

export class RemoveExpensePage extends React.Component {
  onRemove = () => {
    this.props.startRemoveExpense({id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        Are you sure you want to delete "{this.props.expense.description}" expense
        <button onClick={this.onRemove}>Yes! Delete.</button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startRemoveExpense: (id, expense) => dispatch(startRemoveExpense(id, expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoveExpensePage);
