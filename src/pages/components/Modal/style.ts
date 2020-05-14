import styled from 'styled-components';
import { card, gridContainer, typography, easing } from 'styles';

interface ModalProps {
  isOpen?: boolean;
}

export const ModalBackDrop = styled.div<ModalProps>`
  ${gridContainer}
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.32);
  opacity: ${props => (props.isOpen ? '1' : '0')};
  pointer-events: ${props => (props.isOpen ? 'all' : 'none')};
  transition: opacity 150ms ${easing.standard};
  z-index: 24;
`;

export const ModalCard = styled.div<ModalProps>`
  ${card.container}
  transition-property: transform;
  transition-duration: 150ms;
  transition-timing-function: ${props => {
    if (props.isOpen) return easing.decelerate;
    return easing.accelerate;
  }};
  transform: ${props => (props.isOpen ? 'translateY(0)' : 'translateY(40px)')};

  @media screen and (max-width: 599px) {
    grid-column: 1 / 5;
    height: 100%;
  }

  @media screen and (min-width: 600px) and (max-width: 839px) {
    grid-column: 3 / 7;
  }

  @media screen and (min-width: 840px) {
    grid-column: 5 / 9;
  }
`;

export const ModalHeader = styled.header`
  ${card.section}
  flex-shrink: 0;
  width: 100%;
`;

export const ModalTitle = styled.h3`
  ${typography.headline_3}
  color: ${props => props.theme.primaryText};
`;

export const ModalMessage = styled.div`
  ${card.section}
  flex: auto;
  flex-shrink: 1;
  width: 100%;
  overflow-x: none;
  overflow-y: auto;
  color: ${props => props.theme.primaryText};
`;

export const ModalActions = styled.footer`
  ${card.actions}
  flex-shrink: 0;
  width: 100%;
  justify-content: flex-end;

  @media screen and (max-width: 599px) {
    justify-content: center;
  }
`;
