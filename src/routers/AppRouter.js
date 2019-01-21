import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Homepage from '../components/Homepage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import RemoveExpensePage from '../components/RemoveExpensePage';
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import '../styles/styles.scss';
import PrivateRoute from './PrivateRoute';
import PublicRoutes from './PublicRoutes';


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoutes path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/homepage" component={Homepage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <PrivateRoute path="/remove/:id" component={RemoveExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
