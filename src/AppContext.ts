import React from 'react';
import { AppTheme } from 'react-app-env';

interface AppContext {
  theme: AppTheme;
  switchTheme: (value: AppTheme) => void;
}

export default React.createContext<AppContext>({
  theme: 'light',
  switchTheme: () => {},
});
