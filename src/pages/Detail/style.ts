import styled from 'styled-components';
import { card, typography } from 'styles';

export const Card = styled.section`
  ${card.container}

  @media screen and (min-width: 720px) {
    margin: 24px;
  }

  @media screen and (mix-width: 600px) and (max-width: 719px) {
    margin: 16px;
  }
`;

export const Header = styled.header`
  ${card.section}
`;

export const Title = styled.h1`
  ${typography.headline_3}
  color: ${props => props.theme.primaryText};
`;

export const CreationDate = styled.label`
  ${card.tagline}
`;

interface MediaContainerProps {
  imageURL: string;
}

export const MediaContainer = styled.div<MediaContainerProps>`
  ${card.section}
  align-items: center;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.imageURL});
    background-position: center;
    background-size: cover;
    filter: blur(10px);
  }
`;

export const Media = styled.img`
  position: relative;
  display: block;
  max-width: 100%;
  height: auto;
  z-index: 1;
`;

export const Info = styled.dl`
  ${card.section}
`;

export const Term = styled.dt`
  ${typography.headline_5}
  color: ${props => props.theme.primaryText};
  line-height: 2em;
`;

export const Description = styled.dd`
  ${typography.body_1}
  color: ${props => props.theme.primaryText};
  line-height: 1.5;
  white-space: pre-line;
`;
