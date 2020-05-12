import React, { useState, useCallback } from 'react';
import { AppTheme } from 'react-app-env';

import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyle } from 'styles';

import Settings from 'model/Settings';

import AppContext from 'AppContext';
import Router from 'Router';

export default function () {
  const [theme, setTheme] = useState<AppTheme>(Settings.theme);

  const switchTheme = useCallback((value: AppTheme) => {
    setTheme(value);
    Settings.theme = value;
  }, []);

  return (
    <AppContext.Provider value={{ theme, switchTheme }}>
      <ThemeProvider theme={Theme[theme]}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </AppContext.Provider>
  );
}
