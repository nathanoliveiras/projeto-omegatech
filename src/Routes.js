import React,{useContext} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProposalForm from './pages/proposal-form';
import ProposalList from './pages/proposal-list';
import Register from './pages/register';
import Login from './pages/login';
import { Context } from './providers/auth';

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/" />
  }

  return <Route {...rest} />;
}

function Routes() {
  return (
          <Switch>
            <CustomRoute exact path='/' component={Login} />
            <CustomRoute exact isPrivate path='/proposal-form' component={ProposalForm} />
            <CustomRoute exact isPrivate path='/proposal-list' component={ProposalList} />
            <CustomRoute exact path='/register' component={Register} />
          </Switch>
    )
}

export default Routes


