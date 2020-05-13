import { SVGProps } from 'react';

import styled from 'styled-components';
import { dash, rotate, easing } from 'styles';

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const LoaderCircular = styled.svg`
  width: 48px;
  height: 48px;
  animation: ${rotate} 2s linear infinite;
`;

export const InderteminateCircle = styled.circle.attrs(
  (): SVGProps<SVGCircleElement> => ({
    cx: 24,
    cy: 24,
    r: 20,
    strokeWidth: 4,
    strokeMiterlimit: 10,
    fill: 'none',
  }),
)`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: ${dash} 1.5s ${easing.standard} infinite;
  stroke-linecap: round;
  stroke: ${props => props.theme.accent};
`;
