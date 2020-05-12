import React, { useState } from 'react';

import { Container, Input, Dash, Label } from './style';

type TextFieldTypes = 'text' | 'password';

interface TextFieldProps {
  name?: string;
  type?: TextFieldTypes;
  label?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  defaultValue?: string;
  className?: string;
  style?: React.CSSProperties;
  hasError?: boolean;
}

export default React.forwardRef(
  (props: TextFieldProps, ref: React.Ref<HTMLInputElement>) => {
    const {
      name,
      type = 'text',
      placeholder,
      label,
      onChange,
      onBlur,
      onFocus,
      defaultValue,
      className,
      style,
      hasError,
    } = props;
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const [isFilled, setIsFilled] = useState<boolean>(
      defaultValue !== undefined && defaultValue.length > 0,
    );

    return (
      <Container
        className={className}
        style={style}
        hasFoucs={hasFocus}
        isFilled={isFilled}
      >
        <Input
          ref={ref}
          name={name}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={event => {
            setIsFilled(event.currentTarget.value.length > 0);
            onChange && onChange(event);
          }}
          onBlur={event => {
            setHasFocus(false);
            onBlur && onBlur(event);
          }}
          onFocus={event => {
            setHasFocus(true);
            onFocus && onFocus(event);
          }}
          hasLabel={label !== undefined}
        />
        {label && (
          <Label hasFoucs={hasFocus} isFilled={isFilled} hasError={hasError}>
            {label}
          </Label>
        )}
        <Dash hasFoucs={hasFocus} hasError={hasError} />
      </Container>
    );
  },
);
