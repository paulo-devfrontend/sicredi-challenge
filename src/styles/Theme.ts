import { DefaultTheme } from 'styled-components';

const light: DefaultTheme = {
  accent: '#2c681d',
  background: '#eeeeee',
  surface: '#fafafa',
  primaryText: 'rgba(0, 0, 0, 0.87)',
  secondaryText: 'rgba(0, 0, 0, 0.54)',
  disabledText: 'rgba(0, 0, 0, 0.38)',
  error: '#b00020',
  success: '#4caf50',
  hover: {
    surface: 'rgba(0, 0, 0, 0.04)',
    image: 'rgba(0, 0, 0, 0.12)',
  },
  focus: {
    surface: 'rgba(0, 0, 0, 0.12)',
    image: 'rgba(0, 0, 0, 0.36)',
  },
};

const dark: DefaultTheme = {
  accent: '#56bb2d',
  background: '#212121',
  surface: '#424242',
  primaryText: 'rgba(255, 255, 255, 1)',
  secondaryText: 'rgba(255, 255, 255, 0.7)',
  disabledText: 'rgba(255, 255, 255, 0.3)',
  error: '#cf6679',
  success: '#43a047',
  hover: {
    surface: 'rgba(255, 255, 255, 0.08)',
    image: 'rgba(0, 0, 0, 0.12)',
  },
  focus: {
    surface: 'rgba(255, 255, 255, 0.24)',
    image: 'rgba(0, 0, 0, 0.36)',
  },
};

export default { light, dark };
