import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import App from './App';
import ProposalForm from './pages/proposal-form';
import ProposalList from './pages/proposal-list';
import Register from './pages/register';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/proposal-form' component={ProposalForm} />
      <Route exact path='/proposal-list' component={ProposalList} />
      <Route exact path='/register' component={Register} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
