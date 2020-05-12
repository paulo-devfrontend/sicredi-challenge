import { css } from 'styled-components';

export const gridContainer = css`
  display: grid;
  width: 100%;
  grid-template-rows: auto;

  @media screen and (max-width: 599px) {
    gap: 16px;
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 600px) and (max-width: 719px) {
    gap: 16px;
    grid-template-columns: repeat(8, 1fr);
  }

  @media screen and (min-width: 720px) and (max-width: 839px) {
    gap: 24px;
    grid-template-columns: repeat(8, 1fr);
  }

  @media screen and (min-width: 840px) {
    gap: 24px;
    grid-template-columns: repeat(12, 1fr);
  }
`;

export interface IntoGridProps {
  cols?: number;
}

type GridSizes = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

function smallGrid(size: GridSizes) {
  return `auto / span ${size <= 4 ? size : 4}`;
}

function mediumGrid(size: GridSizes) {
  return `auto / span ${size <= 8 ? size : 8}`;
}

function largeGrid(size: GridSizes) {
  return `auto / span ${size}`;
}

export const grid = (
  sizeOne: GridSizes,
  sizeTwo?: GridSizes,
  sizeThree?: GridSizes,
) => css`
  @media screen and (max-width: 599px) {
    grid-column: ${() => smallGrid(sizeOne)};
  }

  @media screen and (min-width: 600px) and (max-width: 839px) {
    grid-column: ${() => {
      if (!sizeTwo && !sizeThree) {
        return mediumGrid(sizeOne);
      } else if (sizeTwo && !sizeThree) {
        return mediumGrid(sizeOne);
      } else if (sizeTwo && sizeThree) {
        return mediumGrid(sizeTwo);
      }
    }};
  }

  @media screen and (min-width: 840px) {
    grid-column: ${() => {
      if (!sizeTwo && !sizeThree) {
        return largeGrid(sizeOne);
      } else if (sizeTwo && !sizeThree) {
        return largeGrid(sizeTwo);
      } else if (sizeTwo && sizeThree) {
        return largeGrid(sizeThree);
      }
    }};
  }
`;
