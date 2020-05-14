import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';

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

interface PageParams {
  id: string;
}

export default function () {
  const history = useHistory();
  const { id } = useParams<PageParams>();
  const [currentData, setCurrentData] = useState<DragonData>();
  const [isSaving, setSaving] = useState<boolean>(false);
  const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

  const defaultValues = useMemo(() => {
    const data = Dragons.byId(id);
    if (data) {
      delete data.id;
      delete data.createdAt;
      return data;
    }
  }, [id]);

  const pageTitle = useMemo(() => {
    if (defaultValues) {
      return `Edit ${defaultValues.name}`;
    }
    return 'Edit dragon';
  }, [defaultValues]);

  const { handleSubmit, register, errors } = useForm<DragonData>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues,
  });

  const onSubmit = useCallback(
    async (values: DragonData) => {
      setSaving(true);
      const success = await Dragons.edit(id, values);
      setSaving(false);
      success && history.replace(`/detail/${id}`);
    },
    [history, id],
  );

  useEffect(() => {
    if (defaultValues) {
      setCurrentData(defaultValues);
    }
  }, [defaultValues]);

  return (
    <Page title={pageTitle} backButton>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Header>
          <Title>{pageTitle}</Title>
        </Header>
        <Field fieldSize="large">
          <TextField
            ref={register({ required: 'Required field' })}
            name="name"
            label="Name"
            defaultValue={currentData && currentData.name}
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
            defaultValue={currentData && currentData.type}
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
            defaultValue={currentData && currentData.imageUrl}
            hasError={errors.imageUrl !== undefined}
          />
          {errors.imageUrl && <HelperText isError>Invalid URL</HelperText>}
        </Field>
        <Field fieldSize="full">
          <MultilineField
            ref={register}
            name="histories"
            label="History"
            defaultValue={currentData && currentData.histories}
          />
        </Field>
        <Footer>
          <Reset onClick={history.goBack}>Cancel</Reset>
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
