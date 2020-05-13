import styled from 'styled-components';
import { gridContainer, grid, typography, card } from 'styles';

import { IconButton } from 'components/Button';

export const List = styled.section`
  ${gridContainer}
  width: calc(100% - 32px);
  margin: 16px;
`;

export const Title = styled.h1`
  ${grid(12)}
  ${typography.headline_2}
  color: ${props => props.theme.primaryText};
`;

export const Card = styled.section`
  ${grid(4)}
  ${card.container}
  justify-content: stretch;
  color: ${props => props.theme.primaryText};
`;

interface CardMediaProps {
  imageURL: string;
}

export const CardMedia = styled.div<CardMediaProps>`
  width: 100%;
  height: 300px;
  background-image: url(${props => props.imageURL});
  background-position: center;
  background-size: cover;
`;

export const CardHeadline = styled.header`
  ${card.section}
`;

export const CardTitle = styled.h2`
  ${card.title}
`;

export const CardSubhead = styled.p`
  ${card.tagline}
`;

export const CardActions = styled.footer`
  ${card.actions}
  width: 100%;
  justify-content: space-between;
`;

export const CardActionsIcon = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  > ${IconButton} {
    margin: 0 4px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;
