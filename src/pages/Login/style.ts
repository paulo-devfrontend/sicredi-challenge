import styled from 'styled-components';
import {
  card,
  typography,
  slideUp,
  easing,
  gridContainer,
  shadow,
} from 'styles';

import { Toolbar } from 'components/Toolbar';

import BgImage from 'images/bg.jpg';

export const Page = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.accent};
  background-image: url(${BgImage});
  background-size: cover;
  ${gridContainer}
`;

export const Card = styled.section`
  ${card.container}
  width: 100%;
  max-height: calc(100% - 48px);

  @media screen and (max-width: 599px) {
    grid-column: 1 / 5;
    margin: 0 16px;
    max-width: calc(100% - 32px);
  }

  @media screen and (min-width: 600px) and (max-width: 839px) {
    grid-column: 3 / 7;
  }

  @media screen and (min-width: 840px) {
    grid-column: 5 / 9;
  }
`;

export const TopBar = styled(Toolbar)`
  ${shadow(0)}
`;

export const Header = styled.header`
  ${card.section}
`;

export const Headline = styled.hgroup`
  ${card.headline}
`;

export const Title = styled.h1`
  ${card.title}
`;

export const Tagline = styled.h2`
  ${card.tagline}
`;

export const Form = styled.form`
  ${card.section}
`;

export const ErrorMessage = styled.ins`
  ${card.section}
  ${typography.subtitle_2}
  position: relative;
  color: ${props => props.theme.error};
  text-decoration: none;
  transform: scaleY(0);
  animation-duration: 0.15s;
  animation-timing-function: ${easing.decelerate};
  animation-fill-mode: forwards;
  animation-name: ${slideUp};

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.error};
    opacity: 0.2;
  }
`;
