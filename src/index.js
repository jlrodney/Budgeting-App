import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './containers/Root';
import { startSetExpenses } from './actions/expenses';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import './firebase/firebase';


const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(<Root />, document.getElementById('root'));
})
