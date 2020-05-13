import { css } from 'styled-components';

import shadow from './shadow';
import typography from './typography';

export default {
  container: css`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.surface};
    border-radius: 4px;
    ${shadow(1)}
  `,
  section: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 16px;
  `,
  headline: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `,
  title: css`
    ${typography.headline_6}
    color: ${props => props.theme.primaryText};
  `,
  tagline: css`
    ${typography.subtitle_2}
    color: ${props => props.theme.secondaryText};
  `,
  actions: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
  `,
};
