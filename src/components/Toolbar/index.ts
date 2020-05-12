import styled from 'styled-components';
import { shadow, typography } from 'styles';

import { IconButton } from 'components/Button';

interface ToolbarProps {
  isFixed?: boolean;
}

export const Toolbar = styled.header<ToolbarProps>`
  position: ${props => props.isFixed && 'sticky'};
  z-index: ${props => props.isFixed && '4'};
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;

  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;

  background-color: ${props => props.theme.surface};
  color: ${props => props.theme.primaryText};
  ${shadow(4)}
`;

export const NavButton = styled(IconButton)`
  order: 1;
  flex-shrink: 0;
  margin: 8px;
`;

export const ToolbarTitle = styled.label`
  ${typography.headline_6}
`;

export const ToolbarContent = styled.div`
  order: 2;
  flex: auto;
  margin-left: 24px;
  margin-inline-start: 24px;
`;

export const ToolbarActions = styled.div`
  order: 3;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  > ${IconButton} {
    margin: 8px;
  }
`;
