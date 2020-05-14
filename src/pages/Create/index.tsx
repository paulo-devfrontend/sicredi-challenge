import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import {
  TextField,
  SelectField,
  MultilineField,
  HelperText,
} from 'components/FormField';
import { LoaderCircular, InderteminateCircle } from 'components/Loading';

import { DragonData } from 'api';

import Dragons from 'model/Dragons';

import Page from 'pages/components/PrivatePage';

import {
  Form,
  Header,
  Title,
  Field,
  Footer,
  Reset,
  Submit,
  Saving,
} from './style';

export default function () {
  const history = useHistory();
  const { handleSubmit, register, errors } = useForm<DragonData>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });
  const [isSaving, setSaving] = useState<boolean>(false);
  const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

  const onSubmit = useCallback(
    async (values: DragonData) => {
      setSaving(true);
      const success = await Dragons.save(values);
      setSaving(false);
      success && history.push('/');
    },
    [history],
  );

  return (
    <Page title="Create a dragon" backButton>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Header>
          <Title>Create a dragon</Title>
        </Header>
        <Field fieldSize="large">
          <TextField
            ref={register({ required: 'Required field' })}
            name="name"
            label="Name"
            hasError={errors.name !== undefined}
          />
          {errors.name && (
            <HelperText isError>{errors.name.message}</HelperText>
          )}
        </Field>
        <Field fieldSize="small">
          <SelectField
            ref={register({ required: 'Required field' })}
            name="type"
            label="Type"
            options={Dragons.availableTypes()}
            hasError={errors.type !== undefined}
          />
          {errors.type && (
            <HelperText isError>{errors.type.message}</HelperText>
          )}
        </Field>
        <Field fieldSize="medium">
          <TextField
            ref={register({ pattern: urlRegex })}
            name="imageUrl"
            type="url"
            label="Image link"
            hasError={errors.imageUrl !== undefined}
          />
          {errors.imageUrl && <HelperText isError>Invalid URL</HelperText>}
        </Field>
        <Field fieldSize="full">
          <MultilineField ref={register} name="histories" label="History" />
        </Field>
        <Footer>
          <Reset>Reset</Reset>
          <Submit>Save</Submit>
        </Footer>
      </Form>
      {isSaving && (
        <Saving>
          <LoaderCircular>
            <InderteminateCircle />
          </LoaderCircular>
        </Saving>
      )}
    </Page>
  );
}
