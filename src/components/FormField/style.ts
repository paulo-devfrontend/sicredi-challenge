import styled from 'styled-components';
import { easing, typography } from 'styles';

interface FieldProps {
  hasFoucs?: boolean;
  isFilled?: boolean;
  hasError?: boolean;
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
  height: 56px;
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

export const Label = styled.span<FieldProps>`
  ${props => {
    if (props.hasFoucs || props.isFilled) {
      return typography.caption;
    }
    return typography.body_1;
  }}
  position: absolute;
  top: ${props => (props.hasFoucs || props.isFilled ? '16px' : '50%')};
  left: 12px;
  line-height: 16px;
  margin-top: -8px;
  transition-property: all;
  transition-duration: 0.1s;
  transition-timing-function: ${props => {
    if (props.hasFoucs || props.isFilled) {
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
