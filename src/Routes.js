import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import ProposalForm from './pages/proposal-form';
import ProposalList from './pages/proposal-list';
import Register from './pages/register';
import Login from './pages/login';


function Routes() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/proposal-form' component={ProposalForm} />
            <Route exact path='/proposal-list' component={ProposalList} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </BrowserRouter>
    )
}

export default Routes
