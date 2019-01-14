import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import AppRouter from '../routers/AppRouter';
import '../styles/styles.scss';


const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

export default Root;
