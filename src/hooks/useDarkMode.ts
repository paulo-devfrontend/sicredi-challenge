import { useCallback, useContext, useMemo } from 'react';

import AppContext from 'AppContext';

interface useNightLightHook {
  toggleDarkMode: () => void;
  inDarkMode: boolean;
}

export default function (): useNightLightHook {
  const { theme, switchTheme } = useContext(AppContext);

  const toggleDarkMode = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    switchTheme(newTheme);
  }, [theme, switchTheme]);

  const inDarkMode = useMemo(() => theme === 'dark', [theme]);

  return { toggleDarkMode, inDarkMode };
}
