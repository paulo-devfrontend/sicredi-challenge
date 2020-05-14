import React, { useState, useCallback, useEffect } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

import {
  Container,
  Input,
  Dash,
  Label,
  DropDownIcon,
  DropDownMenu,
  Option,
  BackDrop,
} from './style';

interface Props {
  name?: string;
  label?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  defaultValue?: string;
  className?: string;
  style?: React.CSSProperties;
  hasError?: boolean;
  options?: string[];
}

export default React.forwardRef(
  (props: Props, ref: React.Ref<HTMLInputElement>) => {
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
      options,
    } = props;
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const [isFilled, setIsFilled] = useState<boolean>(
      defaultValue !== undefined && defaultValue.length > 0,
    );
    const [menuIsOpen, toggleMenu] = useState<boolean>(false);
    const [self, setSelf] = useState<HTMLInputElement | null>(null);

    const onSelect = useCallback(
      (value: string) => {
        if (self) {
          self.value = value;
          setIsFilled(value.length > 0);
          toggleMenu(false);
        }
      },
      [self],
    );

    useEffect(() => {
      setIsFilled(defaultValue !== undefined && defaultValue.length > 0);
    }, [defaultValue]);

    return (
      <Container
        className={className}
        style={style}
        hasFoucs={hasFocus}
        isFilled={isFilled}
      >
        <Input
          ref={current => {
            setSelf(current);
            if (typeof ref === 'function') {
              ref(current);
            } else {
              ref = { current };
            }
          }}
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
        <DropDownIcon
          type="button"
          onClick={() => toggleMenu(!menuIsOpen)}
          isOpen={menuIsOpen}
          isActive={hasFocus}
        >
          <MdArrowDropDown />
        </DropDownIcon>
        {label && (
          <Label hasFoucs={hasFocus} isFilled={isFilled} hasError={hasError}>
            {label}
          </Label>
        )}
        <Dash hasFoucs={hasFocus} hasError={hasError} />
        {menuIsOpen && (
          <BackDrop onClick={() => toggleMenu(false)} isOpen={menuIsOpen} />
        )}
        {options && (
          <DropDownMenu isOpen={menuIsOpen}>
            {options.map(option => (
              <Option
                key={option}
                onClick={() => onSelect(option)}
                type="button"
                isActive={self ? self.value === option : false}
              >
                {option}
              </Option>
            ))}
          </DropDownMenu>
        )}
      </Container>
    );
  },
);
