import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';

import { ContainedButton } from 'components/Button';
import { TextField, HelperText } from 'components/FormField';

import User from 'model/Auth';

import { Form, ErrorMessage } from './style';

interface LoginForm {
  username: string;
  password: string;
}

interface LoginStateFrom {
  pathname: string;
  search: string;
  state: any;
  hash: string;
  key?: string;
}

interface LoginState {
  from: LoginStateFrom;
}

export default function () {
  const history = useHistory();
  const location = useLocation<LoginState>();
  const { register, handleSubmit, errors } = useForm<LoginForm>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const [error, setError] = useState<string>();

  const onSubmit = useCallback(
    async (values: LoginForm) => {
      const { username, password } = values;
      try {
        const success = User.login(username, password);
        success &&
          history.push(location.state.from.pathname, location.state.from.state);
      } catch (error) {
        setError(error.message);
      }
    },
    [history, location],
  );

  return (
    <React.Fragment>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form id="" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="username"
          label="Username"
          ref={register({
            required: {
              value: true,
              message: 'Required field',
            },
          })}
          hasError={errors.username !== undefined}
        />
        {errors.username && (
          <HelperText isError>{errors.username.message}</HelperText>
        )}
        <TextField
          name="password"
          type="password"
          label="Password"
          ref={register({
            required: {
              value: true,
              message: 'Required field',
            },
          })}
          hasError={errors.password !== undefined}
        />
        {errors.password && (
          <HelperText isError>{errors.password.message}</HelperText>
        )}
        <ContainedButton type="submit">Enter</ContainedButton>
      </Form>
    </React.Fragment>
  );
}
