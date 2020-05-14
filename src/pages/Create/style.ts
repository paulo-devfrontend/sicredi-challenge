import styled from 'styled-components';
import { card, gridContainer, typography, grid } from 'styles';

import { OutlinedButton, ContainedButton } from 'components/Button';
import { Loader } from 'components/Loading';

export const Form = styled.form`
  ${card.container}
  ${gridContainer}
  padding: 16px;

  @media screen and (min-width: 720px) {
    width: calc(100% - 48px);
    margin: 24px;
  }

  @media screen and (mix-width: 600px) and (max-width: 719px) {
    width: calc(100% - 32px);
    margin: 16px;
  }
`;

export const Header = styled.header`
  ${card.section}
  ${grid(12)}
  padding: 0;
`;

export const Title = styled.h1`
  ${typography.headline_3}
  color: ${props => props.theme.primaryText};
`;

interface FieldProps {
  fieldSize: 'small' | 'medium' | 'large' | 'full';
}

export const Field = styled.div<FieldProps>`
  ${props => {
    switch (props.fieldSize) {
      case 'full':
        return grid(12);
      case 'large':
        return grid(8);
      case 'medium':
        return grid(4, 6);
      default:
        return grid(4);
    }
  }}
`;

export const Reset = styled(OutlinedButton).attrs(() => ({
  type: 'reset',
}))`
  @media screen and (max-width: 599px) {
    width: 100%;
    margin-block-end: 8px;
  }

  @media screen and (min-width: 600px) {
    margin-inline-end: 8px;
  }
`;

export const Submit = styled(ContainedButton).attrs(() => ({
  type: 'submit',
}))`
  @media screen and (max-width: 599px) {
    width: 100%;
  }
`;

export const Footer = styled.footer`
  ${grid(12)}
  ${card.actions}

  @media screen and (max-width: 599px) {
    flex-direction: column;
  }

  @media screen and (min-width: 600px) {
    justify-content: flex-end;
  }
`;

export const Saving = styled(Loader)`
  position: fixed;
  background-color: ${props => props.theme.hover.image};
`;
