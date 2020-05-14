import React, { useState } from 'react';

import { Container, Multiline, Dash, Label } from './style';

interface Props {
  name?: string;
  label?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  defaultValue?: string;
  className?: string;
  style?: React.CSSProperties;
  hasError?: boolean;
}

export default React.forwardRef(
  (props: Props, ref: React.Ref<HTMLTextAreaElement>) => {
    const {
      name,
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
        isMultiline
      >
        <Multiline
          ref={ref}
          name={name}
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
          <Label
            hasFoucs={hasFocus}
            isFilled={isFilled}
            hasError={hasError}
            isMultiline
          >
            {label}
          </Label>
        )}
        <Dash hasFoucs={hasFocus} hasError={hasError} />
      </Container>
    );
  },
);
