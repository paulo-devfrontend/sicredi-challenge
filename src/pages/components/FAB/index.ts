import styled from 'styled-components';
import { shadow, easing } from 'styles';

const FAB = styled.button`
  position: fixed;
  right: 16px;
  bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.theme.accent};
  color: white;
  transition: box-shadow 150ms ${easing.standard};
  cursor: pointer;
  ${shadow(6)}

  &:focus {
    ${shadow(12)}
  }

  > svg {
    width: 24px;
    height: 24px;
  }
`;

export default FAB;
