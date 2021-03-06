import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Login, Register, Users } from 'containers';

import { AppRoutesProps } from 'types';

const unauthorizedRoutes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/register' component={Register} />
      <Redirect from='*' to='/' />
    </Switch>
  );
};

const authorizedRoutes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path='/' component={Users} />
      <Redirect from='*' to='/' />
    </Switch>
  );
};

const Routes: FC<AppRoutesProps> = (props: AppRoutesProps): JSX.Element => {
  const { isAuthenticated = false } = props;
  return isAuthenticated ? authorizedRoutes() : unauthorizedRoutes();
};

export default Routes;
