import styled from 'styled-components';
import { easing, card, shadow } from 'styles';

export const Page = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const User = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 8px;
`;

interface UserMenuProps {
  isOpen?: boolean;
}

export const UserMenu = styled.div<UserMenuProps>`
  ${card.container};
  ${shadow(8)}
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 8;
  width: 200px;
  overflow: hidden;
  transform-origin: top right;
  transition: transform 150ms
    ${props => {
      if (props.isOpen) return easing.decelerate;
      return easing.accelerate;
    }};
  transform: ${props => {
    if (props.isOpen) return 'scale(1)';
    return 'scale(0)';
  }};
`;

export const UserData = styled.div`
  ${card.section}
`;

export const UserName = styled.label`
  ${card.title}
`;

export const UserActions = styled.div`
  ${card.actions}
  justify-content: center;
`;

export const BackDrop = styled.div<UserMenuProps>`
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
