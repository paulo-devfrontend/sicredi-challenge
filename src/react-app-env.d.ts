/// <reference types="react-scripts" />
import 'styled-components';

interface States {
  surface: string;
  image: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    accent: string;
    background: string;
    surface: string;
    primaryText: string;
    secondaryText: string;
    disabledText: string;
    error: string;
    success: string;
    hover: States;
    focus: States;
  }
}

type AppTheme = 'light' | 'dark';
