import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './containers/Root';
import { startSetExpenses } from './actions/expenses';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import {login, logout} from './actions/auth';
import './styles/styles.scss';
import { firebase} from './firebase/firebase';


const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(<Root />, document.getElementById('root'));
    hasRendered = true;
  }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/homepage')
      }
    })
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
})
