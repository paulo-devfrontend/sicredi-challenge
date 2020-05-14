import styled from 'styled-components';
import { easing, typography, card } from 'styles';

import { IconButton } from 'components/Button';

interface FieldProps {
  hasFoucs?: boolean;
  isFilled?: boolean;
  hasError?: boolean;
  isMultiline?: boolean;
}

interface InputProps {
  hasLabel?: boolean;
}

export const Container = styled.label<FieldProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: ${props => {
    if (props.isMultiline) return '104px';
    return '56px';
  }};
  padding: 0 12px;
  margin: 8px 0;
  border-radius: 4px 4px 0 0;
  background-color: ${props => {
    if (props.hasFoucs) return props.theme.focus.surface;
    return props.theme.hover.surface;
  }};
  transition: background-color 0.15s ${easing.standard};
`;

export const Input = styled.input<InputProps>`
  flex: auto;
  height: 24px;
  color: ${props => props.theme.primaryText};
  border: none;
  background-color: transparent;
  caret-color: ${props => props.theme.accent};
  margin-top: ${props => props.hasLabel && '12px'};
  ${typography.body_1}
`;

export const Multiline = styled.textarea<InputProps>`
  flex: auto;
  height: 72px;
  color: ${props => props.theme.primaryText};
  border: none;
  background-color: transparent;
  caret-color: ${props => props.theme.accent};
  margin-top: ${props => props.hasLabel && '12px'};
  ${typography.body_1}
  resize: none;
`;

export const Label = styled.span<FieldProps>`
  ${props => {
    if (props.hasFoucs || props.isFilled || props.isMultiline) {
      return typography.caption;
    }
    return typography.body_1;
  }}
  position: absolute;
  top: ${props =>
    props.hasFoucs || props.isFilled || props.isMultiline ? '16px' : '50%'};
  left: 12px;
  line-height: 16px;
  margin-top: -8px;
  transition-property: all;
  transition-duration: 0.1s;
  transition-timing-function: ${props => {
    if (props.hasFoucs || props.isFilled || props.isMultiline) {
      return easing.accelerate;
    }
    return easing.decelerate;
  }};
  pointer-events: none;
  color: ${props => {
    if (props.hasError) return props.theme.error;
    if (props.hasFoucs) return props.theme.accent;
    if (props.isFilled) return props.theme.primaryText;
    return props.theme.secondaryText;
  }};
`;

export const Dash = styled.div<FieldProps>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: ${props => {
    if (props.hasError) return props.theme.error;
    if (props.hasFoucs) return props.theme.accent;
    return props.theme.primaryText;
  }};
  transition: background-color 0.25s ${easing.standard};

  &::before {
    content: '';
    position: absolute;
    left: ${props => (props.hasFoucs ? '0' : '50%')};
    bottom: 1px;
    width: ${props => (props.hasFoucs ? '100%' : '0')};
    height: 1px;
    background-color: ${props => {
      if (props.hasError) return props.theme.error;
      return props.theme.accent;
    }};
    transition-property: width, left;
    transition-duration: 0.25s;
    transition-timing-function: ${props => {
      if (props.hasFoucs) return easing.decelerate;
      return easing.accelerate;
    }};
  }
`;

interface HelperTextProps {
  isError?: boolean;
}

export const HelperText = styled.p<HelperTextProps>`
  ${typography.caption}
  color: ${props => {
    if (props.isError) return props.theme.error;
    return props.theme.secondaryText;
  }};
  line-height: 1em;
  padding: 0 12px;
  margin-bottom: 4px;
`;

interface DropDownProps {
  isOpen?: boolean;
}

export const DropDownIcon = styled(IconButton)<DropDownProps>`
  color: ${props => {
    if (props.isActive) return props.theme.accent;
    return props.theme.primaryText;
  }};
  transition: transform 150ms ${easing.standard};
  transform: ${props => {
    if (props.isOpen) return 'rotate(180deg)';
    return 'rotate(0)';
  }};
`;

export const DropDownMenu = styled.div<DropDownProps>`
  ${card.container}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 8px 0;
  transition-property: transform;
  transition-duration: 150ms;
  transition-timing-function: ${props => {
    if (props.isOpen) return easing.decelerate;
    return easing.accelerate;
  }};
  transform-origin: top center;
  transform: ${props => {
    if (props.isOpen) return 'scaleY(1)';
    return 'scaleY(0)';
  }};
  z-index: 8;
`;

interface OptionProps {
  isActive?: boolean;
}

export const Option = styled.button<OptionProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  color: ${props => {
    if (props.isActive) return props.theme.disabledText;
    return props.theme.primaryText;
  }};
  background-color: ${props => {
    if (props.isActive) return props.theme.focus.surface;
    return 'transparent';
  }};
  border: none;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    transition: background-color 150ms ${easing.standard};
  }

  &:hover::before {
    background-color: ${props => props.theme.hover.surface};
  }

  &:focus::before {
    background-color: ${props => props.theme.focus.surface};
  }
`;

export const BackDrop = styled.div<DropDownProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: ${props => {
    if (props.isOpen) return 'all';
    return 'none';
  }};
  z-index: 7;
`;
