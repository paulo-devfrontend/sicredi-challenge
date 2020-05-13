import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  RouteProps,
  Redirect,
} from 'react-router-dom';

import User from 'model/Auth';

import DetailPage from 'pages/Detail';
import HomePage from 'pages/Home';
import LoginPage from 'pages/Login';

const PrivateRoute: React.FC<RouteProps> = ({
  children,
  ...rest
}: RouteProps) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return User.isSigned() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: location,
              },
            }}
          />
        );
      }}
    />
  );
};

export default function () {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact>
          <HomePage />
        </PrivateRoute>
        <PrivateRoute path="/detail/:id">
          <DetailPage />
        </PrivateRoute>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
