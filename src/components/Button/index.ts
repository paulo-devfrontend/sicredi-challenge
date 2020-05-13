import styled from 'styled-components';
import { typography, shadow, easing } from 'styles';

const Button = styled.button`
  position: relative;
  display: flex;
  min-width: 64px;
  height: 36px;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  ${typography.button}

  &:disabled {
    pointer-events: none;
  }

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

export const ContainedButton = styled(Button)`
  background-color: ${props => props.theme.accent};
  color: white;
  transition: box-shadow 150ms ${easing.standard};
  ${shadow(2)}

  @media screen and (min-width: 840px) {
    &:hover {
      ${shadow(4)}
    }
  }

  &:disabled {
    background-color: ${props => props.theme.focus.surface};
    color: ${props => props.theme.disabledText};
    box-shadow: none;
  }

  &:focus {
    ${shadow(8)}
  }
`;

export const OutlinedButton = styled(Button)`
  border: 1px solid ${props => props.theme.focus.surface};
  color: ${props => props.theme.primaryText};
`;

export const TextButton = styled(Button)`
  padding: 0 8px;
  color: ${props => props.theme.accent};

  &:disabled {
    color: ${props => props.theme.disabledText};
    ${shadow(0)}
  }
`;

interface IconButtonProps {
  isDense?: boolean;
  isActive?: boolean;
}

export const IconButton = styled.button<IconButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.isDense ? '24px' : '40px')};
  height: 40px;

  background-color: transparent;
  border: none;
  color: ${props => {
    if (props.isActive) return props.theme.accent;
    return 'inherit';
  }};
  cursor: pointer;

  > svg {
    width: 24px;
    height: 24px;
  }
`;
